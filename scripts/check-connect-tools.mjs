// Fails when the Sentio Connect tools reference has drifted from the tool list the
// MCP server advertises (content/docs/connect/tools.json, synced by its CI):
// every listed tool needs a `### \`name\`` section in tools.mdx, and every such
// section must still be a listed tool.
import { readFileSync } from 'node:fs';

const dir = new URL('../content/docs/connect/', import.meta.url);
const listed = new Set(JSON.parse(readFileSync(new URL('tools.json', dir), 'utf8')).tools.map((t) => t.name));
const written = new Set([...readFileSync(new URL('tools.mdx', dir), 'utf8').matchAll(/^### `([a-z_]+)`/gm)].map((m) => m[1]));

const missing = [...listed].filter((n) => !written.has(n));
const stale = [...written].filter((n) => !listed.has(n));
if (missing.length || stale.length) {
  if (missing.length) console.error(`connect/tools.mdx has no section for: ${missing.join(', ')}`);
  if (stale.length) console.error(`connect/tools.mdx documents tools the server no longer has: ${stale.join(', ')}`);
  process.exit(1);
}
console.log(`connect/tools.mdx documents all ${listed.size} tools`);
