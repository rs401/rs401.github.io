// @ts-check
import { defineConfig } from 'astro/config';

// Deployed to GitHub Pages at the apex domain via the CNAME in public/.
// `site` is absolute so sitemap/RSS/canonical URLs are correct.
export default defineConfig({
  site: 'https://rs401.com',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
