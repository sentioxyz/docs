// The SDK Reference as a static export: its ~2,000 pages would not fit the Worker's bundle limit
// next to the main site. Generates content/sdk (scripts/generate-sdk.mjs), exports the *.sdk.tsx
// routes (DOCS_BUILD=sdk, see next.config.mjs) and adds `<page>.md` next to each page: static
// assets are answered before the Worker, so proxy.ts never rewrites those URLs.
//
// Skipped when .next-sdk already holds the export of the same inputs (scripts/sdk-inputs.mjs): the
// deploy workflows restore it from the Actions cache, so only an SDK version or site code change
// pays for the export (~3.5 min on CI).
//
// `--into <dir>` then copies the SDK's files into <dir> (the Worker's assets under basePath, see
// build:cf), where Cloudflare serves them without running the Worker.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { exportHash } from './sdk-inputs.mjs';

// next.config.mjs distDir: with output: 'export' Next writes the export there (and builds in .next,
// so run this after the main build, not alongside it)
const exportDir = './.next-sdk';
const intoArg = process.argv.indexOf('--into');
const into = intoArg === -1 ? undefined : process.argv[intoArg + 1];

const inputs = exportHash();
const inputsFile = path.join(exportDir, '.inputs');
const mdRoot = path.join(exportDir, 'llms.mdx/sdk');

if (fs.existsSync(inputsFile) && fs.readFileSync(inputsFile, 'utf8') === inputs) {
  console.log(`SDK Reference export in ${exportDir} is up to date (${inputs})`);
} else {
  execFileSync(process.execPath, ['scripts/generate-sdk.mjs'], { stdio: 'inherit' });
  fs.rmSync(exportDir, { recursive: true, force: true });
  execFileSync(process.execPath, ['node_modules/next/dist/bin/next', 'build'], {
    stdio: 'inherit',
    /*
     * Next embeds the build ID in every page; a random one per build would make every file new and
     * every deploy upload all ~15k of them. The inputs' hash keeps unchanged pages identical.
     */
    env: { ...process.env, DOCS_BUILD: 'sdk', SDK_BUILD_ID: `sdk-${inputs}` },
  });

  // /llms.mdx/sdk/<slug>/content.md -> /sdk/<slug>.md
  let mdCount = 0;
  for (const file of fs.readdirSync(mdRoot, { recursive: true })) {
    if (path.basename(file) !== 'content.md') continue;
    const slug = path.dirname(file);
    const target = path.join(exportDir, slug === '.' ? 'sdk.md' : path.join('sdk', `${slug}.md`));
    fs.mkdirSync(path.dirname(target), { recursive: true });
    fs.copyFileSync(path.join(mdRoot, file), target);
    mdCount++;
  }
  fs.writeFileSync(inputsFile, inputs);
  console.log(`SDK Reference exported to ${exportDir} (${mdCount} pages)`);
}

if (into) {
  // Only what the SDK build owns; the export also holds copies of public/ and a 404 page
  const owned = fs
    .readdirSync(exportDir)
    .filter((name) => name === '_next' || name === 'sdk' || name.startsWith('sdk.'));
  for (const name of owned) {
    fs.cpSync(path.join(exportDir, name), path.join(into, name), { recursive: true });
  }
  fs.cpSync(mdRoot, path.join(into, 'llms.mdx/sdk'), { recursive: true });
  console.log(`Copied ${owned.join(', ')}, llms.mdx/sdk into ${into}`);
}
