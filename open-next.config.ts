import { defineCloudflareConfig } from "@opennextjs/cloudflare";
import staticAssetsIncrementalCache from "@opennextjs/cloudflare/overrides/incremental-cache/static-assets-incremental-cache";

// Cloudflare Workers adapter. The pages are prerendered at build time, and
// OpenNext serves prerendered pages from its incremental cache: with the
// default no-op cache they 404. The static-assets cache serves them straight
// from the uploaded build, with no KV or R2. It never revalidates, which
// matches this site: no ISR, "use cache" or revalidate. If that changes,
// switch to the KV or R2 incremental cache.
export default defineCloudflareConfig({
  incrementalCache: staticAssetsIncrementalCache,
});
