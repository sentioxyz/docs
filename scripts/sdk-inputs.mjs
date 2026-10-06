// What the SDK Reference is built from, as hashes: generate-sdk.mjs skips TypeDoc when the
// generator's hash is unchanged, build-sdk.mjs skips the static export when the export's is (and
// uses it as the build ID). Keep EXPORT_PATHS in sync with the cache key in
// .github/workflows/deploy*.yml, which restores the previous export.
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import path from 'node:path';

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

/** Site sources the static export renders the generated content with */
export const EXPORT_PATHS = [
  'app',
  'components',
  'lib',
  'public',
  'patches',
  'next.config.mjs',
  'postcss.config.mjs',
  'package-lock.json',
  'scripts/build-sdk.mjs',
  'scripts/sdk-inputs.mjs',
];

/** The generator, the site sources (committed, plus local edits) and the build-time site URL */
export function exportHash() {
  const hash = crypto.createHash('sha256');
  hash.update(generatorHash());
  hash.update(execFileSync('git', ['ls-files', '-s', '--', ...EXPORT_PATHS]));
  hash.update(execFileSync('git', ['diff', 'HEAD', '--', ...EXPORT_PATHS]));
  // Inlined at build time (metadataBase); test and production builds share the cache
  hash.update(process.env.NEXT_PUBLIC_SITE_URL ?? '');
  return hash.digest('hex').slice(0, 20);
}
