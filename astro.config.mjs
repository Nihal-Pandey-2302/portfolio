// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Canonical/OG URLs, structured data and the sitemap all derive from this single value.
  // (public/robots.txt names the sitemap by full URL: keep it in step.)
  site: "https://nihalpandey.dev",
  integrations: [sitemap()],
  // Three pages share ~35 KB of CSS: inlining it removes two render-blocking
  // requests from every first visit, which is worth more here than caching it.
  build: { inlineStylesheets: "always" },
});
