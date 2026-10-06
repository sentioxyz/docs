import { defineCloudflareConfig } from '@opennextjs/cloudflare';
import staticAssetsIncrementalCache from '@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache';

/*
 * Every page is prerendered at build time with no revalidation, so the cache is served read-only
 * from Workers static assets (no R2/KV needed). The only request-time renders are 404s for unknown
 * paths (mostly scanners), which Next.js then tries to cache: the stock set() just logs each one
 * as an error (thousands a week). A read-only cache has nothing to do there. The name stays the
 * stock one, which `opennextjs-cloudflare populateCache` keys on.
 */
const readOnlyStaticAssetsCache = {
  name: staticAssetsIncrementalCache.name,
  get: staticAssetsIncrementalCache.get.bind(staticAssetsIncrementalCache),
  set: async () => {},
  delete: staticAssetsIncrementalCache.delete.bind(staticAssetsIncrementalCache),
};

export default defineCloudflareConfig({
  incrementalCache: readOnlyStaticAssetsCache,
  /*
   * Off because of basePath: the interceptor misses the per-segment prefetch data and answers
   * `Next-Router-Segment-Prefetch` requests with the full page RSC, which sends the client
   * router into an endless prefetch loop. Next.js serves the same cache entries itself.
   */
  enableCacheInterception: false,
});
