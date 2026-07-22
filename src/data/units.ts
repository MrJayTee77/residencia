// Detailed bilingual content for the four Residencia business units.
// Each unit renders as its own dedicated landing page (src/pages/v2/[unit].astro).

import type { Lang } from '../i18n/utils';

export type Svc = { t: string; d: string };
export type Step = { n: string; t: string; d: string };
export type Highlight = { t: string; d: string };

export interface UnitCopy {
  name: string;
  kind: string;
  heroHead: [string, string];     // [plain, accented]
  heroLead: string;
  intro: string;
  servicesHead: string;
  services: Svc[];
  processHead: string;
  process: Step[];
  highlightsHead: string;
  highlights: Highlight[];
  chipsHead?: string;
  chips?: string[];
  note?: string;                  // disclaimer (placeholder / illustrative)
  ctaHead: string;
  ctaSub: string;
  mailSubj: string;
}

export interface Unit {
  id: string;
  theme: 'theme-agency' | 'theme-prod' | 'theme-gr8' | 'theme-syn';
  accent: string;                 // tip / hub color
  es: UnitCopy;
  en: UnitCopy;
}

export const unitOrder = ['agency', 'production', 'gr8', 'synergy'] as const;

export const units: Record<string, Unit> = {
  agency: {
    id: 'agency',
    theme: 'theme-agency',
    accent: '#B07A3C',
    es: {
      name: 'Residencia Agency',
      kind: 'Estrategia & Marca',
      heroHead: ['Estrategia y marca con ', 'intención cultural'],
      heroLead: 'Construimos valor de marca a largo plazo: posicionamiento claro, contenido con criterio y campañas que conectan y se optimizan con datos.',
      intro: 'Somos la agencia de marca y digital del grupo. Acompañamos a las marcas desde la estrategia hasta la operación diaria, con mirada cultural y obsesión por los resultados.',
      servicesHead: 'Qué hacemos',
      services: [
        { t: 'Estrategia de marca', d: 'Posicionamiento, arquitectura de marca, narrativa y territorio cultural.' },
        { t: 'Estrategia de contenido', d: 'Pilares, línea editorial y calendarios pensados para cada plataforma.' },
        { t: 'Social media', d: 'Gestión de comunidades y contenido always-on que mantiene la marca viva.' },
        { t: 'Campañas pagadas y orgánicas', d: 'Planeación, compra y creatividad en Meta, TikTok, Google y más.' },
        { t: 'Community & account management', d: 'Un equipo dedicado que cuida la conversación y la relación día a día.' },
        { t: 'Reporting y optimización', d: 'Dashboards, aprendizajes y mejora continua sobre las métricas que importan.' },
      ],
      processHead: 'Cómo trabajamos',
      process: [
        { n: '01', t: 'Diagnóstico', d: 'Entendemos negocio, audiencia y categoría.' },
        { n: '02', t: 'Estrategia', d: 'Definimos posicionamiento, mensajes y plan.' },
        { n: '03', t: 'Ejecución', d: 'Producimos contenido y activamos campañas.' },
        { n: '04', t: 'Optimización', d: 'Medimos, aprendemos e iteramos.' },
      ],
      highlightsHead: 'Trabajo',
      highlights: [
        { t: 'Marcas de consumo', d: 'Estrategia y social para marcas que quieren crecer con cultura.' },
        { t: 'Lanzamientos', d: 'Campañas integrales de go-to-market, del teaser al reporte.' },
        { t: 'Always-on', d: 'Operación de contenido y comunidad a escala, mes con mes.' },
      ],
      note: 'Casos en preparación — ejemplos ilustrativos de tipos de proyecto.',
      ctaHead: 'Hagamos crecer tu marca.',
      ctaSub: 'Cuéntanos dónde estás y a dónde quieres llegar.',
      mailSubj: 'Consulta de marca — Residencia Agency',
    },
    en: {
      name: 'Residencia Agency',
      kind: 'Strategy & Brand',
      heroHead: ['Strategy and brand with ', 'cultural intent'],
      heroLead: 'We build long-term brand value: clear positioning, content with a point of view, and campaigns that connect — then optimize with data.',
      intro: "We're the group's brand and digital agency. We partner with brands from strategy to daily operation, with a cultural eye and an obsession with results.",
      servicesHead: 'What we do',
      services: [
        { t: 'Brand strategy', d: 'Positioning, brand architecture, narrative and cultural territory.' },
        { t: 'Content strategy', d: 'Pillars, editorial line and calendars designed for each platform.' },
        { t: 'Social media', d: 'Community management and always-on content that keeps the brand alive.' },
        { t: 'Paid + organic campaigns', d: 'Planning, media buying and creative across Meta, TikTok, Google and more.' },
        { t: 'Community & account management', d: 'A dedicated team that tends the conversation and the relationship day to day.' },
        { t: 'Reporting & optimization', d: 'Dashboards, learnings and continuous improvement on the metrics that matter.' },
      ],
      processHead: 'How we work',
      process: [
        { n: '01', t: 'Diagnosis', d: 'We understand the business, audience and category.' },
        { n: '02', t: 'Strategy', d: 'We define positioning, messaging and plan.' },
        { n: '03', t: 'Execution', d: 'We produce content and activate campaigns.' },
        { n: '04', t: 'Optimization', d: 'We measure, learn and iterate.' },
      ],
      highlightsHead: 'Work',
      highlights: [
        { t: 'Consumer brands', d: 'Strategy and social for brands that want to grow through culture.' },
        { t: 'Launches', d: 'End-to-end go-to-market campaigns, from teaser to report.' },
        { t: 'Always-on', d: 'Content and community operation at scale, month after month.' },
      ],
      note: 'Cases in preparation — illustrative examples of project types.',
      ctaHead: "Let's grow your brand.",
      ctaSub: 'Tell us where you are and where you want to go.',
      mailSubj: 'Brand inquiry — Residencia Agency',
    },
  },

  production: {
    id: 'production',
    theme: 'theme-prod',
    accent: '#C9742E',
    es: {
      name: 'Residencia Production',
      kind: 'Producción de contenido',
      heroHead: ['Una productora de contenido para ', 'cada pantalla'],
      heroLead: 'De la idea al máster final. Producimos para medios digitales y tradicionales, a la velocidad de la cultura y al nivel de la pantalla grande.',
      intro: 'Somos la casa productora del grupo. Equipos, dirección y postproducción propios para llevar cualquier idea de la preproducción a la entrega.',
      servicesHead: 'Capacidades',
      services: [
        { t: 'Comerciales', d: 'Spots para TV y digital, del concepto a la entrega.' },
        { t: 'Branded content', d: 'Historias de marca que la gente realmente quiere ver.' },
        { t: 'Producción social-first', d: 'Contenido nativo, ágil y de alto volumen para redes.' },
        { t: 'En vivo, streaming y eventos', d: 'Multicámara, transmisiones y experiencias en tiempo real.' },
        { t: 'Producción con creadores / UGC', d: 'Producción con y para creadores, a escala.' },
        { t: 'Postproducción', d: 'Edición, color, motion graphics, diseño sonoro y VFX.' },
        { t: 'Desarrollo de formatos', d: 'Creamos IP y formatos originales de principio a fin.' },
      ],
      processHead: 'El proceso',
      process: [
        { n: '01', t: 'Preproducción', d: 'Concepto, guion, casting, locaciones y plan de rodaje.' },
        { n: '02', t: 'Rodaje', d: 'Dirección, foto, arte y un set que cumple.' },
        { n: '03', t: 'Postproducción', d: 'Edición, color, sonido y motion.' },
        { n: '04', t: 'Entrega', d: 'Másters y versiones para cada canal y formato.' },
      ],
      highlightsHead: 'Formatos',
      highlights: [
        { t: 'Spots & comerciales', d: 'Producción de alto nivel para campañas de marca.' },
        { t: 'Series de marca', d: 'Contenido episódico y branded entertainment.' },
        { t: 'Live & streaming', d: 'Transmisiones multicámara y cobertura de eventos.' },
        { t: 'Formatos originales', d: 'IP de contenido desarrollada en casa.' },
      ],
      note: 'Reel y casos en preparación — ejemplos ilustrativos de formatos.',
      ctaHead: 'Produzcamos algo memorable.',
      ctaSub: 'Comparte tu brief, fechas y referencias.',
      mailSubj: 'Consulta de producción — Residencia Production',
    },
    en: {
      name: 'Residencia Production',
      kind: 'Content production',
      heroHead: ['A content company built for ', 'every screen'],
      heroLead: 'From idea to final master. We produce for digital and traditional media, at the speed of culture and the level of the big screen.',
      intro: "We're the group's production house. In-house crews, direction and post to take any idea from pre-production to delivery.",
      servicesHead: 'Capabilities',
      services: [
        { t: 'Commercials', d: 'Spots for TV and digital, from concept to delivery.' },
        { t: 'Branded content', d: "Brand stories people actually want to watch." },
        { t: 'Social-first production', d: 'Native, agile, high-volume content for social.' },
        { t: 'Live, streaming & events', d: 'Multicam, broadcasts and real-time experiences.' },
        { t: 'Creator / UGC production', d: 'Production with and for creators, at scale.' },
        { t: 'Post-production', d: 'Edit, color, motion graphics, sound design and VFX.' },
        { t: 'Format development', d: 'We create original IP and formats end to end.' },
      ],
      processHead: 'The process',
      process: [
        { n: '01', t: 'Pre-production', d: 'Concept, script, casting, locations and shoot plan.' },
        { n: '02', t: 'Shoot', d: 'Direction, photography, art and a set that delivers.' },
        { n: '03', t: 'Post-production', d: 'Edit, color, sound and motion.' },
        { n: '04', t: 'Delivery', d: 'Masters and versions for every channel and format.' },
      ],
      highlightsHead: 'Formats',
      highlights: [
        { t: 'Spots & commercials', d: 'High-end production for brand campaigns.' },
        { t: 'Brand series', d: 'Episodic content and branded entertainment.' },
        { t: 'Live & streaming', d: 'Multicam broadcasts and event coverage.' },
        { t: 'Original formats', d: 'Content IP developed in-house.' },
      ],
      note: 'Reel and cases in preparation — illustrative examples of formats.',
      ctaHead: "Let's produce something memorable.",
      ctaSub: 'Share your brief, dates and references.',
      mailSubj: 'Production inquiry — Residencia Production',
    },
  },

  gr8: {
    id: 'gr8',
    theme: 'theme-gr8',
    accent: '#37E6E0',
    es: {
      name: 'GR8',
      kind: 'Estudio de creadores',
      heroHead: ['No representamos creadores —', ' nos asociamos con ellos'],
      heroLead: 'Para alcanzar sus metas GR8. Un estudio de negocio para creadores: campañas marca × creador, IP propia y formatos en vivo construidos junto a ellos.',
      intro: 'GR8 es el estudio de creadores y entretenimiento del grupo. Unimos talento, marcas y formatos para construir negocio y cultura — no solo posts.',
      servicesHead: 'Servicios',
      services: [
        { t: 'Influencer marketing', d: 'Campañas marca × creador de punta a punta.' },
        { t: 'UGC', d: 'Contenido de creadores para performance y social.' },
        { t: 'Creator IP', d: 'Desarrollamos IP y productos propios con el talento.' },
        { t: 'Management de creadores', d: 'Estrategia de carrera, marca personal y monetización.' },
        { t: 'Booking', d: 'Conectamos talento con marcas, eventos y medios.' },
        { t: 'Representación comercial', d: 'Negociación y deals que cuidan al creador.' },
        { t: 'Formatos en vivo y streaming', d: 'Shows, podcasts y formatos recurrentes.' },
      ],
      processHead: 'El modelo',
      process: [
        { n: '01', t: 'Partnership', d: 'Entramos como socios, no como agencia de paso.' },
        { n: '02', t: 'Estrategia', d: 'Definimos marca, formatos y fuentes de ingreso.' },
        { n: '03', t: 'Producción', d: 'Creamos campañas, IP y shows en vivo.' },
        { n: '04', t: 'Crecimiento', d: 'Escalamos audiencia, deals y negocio.' },
      ],
      highlightsHead: 'IPs & shows',
      highlights: [
        { t: 'Casa Rivers', d: 'IP de contenido y comunidad (muestra).' },
        { t: 'Trasnochadas', d: 'Formato nocturno en vivo (muestra).' },
        { t: 'Noche de Chicas', d: 'Show de entretenimiento (muestra).' },
      ],
      chipsHead: 'Talento & formatos (muestra)',
      chips: ['Roster de creadores', 'Casa Rivers', 'Trasnochadas', 'Noche de Chicas', 'Podcasts', 'Formatos en vivo'],
      note: 'Ejemplos ilustrativos — roster e IPs sujetos a confirmación.',
      ctaHead: 'Construyamos algo GR8.',
      ctaSub: 'Marcas y creadores: hablemos.',
      mailSubj: 'Consulta de creadores — GR8',
    },
    en: {
      name: 'GR8',
      kind: 'Creator studio',
      heroHead: ["We don't represent creators —", ' we partner with them'],
      heroLead: 'To achieve their GR8 goals. A business studio for creators: brand × creator campaigns, owned IP, and live formats built side by side with them.',
      intro: "GR8 is the group's creator and entertainment studio. We connect talent, brands and formats to build business and culture — not just posts.",
      servicesHead: 'Services',
      services: [
        { t: 'Influencer marketing', d: 'End-to-end brand × creator campaigns.' },
        { t: 'UGC', d: 'Creator content for performance and social.' },
        { t: 'Creator IP', d: 'We develop owned IP and products with the talent.' },
        { t: 'Creator management', d: 'Career strategy, personal brand and monetization.' },
        { t: 'Booking', d: 'We connect talent with brands, events and media.' },
        { t: 'Commercial representation', d: 'Negotiation and deals that protect the creator.' },
        { t: 'Live & streaming formats', d: 'Shows, podcasts and recurring formats.' },
      ],
      processHead: 'The model',
      process: [
        { n: '01', t: 'Partnership', d: 'We come in as partners, not a passing agency.' },
        { n: '02', t: 'Strategy', d: 'We define brand, formats and revenue streams.' },
        { n: '03', t: 'Production', d: 'We create campaigns, IP and live shows.' },
        { n: '04', t: 'Growth', d: 'We scale audience, deals and business.' },
      ],
      highlightsHead: 'IPs & shows',
      highlights: [
        { t: 'Casa Rivers', d: 'Content and community IP (sample).' },
        { t: 'Trasnochadas', d: 'Late-night live format (sample).' },
        { t: 'Noche de Chicas', d: 'Entertainment show (sample).' },
      ],
      chipsHead: 'Talent & formats (sample)',
      chips: ['Creator roster', 'Casa Rivers', 'Trasnochadas', 'Noche de Chicas', 'Podcasts', 'Live formats'],
      note: 'Illustrative examples — roster and IPs subject to confirmation.',
      ctaHead: "Let's build something GR8.",
      ctaSub: 'Brands and creators: let’s talk.',
      mailSubj: 'Creator inquiry — GR8',
    },
  },

  synergy: {
    id: 'synergy',
    theme: 'theme-syn',
    accent: '#B5683C',
    es: {
      name: 'Synergy by Residencia',
      kind: 'Experiencias premium',
      heroHead: ['Experiencias premium, ', 'diseñadas con intención'],
      heroLead: 'Programas y experiencias de alto nivel para marcas y comunidades, donde el detalle y la curaduría definen la diferencia.',
      intro: 'Synergy es la unidad de experiencias premium del grupo. Diseñamos programas, eventos y relaciones de largo plazo para audiencias de alto valor.',
      servicesHead: 'Qué ofrecemos',
      services: [
        { t: 'Programas premium', d: 'Membresías y programas con beneficios curados.' },
        { t: 'Experiencias a medida', d: 'Eventos y activaciones diseñados al detalle.' },
        { t: 'Curaduría cultural', d: 'Selección de partners, espacios y momentos.' },
        { t: 'Hospitality & comunidad', d: 'Relaciones de largo plazo con audiencias de alto valor.' },
      ],
      processHead: 'El enfoque',
      process: [
        { n: '01', t: 'Estrategia', d: 'Definimos audiencia, propósito y promesa.' },
        { n: '02', t: 'Curaduría', d: 'Elegimos partners, espacios y detalles.' },
        { n: '03', t: 'Experiencia', d: 'Producimos cada momento con precisión.' },
        { n: '04', t: 'Relación', d: 'Convertimos un evento en una comunidad.' },
      ],
      highlightsHead: 'Formatos',
      highlights: [
        { t: 'Programas de membresía', d: 'Beneficios y acceso curado (muestra).' },
        { t: 'Experiencias de marca', d: 'Activaciones premium a medida (muestra).' },
        { t: 'Momentos culturales', d: 'Curaduría de espacios y partners (muestra).' },
      ],
      note: 'Posicionamiento preliminar — la versión aprobada llegará de Canva.',
      ctaHead: 'Diseñemos una experiencia.',
      ctaSub: 'Cuéntanos a quién quieres sorprender.',
      mailSubj: 'Consulta de experiencias — Synergy by Residencia',
    },
    en: {
      name: 'Synergy by Residencia',
      kind: 'Premium experiences',
      heroHead: ['Premium experiences, ', 'designed with intent'],
      heroLead: 'High-end programs and experiences for brands and communities, where detail and curation define the difference.',
      intro: "Synergy is the group's premium experiences unit. We design programs, events and long-term relationships for high-value audiences.",
      servicesHead: 'What we offer',
      services: [
        { t: 'Premium programs', d: 'Memberships and programs with curated benefits.' },
        { t: 'Bespoke experiences', d: 'Events and activations designed down to the detail.' },
        { t: 'Cultural curation', d: 'Selection of partners, spaces and moments.' },
        { t: 'Hospitality & community', d: 'Long-term relationships with high-value audiences.' },
      ],
      processHead: 'The approach',
      process: [
        { n: '01', t: 'Strategy', d: 'We define audience, purpose and promise.' },
        { n: '02', t: 'Curation', d: 'We choose partners, spaces and details.' },
        { n: '03', t: 'Experience', d: 'We produce every moment with precision.' },
        { n: '04', t: 'Relationship', d: 'We turn an event into a community.' },
      ],
      highlightsHead: 'Formats',
      highlights: [
        { t: 'Membership programs', d: 'Curated benefits and access (sample).' },
        { t: 'Brand experiences', d: 'Bespoke premium activations (sample).' },
        { t: 'Cultural moments', d: 'Curation of spaces and partners (sample).' },
      ],
      note: 'Preliminary positioning — the approved version will come from Canva.',
      ctaHead: "Let's design an experience.",
      ctaSub: 'Tell us who you want to delight.',
      mailSubj: 'Experiences inquiry — Synergy by Residencia',
    },
  },
};
