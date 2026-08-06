// Case inventory — section 07 of the architecture document. These are real
// projects detected in the GR8 credentials deck; the `missing` field is the
// document's own note on what each one still needs.
//
// No metric is invented. `metrics` stays empty until Residencia supplies the
// numbers (gap 02), which the document calls out as the single biggest lift:
// "sin resultados, los casos son galería; con resultados, son argumento de venta".

import type { UnitId } from './content';

export interface CaseItem {
  slug: string;
  title: string;
  brand: string;
  units: UnitId[];
  /** Written description where the deck carried one. */
  blurb?: string;
  /** What the document says is still missing. */
  missing: string;
  /** Media already in the repo, if any. */
  media?: { kind: 'video' | 'image'; src: string; at?: string };
  metrics?: { label: string; value?: string }[];
  featured?: boolean;
}

const B = import.meta.env.BASE_URL.replace(/\/$/, '');
const m = (p: string) => `${B}/media/${p}`;

export const cases: CaseItem[] = [
  {
    slug: 'vw-super-golf-bros', title: 'Super Golf Bros', brand: 'Volkswagen', units: ['agency'],
    blurb: 'Día del Gaming: el Golf convertido en videojuego retro de 8 bits.',
    missing: 'métricas', featured: true,
    metrics: [{ label: 'Alcance' }, { label: 'Interacciones' }, { label: 'Earned media' }],
  },
  {
    slug: 'seat-14-febrero', title: '14 de Febrero', brand: 'SEAT', units: ['agency'],
    blurb: 'Serie de «vales virtuales para movilizar tu amor»: carrusel ilustrado en Instagram — una pizza, una comida en tu casa, un paseo, un beso, un viaje inolvidable. Social content con voz de marca cálida y compartible.',
    missing: 'métricas', featured: true,
    metrics: [{ label: 'Alcance' }, { label: 'Guardados' }, { label: 'Engagement' }],
  },
  {
    slug: 'mi-regalo-mattel', title: 'Mi Regalo Mattel', brand: 'Mattel', units: ['gr8', 'produccion'],
    blurb: 'Pieza musical y audiovisual con creador para la campaña navideña de Mattel.',
    missing: 'video + métricas', featured: true,
    metrics: [{ label: 'Vistas' }, { label: 'Alcance' }, { label: 'Ventas' }],
  },
  {
    slug: 'konami-crossover', title: 'Crossover épico', brand: 'Konami', units: ['gr8'],
    blurb: 'Anunciar un juego nuevo es bueno. Hacer un crossover épico es GR8.',
    missing: 'video + detalle', featured: true,
    metrics: [{ label: 'Creadores' }, { label: 'Alcance' }, { label: 'Conversación' }],
  },
  {
    slug: 'ffxvi-exhibition', title: 'Final Fantasy XVI: The Exhibition', brand: 'Square Enix / PlayStation',
    units: ['gr8', 'synergy'],
    blurb: 'El único museo de la saga. Experiencia física con comunidad de creadores.',
    missing: 'detalle + fotos · confirmar cliente oficial y alcance de Residencia', featured: true,
    metrics: [{ label: 'Visitantes' }, { label: 'Cobertura' }, { label: 'Alcance' }],
  },
  {
    slug: 'iprikene-creators', title: 'Content + Creators', brand: 'Iprikene', units: ['agency', 'gr8'],
    blurb: 'Campaña integral farma: key visual «El rival no debería ser tu estómago», más contenido con creadores — POV de viaje por México y personaje animado del estómago.',
    missing: 'métricas', featured: true,
    metrics: [{ label: 'Alcance' }, { label: 'Recuerdo' }, { label: 'Conversión' }],
  },
  {
    slug: 'seat-medio-ambiente', title: 'Día del Medio Ambiente', brand: 'SEAT', units: ['agency'],
    blurb: 'Pieza en video con la Torre Latinoamericana de CDMX como protagonista.',
    missing: 'idea + métricas',
  },
  {
    slug: 'vw-always-on', title: 'Always on', brand: 'Volkswagen', units: ['agency'],
    blurb: 'Contenido de calendario y cultura pop: «El que todos queremos» (Jetta Sportline) y Fin de Año.',
    missing: 'métricas · archivo de video de Fin de Año',
  },
  {
    slug: 'porsche-content', title: 'Content premium', brand: 'Porsche', units: ['agency'],
    blurb: 'Dirección de arte editorial: 959 Dakar, 911 Carrera S, cartucho NES retro. Social content premium para una marca de culto.',
    missing: 'métricas',
  },
  {
    slug: 'sin-ceintido', title: '«Sin Ceintido»', brand: 'IP propia — Roberto Cein', units: ['gr8'],
    blurb: 'Que te apasione la cultura pop es bueno. Compartirlo con 20K fans a diario es GR8.',
    missing: 'descripción + métricas',
    media: { kind: 'image', src: m('shows/sin-ceintido.webp') },
  },
  {
    slug: 'amazon-videojuegos', title: 'Activación con equipo', brand: 'Amazon', units: ['gr8'],
    blurb: 'Que te gusten los videojuegos es bueno. Que tú y tu equipo sean parte de uno es GR8.',
    missing: 'detalle completo',
  },
  {
    slug: 'seat-arona', title: 'Arona — Sensor de estacionamiento', brand: 'SEAT', units: ['produccion'],
    blurb: 'Producción audiovisual para SEAT.',
    missing: 'métricas',
    media: { kind: 'video', src: m('work/seat-arona.mp4'), at: '2' },
  },
];

export const featured = cases.filter((c) => c.featured);
export const caseBySlug = (s: string) => cases.find((c) => c.slug === s);
export const casesForUnit = (u: UnitId) => cases.filter((c) => c.units.includes(u));
