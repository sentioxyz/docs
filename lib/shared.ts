import { createGetUrl } from 'fumadocs-core/source';

export const appName = 'Sentio';

/** Keep in sync with the description on the main website (www.sentio.xyz) */
export const SITE_DESCRIPTION =
  'Monitor. Analyze. Diagnose. All In One Place. End-to-end observability platform to help you gain insights, secure assets and troubleshoot transactions for your decentralized applications.';

/**
 * Next.js prefixes links, redirects and assets with basePath; use it only for URLs it does
 * not (fetch calls, raw `<img>` in MDX, links in llms.txt).
 */
export { basePath } from './base-path.mjs';

/** Website home, on the same domain but outside basePath (see components/sentio-home-link.tsx) */
export const websiteHomeUrl = '/';

/** Empty because docs are served from the basePath root (`/<slug>`, `/reference/...`). */
export const docsRoute = '';
export const docsImageRoute = '/og';
export const docsContentRoute = '/llms.mdx';

/**
 * The site is two builds on one origin: `main` (content/docs, served by the Worker) and `sdk`
 * (content/sdk, the SDK Reference: a static export served from the Worker's assets, see
 * scripts/build-sdk.mjs). Links between them are full page loads.
 */
export type SiteBuild = 'main' | 'sdk';

/** Whether a basePath-relative URL is a page of the `sdk` build (the SDK Reference tab) */
export function isSdkUrl(href: string) {
  return /^\/sdk(?:[/#?]|$)/.test(href);
}

/**
 * Top nav tabs; each maps to a `root: true` folder under content/docs (content/sdk for the
 * `sdk` build). `segment` is the tab's first URL segment ('' for Guides, which sits at the root).
 * Guides links straight to its first page (see also the redirects in next.config.mjs).
 * Absolute URLs are external tabs and open in a new tab.
 */
export const SENTIO_TABS = [
  { title: 'Guides', url: '/readme', segment: '' },
  { title: 'Sentio Network', url: '/sentio-network', segment: 'sentio-network' },
  { title: 'Sentio Connect', url: '/connect', segment: 'connect' },
  { title: 'Changelog', url: '/changelog', segment: 'changelog' },
  { title: 'API Reference', url: '/reference', segment: 'reference' },
  { title: 'SDK Reference', url: '/sdk', segment: 'sdk', site: 'sdk' },
] as const;

const getContentUrl = createGetUrl(docsContentRoute);

export function getPageMarkdownUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'content.md'];

  return { segments, url: getContentUrl(segments, page.locale) };
}

const getImageUrl = createGetUrl(docsImageRoute);

export function getPageImageUrl(page: { slugs: string[]; locale?: string }) {
  const segments = [...page.slugs, 'image.png'];

  return { segments, url: getImageUrl(segments, page.locale) };
}
