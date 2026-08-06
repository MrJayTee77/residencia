import type { APIRoute } from 'astro';
import { unitOrder } from '../data/units-v3';
import { cases } from '../data/cases';

/** Hand-rolled so the build stays dependency-free. Lists both locales of every
    live v3 route, each pointing at its counterpart via xhtml:link. */
export const GET: APIRoute = ({ site }) => {
  const origin = (site ?? new URL('https://mrjaytee77.github.io')).origin;
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const routes = ['v3', 'v3/work', 'v3/about',
    ...unitOrder.map((u) => `v3/${u}`),
    ...cases.map((c) => `v3/case/${c.slug}`)];

  const url = (path: string) => `${origin}${base}/${path}/`.replace(/([^:]);\/{2,}/g, '$1/');
  const entry = (path: string) => {
    const es = url(path);
    const en = url(`en/${path}`);
    return [es, en]
      .map(
        (loc) => `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="es" href="${es}"/>
    <xhtml:link rel="alternate" hreflang="en" href="${en}"/>
    <changefreq>monthly</changefreq>
  </url>`,
      )
      .join('\n');
  };

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${routes.map(entry).join('\n')}
</urlset>`;

  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
