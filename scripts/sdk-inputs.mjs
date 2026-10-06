// What the SDK Reference is built from, as hashes: generate-sdk.mjs skips TypeDoc when the
// generator's hash is unchanged, build-sdk.mjs skips the static export when the export's is (and
// uses it as the build ID). Run directly, it prints the export's hash: the deploy workflows key
// their cache of the previous export on it.
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import ts from 'typescript';

const generatorDir = './scripts/sdk-docs';

/** The generator and the versions it pins */
export function generatorHash() {
  const inputs = fs
    .readdirSync(generatorDir)
    .filter((f) => /^(package-lock\.json|generate\.mjs|tsconfig\..+\.json|.+\.md)$/.test(f))
    .sort();
  const hash = crypto.createHash('sha256');
  for (const f of inputs) hash.update(f).update(fs.readFileSync(path.join(generatorDir, f)));
  return hash.digest('hex');
}

/**
 * The site's own files the SDK build compiles: the import graph of its routes (*.sdk.ts(x)),
 * resolved like the build does (tsconfig paths), CSS imports included. Files only the main build
 * imports (the Ask AI backend, the API pages, ...) are not in it, so changing them does not
 * rebuild the SDK Reference. Tailwind scans every file for class names, but a class only those
 * files use never appears on an SDK page.
 */
export function exportSourceFiles() {
  const config = ts.parseJsonConfigFileContent(
    ts.readConfigFile('tsconfig.json', ts.sys.readFile).config,
    ts.sys,
    '.',
  );
  const host = ts.createCompilerHost(config.options);
  const entries = execFileSync('git', ['ls-files', '--cached', '--others', '--exclude-standard', 'app'])
    .toString()
    .split('\n')
    .filter((f) => /\.sdk\.tsx?$/.test(f));
  const seen = new Set();
  const stack = entries.map((f) => path.resolve(f));
  while (stack.length) {
    const file = stack.pop();
    if (seen.has(file)) continue;
    seen.add(file);
    if (!/\.(m?[jt]sx?)$/.test(file)) continue;
    const { importedFiles } = ts.preProcessFile(fs.readFileSync(file, 'utf8'), true, true);
    for (const { fileName: spec } of importedFiles) {
      if (spec.endsWith('.css')) {
        if (spec.startsWith('.')) stack.push(path.resolve(path.dirname(file), spec));
        continue;
      }
      const resolved = ts.resolveModuleName(spec, file, config.options, host).resolvedModule;
      if (resolved && !resolved.isExternalLibraryImport && !resolved.resolvedFileName.includes('/node_modules/')) {
        stack.push(path.resolve(resolved.resolvedFileName));
      }
    }
  }
  return [...seen].map((f) => path.relative('.', f)).sort();
}

/** Everything else the export depends on, as committed (plus local edits) */
const EXPORT_CONFIG = [
  'public',
  'patches',
  'next.config.mjs',
  'postcss.config.mjs',
  'tsconfig.json',
  'package-lock.json',
  'scripts/build-sdk.mjs',
  'scripts/sdk-inputs.mjs',
];

/** The generator, the SDK build's source files, its config and the build-time site URL */
export function exportHash() {
  const hash = crypto.createHash('sha256');
  hash.update(generatorHash());
  for (const file of exportSourceFiles()) hash.update(file).update(fs.readFileSync(file));
  hash.update(execFileSync('git', ['ls-files', '-s', '--', ...EXPORT_CONFIG]));
  hash.update(execFileSync('git', ['diff', 'HEAD', '--', ...EXPORT_CONFIG]));
  // Inlined at build time (metadataBase); test and production builds share the cache
  hash.update(process.env.NEXT_PUBLIC_SITE_URL ?? '');
  return hash.digest('hex').slice(0, 20);
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  if (process.argv.includes('--files')) console.log(exportSourceFiles().join('\n'));
  else console.log(exportHash());
}
