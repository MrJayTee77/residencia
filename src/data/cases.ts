// ─────────────────────────────────────────────────────────────────────────────
// CASE STUDIES — PRESENTATION SCAFFOLD
//
// Brand names, units and years come from the client's own credentials. Every
// narrative field is a PLACEHOLDER awaiting Residencia's copy, and every metric
// is deliberately empty.
//
// Nothing here invents a result. `metrics` carry labels but no values, so the
// layout can be shown without publishing a claim nobody has approved. Fill
// `value` and the number renders; leave it and the slot shows an em dash and a
// "por confirmar" note.
//
// TO FILL: challenge, idea, execution, result, metrics[].value, quote.
// ─────────────────────────────────────────────────────────────────────────────

import type { Lang } from '../i18n/utils';
import type { UnitId } from './units-v3';

export type Metric = { label: string; value?: string };

export interface CaseCopy {
  title: string;
  summary: string;
  challenge: string;
  idea: string;
  execution: string;
  result: string;
  quote?: string;
  quoteBy?: string;
}

export interface CaseStudy {
  slug: string;
  brand: string;
  unit: UnitId;
  year: string;
  /** Media already in the repo. Cases without it fall back to a plate. */
  media?: { kind: 'video' | 'image'; src: string; at?: string };
  plate: string;
  metrics: Metric[];
  /** false until Residencia has approved the written case. */
  approved: boolean;
  es: CaseCopy;
  en: CaseCopy;
}

const PH = {
  es: {
    challenge: 'Reto por redactar. Aquí va el problema de negocio o la tensión cultural de la que partió el proyecto.',
    idea: 'Idea por redactar. Aquí va la plataforma creativa y por qué resolvía el reto.',
    execution: 'Ejecución por redactar. Aquí van los entregables, canales y el rol de cada unidad.',
    result: 'Resultado por redactar. Aquí van los aprendizajes y el impacto en el negocio.',
    summary: 'Resumen por redactar — una línea que explique el caso.',
  },
  en: {
    challenge: 'Challenge to be written. The business problem or cultural tension the project started from.',
    idea: 'Idea to be written. The creative platform and why it answered the challenge.',
    execution: 'Execution to be written. Deliverables, channels and each unit’s role.',
    result: 'Result to be written. Learnings and business impact.',
    summary: 'Summary to be written — one line describing the case.',
  },
};

const B = import.meta.env.BASE_URL.replace(/\/$/, '');
const m = (p: string) => `${B}/media/${p}`;

const mk = (
  slug: string, brand: string, unit: UnitId, year: string, plate: string,
  esTitle: string, enTitle: string,
  metrics: Metric[],
  media?: CaseStudy['media'],
): CaseStudy => ({
  slug, brand, unit, year, plate: m(`plates/${plate}.webp`), media, metrics, approved: false,
  es: { title: esTitle, ...PH.es },
  en: { title: enTitle, ...PH.en },
});

export const cases: CaseStudy[] = [
  // The three with real material already on the site.
  mk('seat-arona', 'SEAT', 'production', '2025', 'prod-grid',
     'Arona — Sensor de estacionamiento', 'Arona — Parking sensor',
     [{ label: 'Vistas' }, { label: 'Alcance' }, { label: 'CTR' }],
     { kind: 'video', src: m('work/seat-arona.mp4'), at: '2' }),
  mk('cupra-navidad', 'CUPRA', 'production', '2025', 'prod-lens',
     'CUPRA Navidad', 'CUPRA Christmas',
     [{ label: 'Piezas' }, { label: 'Canales' }, { label: 'Alcance' }],
     { kind: 'image', src: m('work/cupra-navidad.webp') }),
  mk('apocalipsis-zombie', 'Residencia', 'production', '2025', 'prod-set',
     'Apocalipsis Zombie', 'Zombie Apocalypse',
     [{ label: 'Formato' }, { label: 'Duración' }, { label: 'Vistas' }],
     { kind: 'video', src: m('work/apocalipsis-zombie.mp4'), at: '3' }),

  // Structure ready, material pending.
  mk('volkswagen', 'Volkswagen', 'agency', '2025', 'agency-diagram',
     'Título del caso por definir', 'Case title to be defined',
     [{ label: 'Alcance' }, { label: 'Engagement' }, { label: 'Conversión' }]),
  mk('mattel', 'Mattel', 'agency', '2025', 'agency-paper',
     'Título del caso por definir', 'Case title to be defined',
     [{ label: 'Alcance' }, { label: 'Interacciones' }, { label: 'Ventas' }]),
  mk('xbox', 'Xbox', 'gr8', '2025', 'syn-field',
     'Título del caso por definir', 'Case title to be defined',
     [{ label: 'Creadores' }, { label: 'Alcance' }, { label: 'Engagement' }]),
  mk('telcel', 'Telcel', 'gr8', '2025', 'syn-field',
     'Título del caso por definir', 'Case title to be defined',
     [{ label: 'Creadores' }, { label: 'Vistas' }, { label: 'Conversación' }]),
  mk('porsche', 'Porsche', 'agency', '2024', 'agency-diagram',
     'Título del caso por definir', 'Case title to be defined',
     [{ label: 'Alcance' }, { label: 'Consideración' }, { label: 'Leads' }]),
];

export const caseBySlug = (slug: string) => cases.find((c) => c.slug === slug);

/* ── Team, awards and testimonials: same rule — real shape, no invented facts ── */

export type Person = { name: string; role: { es: string; en: string }; initials: string };

/** PLACEHOLDER ROSTER. Replace name/role, then add photos to public/media/team. */
export const team: Person[] = [
  { name: 'Nombre Apellido', role: { es: 'Dirección general', en: 'Managing director' }, initials: 'NA' },
  { name: 'Nombre Apellido', role: { es: 'Dirección creativa', en: 'Creative director' }, initials: 'NA' },
  { name: 'Nombre Apellido', role: { es: 'Dirección de estrategia', en: 'Strategy director' }, initials: 'NA' },
  { name: 'Nombre Apellido', role: { es: 'Dirección de producción', en: 'Production director' }, initials: 'NA' },
  { name: 'Nombre Apellido', role: { es: 'Creator marketing — GR8', en: 'Creator marketing — GR8' }, initials: 'NA' },
  { name: 'Nombre Apellido', role: { es: 'Innovación — Synergy', en: 'Innovation — Synergy' }, initials: 'NA' },
];

/** PLACEHOLDER. No award is claimed until Residencia confirms it. */
export const awards = [
  { year: '20—', name: 'Premio o festival por confirmar', detail: { es: 'Categoría — proyecto', en: 'Category — project' } },
  { year: '20—', name: 'Premio o festival por confirmar', detail: { es: 'Categoría — proyecto', en: 'Category — project' } },
  { year: '20—', name: 'Premio o festival por confirmar', detail: { es: 'Categoría — proyecto', en: 'Category — project' } },
];

/** PLACEHOLDER. Attributed quotes must be approved by the client who said them. */
export const testimonials = [
  { es: 'Cita pendiente de aprobación del cliente.', en: 'Quote pending client approval.',
    by: 'Nombre Apellido', role: { es: 'Cargo, Marca', en: 'Role, Brand' } },
  { es: 'Cita pendiente de aprobación del cliente.', en: 'Quote pending client approval.',
    by: 'Nombre Apellido', role: { es: 'Cargo, Marca', en: 'Role, Brand' } },
];

/** Facts Residencia has stated in its own materials, kept separate from anything unverified. */
export const stats = (lang: Lang) => [
  { value: '4', label: lang === 'es' ? 'unidades' : 'units' },
  { value: '29', label: lang === 'es' ? 'marcas' : 'brands' },
  { value: '—', label: lang === 'es' ? 'años' : 'years', pending: true },
  { value: '—', label: lang === 'es' ? 'proyectos' : 'projects', pending: true },
];
