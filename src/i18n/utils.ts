export const languages = { es: 'ES', en: 'EN' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

/** Site base path (e.g. '/residencia' on GitHub Pages, '' locally at root).
 *  Astro exposes the configured `base` via import.meta.env.BASE_URL (trailing slash). */
const BASE = (import.meta.env.BASE_URL || '/').replace(/\/$/, '');

/** Build the URL for a given route key in a given language.
 *  route '' => home. ES lives at root, EN under /en/. Base-path aware. */
export function localizedPath(route: string, lang: Lang): string {
  const clean = route.replace(/^\/+|\/+$/g, '');
  if (lang === 'es') return clean ? `${BASE}/${clean}` : `${BASE}/`;
  return clean ? `${BASE}/en/${clean}` : `${BASE}/en/`;
}
