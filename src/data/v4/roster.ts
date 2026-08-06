// Creator roster — section 07 of the architecture document, transcribed from the
// GR8 credentials deck. `null` marks a handle the deck did not carry; those are
// gap 07 and render as "pendiente" rather than as a broken link.

export type Category = 'top' | 'kings' | 'caster' | 'cosplay';

export interface Creator {
  name: string;
  category: Category;
  instagram: string | null;
  twitch: string | null;
  /** Set where the document itself flags an open question. */
  note?: string;
  est?: string;
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
  // Top creadores (14)
  { name: 'Alana', category: 'top', instagram: '@alanafloresf', twitch: 'alanalarana' },
  { name: 'Ari Gameplays', category: 'top', instagram: '@arigameplays', twitch: 'arigameplays' },
  { name: 'Rivers', category: 'top', instagram: '@samyrivera', twitch: 'rivers_gg' },
  { name: 'Juan Guarnizo', category: 'top', instagram: '@juansguarnizo', twitch: 'juansguarnizo' },
  { name: 'Cry', category: 'top', instagram: '@cry_thereal', twitch: 'cryaotic' },
  { name: 'Barca Gamer', category: 'top', instagram: '@barcagamer', twitch: 'barcagamer' },
  { name: 'Pipe Punk', category: 'top', instagram: '@ivnnghtmr', twitch: 'pipepunk' },
  { name: 'Komanche', category: 'top', instagram: '@elkomanche', twitch: 'komanche' },
  { name: 'Aldo Geo', category: 'top', instagram: '@_aldogeo_', twitch: 'aldogeo' },
  { name: 'Natalia García (Natalia MX)', category: 'top', instagram: '@_nataliamx', twitch: null },
  { name: 'Caprimint', category: 'top', instagram: null, twitch: null, note: 'El deck también dice «Camiprint» — confirmar nombre.' },
  { name: 'Antrax', category: 'top', instagram: null, twitch: null },
  { name: 'Arenovitz', category: 'top', instagram: null, twitch: null },
  { name: 'Roberto Cein', category: 'top', instagram: null, twitch: null, note: 'IP propia: «Sin Ceintido».' },

  // Equipos Kings League (3)
  { name: 'Raniza FC', category: 'kings', instagram: '@ranizafc', twitch: 'raniza', est: '2023' },
  { name: 'PIO FC', category: 'kings', instagram: null, twitch: null, est: '2022' },
  { name: 'Aniquiladores FC', category: 'kings', instagram: '@aniquiladoresteam', twitch: 'aniquiladoresfc' },

  // Casters (3)
  { name: 'Yael Romero', category: 'caster', instagram: '@yaelromero13', twitch: 'yaelromero13' },
  { name: 'HeyBell', category: 'caster', instagram: '@heybeell', twitch: null },
  { name: 'Valtymor', category: 'caster', instagram: '@valtymorta', twitch: 'valtymorta1' },

  // Cosplayers (5)
  { name: 'PunkMacaroni', category: 'cosplay', instagram: '@punk__macarroni', twitch: 'punkmacarroni' },
  { name: 'AryVilchis', category: 'cosplay', instagram: '@aryvilchis', twitch: 'aryvilchis' },
  { name: 'Sorato', category: 'cosplay', instagram: '@soratocosplay_official', twitch: 'sorato_x0' },
  { name: 'NovitaLegend', category: 'cosplay', instagram: '@novitalegend', twitch: 'novitalegend' },
  { name: 'PamVsTheWorld', category: 'cosplay', instagram: '@pamvstheworld_', twitch: 'pamvstheworld' },
];

export const igUrl = (h: string) => ig(h);
export const twUrl = (h: string) => tw(h);
export const byCategory = (c: Category) => creators.filter((x) => x.category === c);
export const missingLinks = creators.filter((c) => !c.instagram || !c.twitch).length;
