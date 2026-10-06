// Generates the SDK Reference content (content/sdk) with TypeDoc + typedoc-plugin-markdown, from
// the @sentio/sdk version pinned in ./package.json and the @typemove packages that release pins.
// Both packages ship their src/, which is what TypeDoc reads.
//
// One top-level sidebar group per entry of GROUPS (content/sdk/<dir>). typemove is built
// first: its page URLs feed the @sentio/sdk build as externalSymbolLinkMappings, so SDK pages link
// to the typemove types they use.
import fs from 'node:fs';
import path from 'node:path';
import { Application, Converter, ReflectionKind, RendererEvent } from 'typedoc';
import { MarkdownPageEvent } from 'typedoc-plugin-markdown';

const here = import.meta.dirname;
const modulesDir = path.join(here, 'node_modules');
const outRoot = path.resolve(here, '../../content/sdk');
// URL of the tab; lib/sdk-source.ts serves content/sdk/<dir>/... there, minus the sentio-sdk dir
const TAB_URL = '/sdk';

const versionOf = (pkg) =>
  JSON.parse(fs.readFileSync(path.join(modulesDir, pkg, 'package.json'), 'utf8')).version;

const MOVE_CHAINS = ['aptos', 'sui', 'iota'];
// The framework addresses typemove ships bindings for: src/builtin/0x1.ts, ...
const moveAddresses = (chain) =>
  fs.readdirSync(path.join(modulesDir, `@typemove/${chain}/src/builtin`)).filter((f) => /^0x\w+\.ts$/.test(f)).map((f) => f.slice(0, -3));

const GROUPS = [
  {
    dir: 'typemove',
    title: 'typemove',
    package: (moduleName) => `@typemove/${moduleName.split('/')[0]}`,
    tsconfig: 'tsconfig.typemove.json',
    entryPoints: [
      ...['move', ...MOVE_CHAINS].map((p) => `@typemove/${p}/src/index.ts`),
      ...MOVE_CHAINS.flatMap((c) => moveAddresses(c).map((a) => `@typemove/${c}/src/builtin/${a}.ts`)),
    ],
    // Builtins hold one namespace per Move module (with entry/view sub-namespaces): structs and
    // functions go inline on the Move module's page instead of a page each
    options: { membersWithOwnFile: ['Class', 'Enum'], externalPattern: ['**/node_modules/!(@typemove)/**'] },
    // "aptos/src/builtin/0x1" -> "aptos/builtin/0x1"
    moduleName: (name) => name.replace(/\/src(?=\/|$)/, ''),
    importPath: (name) => `@typemove/${name}`,
  },
  {
    dir: 'sentio-sdk',
    title: '@sentio/sdk',
    package: () => '@sentio/sdk',
    tsconfig: 'tsconfig.sdk.json',
    // The SDK's own typedoc.json entry points
    entryPoints: [
      '', 'aptos', 'aptos/builtin', 'core', 'eth', 'eth/builtin', 'fuel', 'move', 'solana',
      'solana/builtin', 'sui', 'sui/builtin', 'iota', 'iota/builtin', 'testing', 'utils',
    ].map((m) => `@sentio/sdk/src/${m ? `${m}/` : ''}index.ts`),
    options: {
      entryModule: 'root',
      // entryModule gives the project a URL only when it has a readme
      readme: path.join(here, 'sdk-readme.md'),
      mergeReadme: true,
      // @sentio/protos is the SDK's own generated code (HandlerType, ...), re-exported from the root
      externalPattern: ['**/node_modules/!(@sentio)/**', '**/node_modules/@sentio/!(sdk|protos)/**'],
    },
    // src/index.ts is the "." module; it becomes the group's index page (entryModule)
    moduleName: (name) => (name === '.' ? 'root' : name),
    importPath: (name) => (name === 'root' ? '@sentio/sdk' : `@sentio/sdk/${name}`),
  },
];

const COMMON = {
  plugin: ['typedoc-plugin-markdown', 'typedoc-plugin-frontmatter'],
  fileExtension: '.mdx',
  entryFileName: 'index',
  hidePageHeader: true,
  hideBreadcrumbs: true,
  // Signatures stay highlighted code blocks; expandParameters puts the (linked) parameter types in
  // the tables, function-typed parameters included
  useCodeBlocks: true,
  expandParameters: true,
  sanitizeComments: true,
  disableSources: true,
  parametersFormat: 'table',
  interfacePropertiesFormat: 'table',
  classPropertiesFormat: 'table',
  enumMembersFormat: 'table',
  typeDeclarationFormat: 'table',
  excludePrivate: true,
  excludeProtected: true,
  excludeInternal: true,
  excludeExternals: true,
  // The published src is not type-checked against this exact dependency tree
  skipErrorChecking: true,
  logLevel: 'Error',
};

/** /sdk/<group>/<page>#anchor, the URL fumadocs serves a generated file at */
function pageUrl(group, fileUrl) {
  const [file, anchor] = fileUrl.split('#');
  const segs = [...(group.dir === 'sentio-sdk' ? [] : [group.dir]), ...file.replace(/\.mdx$/, '').split('/')];
  if (group.options.entryModule && segs[0] === group.options.entryModule) segs.shift();
  if (segs.at(-1) === 'index') segs.pop();
  return `${TAB_URL}/${segs.join('/')}${anchor ? `#${anchor}` : ''}`;
}

/**
 * protobuf-es tags every generated declaration `@generated from <kind> <proto name>`, which TypeDoc
 * would render as a "Generated" section. Replace it with a one-line note in the summary, with the
 * proto types of a field linked to their generated TS declarations (processor.Entity.Field ->
 * Entity_Field). Enum values drop it: the members table already shows name and value.
 */
function rewriteProtoComments(project) {
  const byName = new Map();
  const kinds = ReflectionKind.Enum | ReflectionKind.Interface | ReflectionKind.TypeAlias | ReflectionKind.Class;
  for (const r of project.getReflectionsByKind(kinds)) if (!byName.has(r.name)) byName.set(r.name, r);
  // proto package segments are lowercase: processor.Entity.Field -> Entity_Field
  const tsName = (proto) => proto.split('.').filter((seg) => !/^[a-z]/.test(seg)).join('_');
  const typeParts = (expr) =>
    expr.split(/([a-z][\w]*(?:\.[A-Za-z_]\w*)+)/).filter(Boolean).map((seg, i) => {
      const target = i % 2 || /\./.test(seg) ? byName.get(tsName(seg)) : undefined;
      return target ? { kind: 'inline-tag', tag: '@link', text: seg, target } : { kind: 'text', text: seg };
    });
  const comments = Object.values(project.reflections).flatMap((r) => [r.comment, ...(r.signatures ?? []).map((sig) => sig.comment)]);
  for (const comment of comments) {
    const tag = comment?.blockTags.find((t) => t.tag === '@generated');
    if (!tag) continue;
    comment.blockTags = comment.blockTags.filter((t) => t !== tag);
    const text = tag.content.map((part) => part.text).join('').trim();
    let note;
    const field = text.match(/^from field: (.+) (\w+) = (\d+);$/);
    if (field) {
      note = [{ kind: 'text', text: 'Protobuf field ' }, { kind: 'code', text: `\`${field[2]} = ${field[3]}\`` }, { kind: 'text', text: ': ' }, ...typeParts(field[1])];
    } else if (/^from enum value:/.test(text)) {
      continue;
    } else {
      const decl = text.match(/^from (\w+):? (.+?);?$/);
      if (!decl) continue;
      note = [{ kind: 'text', text: `Protobuf ${decl[1]} ` }, { kind: 'code', text: `\`${decl[2]}\`` }];
    }
    if (comment.summary.length) comment.summary.push({ kind: 'text', text: '\n\n' });
    comment.summary.push(...note);
  }
}

/** Sidebar badge per page (frontmatter `icon`, see components/sdk-kind-icon.tsx) */
const KIND_ICONS = new Map([
  [ReflectionKind.Module, 'module'],
  [ReflectionKind.Namespace, 'namespace'],
  [ReflectionKind.Class, 'class'],
  [ReflectionKind.Interface, 'interface'],
  [ReflectionKind.Function, 'function'],
  [ReflectionKind.TypeAlias, 'type'],
  [ReflectionKind.Variable, 'variable'],
  [ReflectionKind.Enum, 'enum'],
]);

/** The module and namespaces a reflection is declared in, outermost first */
function definedIn(reflection) {
  const chain = [];
  for (let r = reflection.parent; r && !r.kindOf(ReflectionKind.Project); r = r.parent) {
    // members of a class/interface page are not pages of their own; only containers count
    if (r.kindOf(ReflectionKind.Module | ReflectionKind.Namespace)) chain.unshift(r);
  }
  return chain;
}

/** Move builtin namespaces of the SDK: `_0x1` etc. under aptos/builtin, sui/builtin, iota/builtin */
const isSdkMoveBuiltin = (mod) => /^(aptos|sui|iota)\/builtin$/.test(mod?.name ?? '');

async function build(group, linkMappings, moveTypes) {
  const out = path.join(outRoot, group.dir);
  const app = await Application.bootstrapWithPlugins({
    ...COMMON,
    ...group.options,
    tsconfig: path.join(here, group.tsconfig),
    entryPoints: group.entryPoints.map((e) => path.join(modulesDir, e)),
    externalSymbolLinkMappings: linkMappings,
    out,
  });

  app.converter.on(Converter.EVENT_RESOLVE_BEGIN, (ctx) => {
    for (const mod of ctx.project.children ?? []) mod.name = group.moduleName(mod.name);
    for (const ns of ctx.project.getReflectionsByKind(ReflectionKind.Namespace)) {
      // already gone with a removed ancestor
      if (!ctx.project.getReflectionById(ns.id)) continue;
      const siblings = ns.parent?.children ?? [];
      // typemove: the per-struct companion namespace (TYPE_QNAME + type()) would be a page each
      const isCompanion = siblings.some(
        (s) => s !== ns && s.name === ns.name && s.kindOf(ReflectionKind.Interface | ReflectionKind.Class)
      );
      // SDK: Move modules' types duplicate typemove's; keep only the processor classes
      const isSdkMoveTypes = isSdkMoveBuiltin(ns.parent?.parent);
      if (isCompanion || isSdkMoveTypes) ctx.project.removeReflection(ns);
    }
  });

  app.renderer.on(MarkdownPageEvent.BEGIN, (page) => {
    const m = page.model;
    let title = m.name;
    let description = ReflectionKind.singularString(m.kind);
    if (m.kindOf(ReflectionKind.Project)) [title, description] = [group.title, `Entry points of ${group.title}`];
    else if (m.kindOf(ReflectionKind.Module)) title = group.importPath(m.name);
    else {
      // Plain text (the description is not Markdown): "Class in @sentio/sdk/eth/builtin › erc20"
      const [mod, ...namespaces] = definedIn(m);
      if (mod) description += ` in ${[group.importPath(mod.name), ...namespaces.map((ns) => ns.name)].join(' › ')}`;
    }
    const icon = KIND_ICONS.get(m.kind);
    page.frontmatter = { title, description, ...(icon ? { icon } : {}), ...page.frontmatter };
  });

  app.renderer.on(MarkdownPageEvent.END, (page) => {
    page.contents = toMdx(page.contents);
    // SDK Move processors: their event/struct types are typemove's, one page per Move module
    const addrNs = page.model.parent;
    if (page.model.kindOf(ReflectionKind.Class) && isSdkMoveBuiltin(addrNs?.parent)) {
      const chain = addrNs.parent.name.split('/')[0];
      const address = addrNs.name.replace(/^_/, '');
      const moveModule = page.model.name;
      // The handlers' event types were the SDK's copies of typemove's, removed above: link the
      // names to typemove's types of the same Move module
      const types = moveTypes[`${chain}/builtin/${address}`] ?? {};
      page.contents = page.contents.replace(/(?<![[\w])`([A-Za-z_$][\w$]*)`(?!\]\()/g, (match, name) => {
        const typeUrl = types[`${moveModule}.${name}`];
        return typeUrl ? `[\`${name}\`](${typeUrl})` : match;
      });
      const moduleUrl = types[moveModule];
      if (moduleUrl) {
        page.contents = page.contents.replace(
          /^(---\n[\s\S]*?\n---\n)/,
          `$1\nEvent and struct types of this Move module: [\`@typemove/${chain}\` › \`${address}::${moveModule}\`](${moduleUrl})\n\n`
        );
      }
    }
    // The description can't link, so the body starts with the same path, linked (inserted last, so
    // it comes first)
    const parents = page.model.kindOf(ReflectionKind.Project | ReflectionKind.Module) ? [] : definedIn(page.model);
    if (parents.length) {
      const router = app.renderer.router;
      const links = parents.map((r, i) => {
        const text = i === 0 ? group.importPath(r.name) : r.name;
        if (!router.hasUrl(r)) return `\`${text}\``;
        let rel = path.posix.relative(path.posix.dirname(page.url), router.getFullUrl(r));
        if (!rel.startsWith('.')) rel = `./${rel}`;
        return `[\`${text}\`](${rel})`;
      });
      page.contents = page.contents.replace(/^(---\n[\s\S]*?\n---\n)/, `$1\nDefined in ${links.join(' › ')}\n\n`);
    }
  });

  // package -> qualified name -> URL, for the groups built after this one; the router only
  // exists while rendering
  const mappings = {};
  app.renderer.on(RendererEvent.END, (event) => {
    const router = app.renderer.router;
    for (const r of Object.values(event.project.reflections)) {
      if (!router.hasUrl(r) || r.kindOf(ReflectionKind.Project | ReflectionKind.Module)) continue;
      let mod = r;
      while (mod && !mod.kindOf(ReflectionKind.Module)) mod = mod.parent;
      if (!mod) continue;
      const qualified = r.getFullName().slice(mod.getFullName().length + 1);
      const url = pageUrl(group, router.getFullUrl(r));
      (mappings[group.package(mod.name)] ??= {})[qualified] = url;
      // per address ("aptos/builtin/0x1"), for the SDK processors of those Move modules
      if (/^(aptos|sui|iota)\/builtin\/0x\w+$/.test(mod.name)) (moveTypes[mod.name] ??= {})[qualified] = url;
    }
  });

  app.converter.on(Converter.EVENT_RESOLVE_END, (ctx) => rewriteProtoComments(ctx.project));

  const project = await app.convert();
  if (!project) throw new Error(`TypeDoc could not convert ${group.title}`);
  fs.rmSync(out, { recursive: true, force: true });
  await app.generateOutputs(project);
  if (app.logger.hasErrors()) throw new Error(`TypeDoc failed for ${group.title}`);
  // With entryModule, the project's own page (readme + module list) lands next to the entry
  // module's index; nothing links to it
  if (group.options.entryModule) fs.rmSync(path.join(out, 'index-1.mdx'), { force: true });

  writeMeta(group, out, project);
  return mappings;
}

/**
 * MDX-safe output: typedoc's H1 duplicates the page title DocsTitle renders; a bare <TypeName> in a
 * comment would parse as a JSX component (the plugin's own lowercase <a id> anchors stay); fumadocs
 * resolves a relative link only when it starts with ./ or ../
 */
function toMdx(contents) {
  let inFence = false;
  return contents
    .replace(/^# .*\n+/m, '')
    .split('\n')
    .map((line) => {
      if (line.startsWith('```')) inFence = !inFence;
      if (inFence) return line;
      return line
        .split(/(`[^`]*`)/)
        .map((part, i) => (i % 2 ? part : part.replace(/(?<!\\)<(?=[A-Z])/g, '\\<')))
        .join('');
    })
    .join('\n')
    .replace(/\]\((?![./#]|[a-z]+:)([^)\s]+\.mdx)/g, '](./$1');
}

/** Sidebar: the group is a fixed title; each module folder is collapsible under a short name */
function writeMeta(group, out, project) {
  const write = (dir, meta) =>
    fs.writeFileSync(path.join(dir, 'meta.json'), `${JSON.stringify(meta, null, 2)}\n`);
  const modules = (project.children ?? []).map((m) => m.name).filter((n) => n !== 'root');
  for (const name of modules) {
    // each path segment is a folder: aptos/builtin/0x1 -> "aptos", "builtin", "0x1"
    const segs = name.split('/');
    segs.forEach((seg, i) => {
      const dir = path.join(out, ...segs.slice(0, i + 1));
      if (!fs.existsSync(path.join(dir, 'meta.json')) && fs.existsSync(dir)) {
        write(dir, { title: i === 0 && group.dir === 'typemove' ? `@typemove/${seg}` : seg });
      }
    });
  }
  const kinds = ['classes', 'enumerations', 'functions', 'interfaces', 'type-aliases', 'variables'];
  const kindsIn = (dir) => kinds.filter((k) => fs.existsSync(path.join(dir, k)));
  const order = ['eth', 'aptos', 'sui', 'iota', 'move', 'solana', 'fuel', 'core', 'utils', 'testing'];
  const rank = (n) => (order.includes(n) ? order.indexOf(n) : order.length);
  const top = [...new Set(modules.map((n) => n.split('/')[0]))].sort((a, b) => rank(a) - rank(b));
  // The entry module's members sit in root/; "...root" lists them directly under the group.
  // index.mdx stays out of `pages`, so it is the folder's index: the group title links to it
  const entry = group.options.entryModule;
  if (entry) write(path.join(out, entry), { pages: kindsIn(path.join(out, entry)) });
  write(out, { title: group.title, pages: [...(entry ? [`...${entry}`] : kindsIn(out)), ...top] });
}

const sdkVersion = versionOf('@sentio/sdk');
console.log(`Generating SDK Reference for @sentio/sdk@${sdkVersion}, @typemove/*@${versionOf('@typemove/move')}`);
fs.mkdirSync(outRoot, { recursive: true });
let mappings = {};
const moveTypes = {};
for (const group of GROUPS) mappings = { ...mappings, ...(await build(group, mappings, moveTypes)) };
fs.writeFileSync(
  path.join(outRoot, 'meta.json'),
  `${JSON.stringify({ title: 'SDK Reference', description: `@sentio/sdk ${sdkVersion}`, pages: ['sentio-sdk', 'typemove'] }, null, 2)}\n`
);
console.log('Generated SDK Reference');
