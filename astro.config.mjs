import { defineConfig } from 'astro/config';

// Multi-brand marketing site: Residencia (parent) + GR8 / Synergy landings.
// Bilingual: Spanish at root (/), English under /en/.
export default defineConfig({
  // Published to GitHub Pages as a project site (served under /residencia/).
  site: 'https://mrjaytee77.github.io',
  base: '/residencia',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: { prefixDefaultLocale: false },
  },
});
