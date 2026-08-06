// Imagery for v4. Two sources, kept clearly apart:
//
//  · REAL — client marks, creator portraits and show artwork from Residencia's
//    own credentials deck, plus the three production pieces from Drive.
//  · ATMOSPHERE — plates generated with Higgsfield for the v4 palette
//    (plum-black ground, coral / lime / magenta / teal accents). These set mood
//    only: none depicts real Residencia work and none contains people.

import type { UnitId } from './content';

const B = import.meta.env.BASE_URL.replace(/\/$/, '');
const m = (p: string) => `${B}/media/${p}`;

/** Generated atmosphere, keyed to each unit's accent. */
export const plate: Record<UnitId, string> = {
  agency: m('v4/agency.webp'),
  produccion: m('v4/produccion.webp'),
  gr8: m('v4/gr8.webp'),
  synergy: m('v4/synergy.webp'),
};
export const plateTiny: Record<UnitId, string> = {
  agency: m('v4/agency-tiny.webp'),
  produccion: m('v4/produccion-tiny.webp'),
  gr8: m('v4/gr8-tiny.webp'),
  synergy: m('v4/synergy-tiny.webp'),
};

/** Section plates. `cambio` carries the argument of that section in one frame:
 *  an analogue TV on the left, phone-screen light on the right. */
export const scene = {
  cambio: m('v4/cambio.webp'),
  iridescent: m('v4/iridescent.webp'),
};

/** Optional motion for the GR8 act — gated at runtime, never blocks paint. */
export const gr8Loop = m('v4/gr8-loop.mp4');

export const atmosphereNote = 'Imagen de atmósfera generada — no es un caso de trabajo.';
