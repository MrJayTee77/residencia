// Creator roster — section 07, document v2. Handles corrected by the document's
// own research: Caprimint (the deck misspells it "Camiprint"), aldo_geo,
// nataliamx, piofutbolclub, and Cry — whose deck link "cryaotic" points at a
// different creator entirely and is now Kick.
//
// Audience figures are approximate, from public sources (SocialBlade,
// StreamsCharts, press) as of Aug 2026. They render marked as unvalidated until
// GR8 confirms them internally. Only HeyBell's Twitch is still missing.

export type Category = 'top' | 'kings' | 'caster' | 'cosplay';

export interface Creator {
  name: string;
  category: Category;
  instagram: string | null;
  twitch: string | null;
  /** Approximate followers, public sources Aug 2026. */
  ig?: string;
  tw?: string;
  /** Other platforms or standing worth surfacing. */
  other?: string;
  /** Set where the document flags an open question or a correction. */
  note?: string;
  est?: string;
  /** Kings League teams: president(s) to link instead of the dead Twitch. */
  president?: string;
}

export const categories: { id: Category; label: string; blurb: string }[] = [
  { id: 'top', label: 'Top creadores', blurb: 'Los perfiles con mayor alcance del roster.' },
  { id: 'kings', label: 'Equipos Kings League', blurb: 'Equipos de la liga que llena estadios.' },
  { id: 'caster', label: 'Casters', blurb: 'Narración y análisis en vivo.' },
  { id: 'cosplay', label: 'Cosplayers', blurb: 'Cultura pop, gaming y anime.' },
];

const ig = (h: string) => `https://instagram.com/${h.replace(/^@/, '')}`;
const tw = (h: string) => `https://twitch.tv/${h}`;

export const creators: Creator[] = [
  // Top creadores (14) — with audience, Aug 2026
  { name: 'Alana', category: 'top', instagram: '@alanafloresf', ig: '~5M', twitch: 'alanalarana', tw: '~1.1M', other: 'TikTok ~6.6M · X ~1M' },
  { name: 'Ari Gameplays', category: 'top', instagram: '@arigameplays', ig: '~11M', twitch: 'arigameplays', tw: '~7.2M', other: '#2 streamer femenina más seguida de Twitch' },
  { name: 'Rivers', category: 'top', instagram: '@samyrivera', ig: '~6M', twitch: 'rivers_gg', tw: '~7M', other: 'Streamer femenina más vista del mundo (2023)' },
  { name: 'Juan Guarnizo', category: 'top', instagram: '@juansguarnizo', ig: '~5.8M', twitch: 'juansguarnizo', tw: '~11.7M', other: 'Club de los 10M de Twitch' },
  { name: 'Cry', category: 'top', instagram: '@cry_thereal', ig: '~5M', twitch: null, tw: '~3.3M (legado)', other: 'Activo en Kick', note: 'El link «cryaotic» del deck apunta a otro creador — corregido.' },
  { name: 'Barca Gamer', category: 'top', instagram: '@barcagamer', ig: '~1M', twitch: 'barcagamer', tw: '~2.5M', other: 'YouTube ~2M' },
  { name: 'Pipe Punk', category: 'top', instagram: '@ivnnghtmr', ig: '~1M', twitch: 'pipepunk', tw: '~1.8M', other: 'YouTube ~2M' },
  { name: 'Komanche', category: 'top', instagram: '@elkomanche', ig: '~858K', twitch: 'komanche', tw: '~1.7M', other: 'Activo también en Kick' },
  { name: 'Aldo Geo', category: 'top', instagram: '@_aldogeo_', ig: '~879K', twitch: 'aldo_geo', tw: '~2.2M', other: 'X ~1.6M', note: 'Handle de Twitch corregido.' },
  { name: 'Natalia García (Natalia MX)', category: 'top', instagram: '@_nataliamx', ig: '~833K', twitch: 'nataliamx', tw: '~211K', other: 'TikTok ~962K · Presidenta en Kings League · Velada VI' },
  { name: 'Caprimint', category: 'top', instagram: '@caprimint', ig: '~552K', twitch: 'caprimint', tw: '~1M', note: 'Ortografía confirmada; el deck dice «Camiprint» en una lámina.' },
  { name: 'Antrax', category: 'top', instagram: '@yosoyantrax', ig: '~3M', twitch: 'antrax', tw: '~270K', other: 'YouTube ~16M · TikTok ~8M — principalmente youtuber' },
  { name: 'Arenovitz', category: 'top', instagram: '@arenovitzz', ig: '~2M', twitch: 'arenovitzz', tw: '~108K', other: 'TikTok ~2.6M' },
  { name: 'Roberto Cein', category: 'top', instagram: '@robertocein', ig: '~1M', twitch: 'robertocein', tw: '~2M', other: 'TikTok ~1.3M · YouTube ~1.1M · X ~1.5M · IP propia: «Sin Ceintido»' },

  // Equipos Kings League — Twitch channels are inactive; link the presidents
  { name: 'Raniza FC', category: 'kings', instagram: '@ranizafc', ig: '~126K', twitch: null, est: '2023', president: 'Alana + Barca Gamer' },
  { name: 'PIO FC', category: 'kings', instagram: '@piofutbolclub', ig: '~487K', twitch: null, est: '2022', president: 'Rivers', other: 'X ~221K' },
  { name: 'Aniquiladores FC', category: 'kings', instagram: '@aniquiladoresteam', ig: '~150K', twitch: null, president: 'Juan Guarnizo', other: 'Kings League España · femenil @aniquiladorasfc ~26K' },

  // Casters (3)
  { name: 'Yael Romero', category: 'caster', instagram: '@yaelromero13', twitch: 'yaelromero13' },
  { name: 'HeyBell', category: 'caster', instagram: '@heybeell', twitch: null, note: 'Twitch pendiente — el propio Google Slides de GR8 lo tiene vacío.' },
  { name: 'Valtymor', category: 'caster', instagram: '@valtymorta', twitch: 'valtymorta1' },

  // Cosplayers (5)
  { name: 'PunkMacaroni', category: 'cosplay', instagram: '@punk__macarroni', twitch: 'punkmacarroni' },
  { name: 'AryVilchis', category: 'cosplay', instagram: '@aryvilchis', twitch: 'aryvilchis' },
  { name: 'Sorato', category: 'cosplay', instagram: '@soratocosplay_official', twitch: 'sorato_x0' },
  { name: 'NovitaLegend', category: 'cosplay', instagram: '@novitalegend', twitch: 'novitalegend' },
  { name: 'PamVsTheWorld', category: 'cosplay', instagram: '@pamvstheworld_', twitch: 'pamvstheworld' },
];

/** Headline figure for /gr8/creadores. Public sources, pending GR8 validation. */
/** Portraits from the GR8 deck. Only six arrived, so the rest of the roster
 *  renders as a typographic card — we do not put a stock face on a real person. */
const B = import.meta.env.BASE_URL.replace(/\/$/, '');
export const portraits: Record<string, string> = {
  'Alana': `${B}/media/creators/creator-01.webp`,
  'Ari Gameplays': `${B}/media/creators/creator-02.webp`,
  'Rivers': `${B}/media/creators/creator-03.webp`,
  'Juan Guarnizo': `${B}/media/creators/creator-04.webp`,
  'Roberto Cein': `${B}/media/creators/creator-05.webp`,
};
export const portraitCount = 5;

export const reach = {
  igTwitch: '~85M',
  total: '+100M',
  note: 'Sumando Instagram, Twitch, YouTube, TikTok y X. Fuentes públicas a agosto 2026 — pendiente de validar con los números internos de GR8.',
};

export const igUrl = (h: string) => ig(h);
export const twUrl = (h: string) => tw(h);
export const byCategory = (c: Category) => creators.filter((x) => x.category === c);
export const missingLinks = creators.filter((c) => !c.instagram || !c.twitch).length;
export const kingsNote = 'Los canales de Twitch de los equipos están inactivos — enlazamos Instagram y el canal del presidente.';
