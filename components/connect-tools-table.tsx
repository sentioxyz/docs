import data from '@/content/docs/connect/tools.json';

// content/docs/connect/tools.json is synced from the Sentio Connect MCP server's
// tools/list by its CI — don't edit it by hand. scripts/check-connect-tools.mjs
// keeps the written sections of tools.mdx in step with it.

type Schema = { properties?: Record<string, unknown>; required?: string[] };

function args(schema: Schema) {
  const names = Object.keys(schema.properties ?? {});
  if (names.length === 0) return '—';
  const required = new Set(schema.required ?? []);
  return names.map((name, i) => (
    <span key={name}>
      {i > 0 && ', '}
      <code>{required.has(name) ? name : `${name}?`}</code>
    </span>
  ));
}

export function ConnectToolsTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>Tool</th>
          <th>Capability</th>
          <th>Access</th>
          <th>Arguments</th>
        </tr>
      </thead>
      <tbody>
        {data.tools.map((tool) => (
          <tr key={tool.name}>
            <td>
              <a href={`#${tool.name}`}>
                <code>{tool.name}</code>
              </a>
            </td>
            <td>{tool.capabilityName}</td>
            <td>{tool.readOnly ? 'read-only' : <strong>{tool.destructive ? 'write, destructive' : 'write'}</strong>}</td>
            <td>{args(tool.inputSchema as Schema)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
