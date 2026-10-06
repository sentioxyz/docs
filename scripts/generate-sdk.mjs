// SDK Reference content (content/sdk, gitignored) from scripts/sdk-docs. That folder has its own
// install: the SDK's dependency tree conflicts with the site's peers (e.g. vite). Skips the install
// and the generation when the output already matches the pinned versions and the generator.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { generatorHash } from './sdk-inputs.mjs';

const dir = './scripts/sdk-docs';
const out = './content/sdk';
const stampFile = path.join(out, '.generated');
const stamp = generatorHash();

if (fs.existsSync(stampFile) && fs.readFileSync(stampFile, 'utf8') === stamp) {
  console.log('SDK Reference is up to date');
  process.exit(0);
}

// npm keeps a copy of the lockfile it installed from in node_modules
const installed = path.join(dir, 'node_modules/.package-lock.json');
const lock = path.join(dir, 'package-lock.json');
if (!fs.existsSync(installed) || fs.statSync(installed).mtimeMs < fs.statSync(lock).mtimeMs) {
  execFileSync('npm', ['ci', '--no-audit', '--no-fund'], { cwd: dir, stdio: 'inherit' });
}
execFileSync(process.execPath, [path.join(dir, 'generate.mjs')], { stdio: 'inherit' });
fs.writeFileSync(stampFile, stamp);
