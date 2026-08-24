// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Temporary: Vercel deployment URL until a custom domain is attached.
  // Canonical/OG URLs and the sitemap all derive from this single value.
  site: "https://portfolio-alpha-black-q6u25stswg.vercel.app",
  integrations: [sitemap()],
});
