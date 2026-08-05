// Media extracted from the client's GR8 credentials deck (Credenciales GR8_15junio.pptx),
// normalised to WebP under public/media/. See scripts note in the commit message.
//
// Logos are all rendered as white silhouettes on transparency, so they read as one
// set on the ink band regardless of how each arrived in the deck.

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');
const m = (p: string) => `${BASE}/media/${p}`;

export type Logo = { src: string; name: string };

/** Client marks, alphabetical. Sourced from the client's own credentials deck. */
export const clientLogos: Logo[] = [
  'bacardi', 'bimbo', 'bonafont', 'claro-video', 'coca-cola', 'cupra', 'cyberpuerta',
  'danone', 'epic-games', 'ford', 'garnier', 'huawei', 'konami', 'kota', 'loreal',
  'mattel', 'mcdonalds', 'nba', 'netflix', 'nike', 'porsche', 'prime', 'rockstar',
  'samsung', 'tecate-pal-norte', 'telcel', 'vans', 'volkswagen', 'xbox',
].map((s) => ({
  src: m(`logos/${s}.webp`),
  name: {
    'bacardi': 'Bacardí', 'bimbo': 'Bimbo', 'bonafont': 'Bonafont', 'claro-video': 'Claro video',
    'coca-cola': 'Coca-Cola', 'cupra': 'CUPRA', 'cyberpuerta': 'CyberPuerta', 'danone': 'Danone',
    'epic-games': 'Epic Games Store', 'ford': 'Ford', 'garnier': 'Garnier', 'huawei': 'Huawei',
    'konami': 'Konami', 'kota': 'KOTA', 'loreal': "L'Oréal", 'mattel': 'Mattel',
    'mcdonalds': "McDonald's", 'nba': 'NBA', 'netflix': 'Netflix', 'nike': 'Nike',
    'porsche': 'Porsche', 'prime': 'Prime Hydration', 'rockstar': 'Rockstar Games',
    'samsung': 'Samsung', 'tecate-pal-norte': "Tecate Pa'l Norte", 'telcel': 'Telcel',
    'vans': 'Vans', 'volkswagen': 'Volkswagen', 'xbox': 'Xbox',
  }[s]!,
}));

/** Creator roster portraits, cut out on black. Names still pending from the client. */
export const creators = [
  { src: m('creators/creator-01.webp'), w: 760, h: 950 },
  { src: m('creators/creator-02.webp'), w: 760, h: 950 },
  { src: m('creators/creator-03.webp'), w: 760, h: 950 },
  { src: m('creators/creator-04.webp'), w: 760, h: 950 },
  { src: m('creators/creator-05.webp'), w: 666, h: 1000 },
  { src: m('creators/creator-trio.webp'), w: 736, h: 736 },
];

/** Owned formats and shows. Titles are read off the artwork itself. */
export const shows = [
  { src: m('shows/sin-ceintido.webp'), title: 'Sin Ceintido', big: true },
  { src: m('shows/elo-y-chuy.webp'), title: 'Elo y Chuy', big: true },
  { src: m('shows/noche-de-chicas.webp'), title: 'Noche de Chicas', big: true },
  { src: m('shows/trans-nochando.webp'), title: 'Trans Nochando', big: false },
  { src: m('shows/rivart-attack.webp'), title: 'Rivart Attack', big: false },
  { src: m('shows/kick-off-live.webp'), title: 'Kick Off Live', big: false },
  { src: m('shows/grupo-frontera.webp'), title: 'Grupo Frontera', big: false },
  { src: m('shows/gaming.webp'), title: 'Gaming', big: false },
  { src: m('shows/stranger.webp'), title: 'Branded content', big: false },
  { src: m('shows/casting.webp'), title: 'Casting', big: false },
];

export const tex = {
  gr8: m('tex/gr8-iridescent.webp'),
  iridescent: m('tex/iridescent.webp'),
  coral: m('tex/iridescent-coral.webp'),
  glitch: m('tex/glitch.webp'),
};

/* Generated atmosphere plates (Higgsfield, Cinema Studio 2.5). These are mood,
   not documentation — no plate depicts real Residencia work, and none contains
   people. GR8 deliberately keeps the client's own iridescent plate instead. */
export const plates: Record<string, { src: string; tiny: string }> = Object.fromEntries(
  ['agency-diagram', 'agency-paper', 'prod-set', 'prod-grid', 'prod-lens',
   'prod-corridor', 'syn-mesh', 'syn-field', 'syn-layers']
    .map((n) => [n, { src: m(`plates/${n}.webp`), tiny: m(`plates/${n}-tiny.webp`) }]),
);

/** The plate that fronts each unit, on the hub act and on the unit hero. */
export const unitPlate: Record<string, string> = {
  agency: plates['agency-diagram'].src,
  production: plates['prod-grid'].src,
  gr8: tex.gr8,
  synergy: plates['syn-mesh'].src,
};

/** Optional motion for the Producción act. Gated hard at runtime: desktop only,
    near-viewport, and skipped under reduced-motion or Save-Data. Poster is the
    exact start frame, so the still and the loop are the same image. */
export const prodLoop = m('video/prod-loop.mp4');
