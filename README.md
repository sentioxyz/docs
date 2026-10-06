# .

This is a Next.js application generated with
[Create Fumadocs](https://github.com/fuma-nama/fumadocs).

Run development server:

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

Open http://localhost:3000 with your browser to see the result.

## Explore

In the project, you can see:

- `lib/source.ts`: Code for content source adapter, [`loader()`](https://fumadocs.dev/docs/headless/source-api) provides the interface to access your content.
- `lib/layout.shared.tsx`: Shared options for layouts, optional but preferred to keep.

| Route                  | Description                                                       |
| ---------------------- | ----------------------------------------------------------------- |
| `app/[[...slug]]`      | Doc pages (`/<slug>`, `/reference/…`, `/changelog/…` under basePath). |
| `app/api/search`       | The Route Handler for search.                                     |
| `proxy.ts`             | Markdown content negotiation (`.md` suffix / `Accept`).           |

## URLs

The site is mounted under **`/docs` on the website domain** (Next.js `basePath`, set in
`lib/base-path.mjs`): `www.sentio.xyz/docs` in production, `website-test.sentio.xyz/docs` for
test. Worker routes on `/docs` (see `wrangler.jsonc`) take precedence over the website origin.
Paths below are relative to basePath; page slugs keep those of the old ReadMe site:

| Folder                  | URL                  | Slug                                                     |
| ----------------------- | -------------------- | -------------------------------------------------------- |
| `content/docs/guides`   | `/<slug>`            | file name (a folder's `index.mdx` takes the folder name) |
| `content/docs/network`  | `/sentio-network/<slug>` | file name (`index.mdx` is the tab root)              |
| `content/docs/connect`  | `/connect/<slug>`    | file name (`index.mdx` is the tab root)                  |
| `content/docs/api`      | `/reference/<slug>`  | ReadMe slug from `scripts/reference-slugs.json`          |
| `content/docs/changelog`| `/changelog/<slug>`  | file name                                                |

Guides sit at the root, so no guide may be named `reference`, `sentio-network`, `connect` or
`changelog`. Folders only shape the sidebar; `readmeSlugs()` in `lib/source.ts` flattens them,
so page file names must be unique within a tab (the build fails on duplicates). The few ReadMe URLs that are not pages
here (empty folder pages, API tag pages, the old `/docs/<slug>` guide prefix) are redirects in
`next.config.mjs`. Link to pages by their URL without basePath, e.g. `[API Key](/api-key)`;
Next.js adds `/docs`. It does not for raw `<img src>` in MDX (`lib/remark-base-path.ts` handles
those), `fetch` calls or plain `<img>` in components: prefix `basePath` from `lib/shared.ts` there.

## Content pipeline

`content/docs` is generated from the old ReadMe docs, then edited by hand. To regenerate,
run the scripts in this order (each one depends on the output of the previous ones):

```bash
node scripts/migrate.mjs [source-dir]                  # guides tab from the ReadMe docs repo
node scripts/extract-reference-slugs.mjs [source-dir]  # scripts/reference-slugs.json (API page slugs)
npm run gen:api                                        # API pages from content/docs/api/openapi.json
node scripts/migrate-changelog.mjs                     # changelog posts from docs.sentio.xyz
```

The API Reference pages under `content/docs/api` are build output, not source: only
`openapi.json` and the tag intro pages (`<tag>/index.mdx`, served at `/reference/<tag>`) are
committed. The overview page (`/reference`) is generated from the hand-maintained
`scripts/api-overview.mdx` (base URL, authentication) plus a list of the tags. Endpoints are
grouped into one folder per OpenAPI tag, as on ReadMe. `npm run gen:api`
(`generate-api.mjs` + `generate-api-index.mjs`) wipes and regenerates the rest, and runs
automatically before `dev`, `build` and `types:check`. To change an endpoint page, update
`openapi.json` (or the scripts), never the generated `.mdx`.

### SDK Reference

The SDK Reference tab (`/sdk`) is generated with TypeDoc from the `@sentio/sdk` release pinned in
`scripts/sdk-docs/package.json` (its own install: the SDK's dependencies conflict with the
site's) and the `@typemove/*` packages that release pins. Its ~2,000 pages would not fit the
Worker's bundle, so it is a separate static export (the `*.sdk.tsx` routes, `DOCS_BUILD=sdk` in
`next.config.mjs`) that `build:cf` copies into the Worker's static assets:

```bash
npm run gen:sdk     # content/sdk (gitignored); skipped while the pinned versions are unchanged
npm run build:sdk   # static export to .next-sdk; skipped while its inputs are unchanged
npm run dev:sdk     # dev server for the SDK pages only, on port 3001
```

`sdk-version.yml` pins each new stable `@sentio/sdk` daily. The deploy workflows cache
`.next-sdk`, keyed by `scripts/sdk-inputs.mjs`: a deploy rebuilds it only when the SDK version,
the files the SDK pages import (`node scripts/sdk-inputs.mjs --files`) or the build config change.

## Deploy

The site runs on Cloudflare Workers via [OpenNext](https://opennext.js.org/cloudflare), one
Worker per environment (see `wrangler.jsonc`). GitHub Actions deploys with the
`CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` secrets:

| Environment | Worker        | URL                            | Workflow                                          |
| ----------- | ------------- | ------------------------------ | ------------------------------------------------- |
| test        | `test-docs`   | `website-test.sentio.xyz/docs` | `deploy.yml`: every push to `main`                |
| production  | `sentio-docs` | `www.sentio.xyz/docs`          | `deploy-production.yml`: manual, releases a chosen ref |

To release: Actions → **Deploy (production)** → Run workflow, with the branch, tag or SHA to ship
(default `main`). The job runs in the `production` GitHub Environment; add required reviewers
there to gate releases. Its first run creates the `sentio-docs` Worker and its routes.

`NEXT_PUBLIC_SITE_URL` (the website origin, used for metadata and OG image URLs) is inlined at
build time, so each environment is built separately.

```bash
npm run preview            # build and serve locally in the Workers runtime (localhost:8787/docs)
npm run deploy             # build and deploy to test (needs `wrangler login` or CLOUDFLARE_API_TOKEN)
npm run deploy:production  # build and deploy to production
```

`npm run build:cf` copies `cloudflare/_headers` to the asset root after the OpenNext build
(under `public/` it would land in `assets/docs/` and be ignored).
OpenNext's cache interception is off (`open-next.config.ts`): under basePath it answers
segment prefetches with the full page payload, which loops the client router.

Workers static assets are limited to 25 MiB per file, so keep files in `public/` below that.

### Patched dependencies

`patches/` holds [patch-package](https://github.com/ds300/patch-package) patches, applied on
`npm install` / `npm ci` via `postinstall`:

- `fumadocs-openapi` (pinned to an exact version so the patch keeps applying): the API
  playground shows the endpoint path as one string, with `{params}` highlighted and a
  Copy URL button (server URL + path, with the path/query params filled in the form; unfilled
  path params stay `{placeholders}`, API keys are never included). When upgrading it, re-apply the change in `dist/ui/playground/client.js`
  and run `npx patch-package fumadocs-openapi`.
- `fumadocs-ui`: the page actions (Copy Markdown, Open in ChatGPT/Claude) read basePath from
  Vite's `import.meta.env.BASE_URL` only; the patch uses Next.js' `__NEXT_ROUTER_BASEPATH`, in
  `dist/layouts/shared/page-actions.js`. Re-apply with `npx patch-package fumadocs-ui`.

### Fumadocs MDX

Collections are defined with the [Macro API](https://fumadocs.dev/docs/mdx/macro) in `lib/source.ts`.

Read the [Introduction](https://fumadocs.dev/docs/mdx) for further details.

## Learn More

To learn more about Next.js and Fumadocs, take a look at the following
resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js
  features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Fumadocs](https://fumadocs.dev) - learn about Fumadocs
