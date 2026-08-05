// v3 content — bilingual copy for the four Residencia units.
//
// Source: client-supplied positioning text (Nov 2026 revision). Spanish is the
// authoritative version; English is a working translation pending client sign-off.
//
// This deliberately does NOT reuse src/data/units.ts — Synergy was repositioned
// from "premium experiences" to an innovation/technology lab, and Agency + GR8
// were rewritten. /v2 keeps the old copy; /v3 uses this.

import type { Lang } from '../i18n/utils';

export type Pillar = { t: string; d: string };

export interface UnitCopy {
  /** Full name, as it appears on the unit page. */
  name: string;
  /** Compact name for nav and cards. */
  short: string;
  /** Mono eyebrow — what kind of unit this is. */
  kind: string;
  /** One line: this unit's job inside the ecosystem. */
  role: string;
  /** Hub card blurb, ~10 words. */
  blurb: string;
  heroHead: [string, string];
  heroLead: string;
  /** Body paragraphs for the unit page intro. */
  intro: string[];
  pillarsHead: string;
  pillars: Pillar[];
  servicesHead: string;
  /** "Servicios principales" — flat list, rendered as a tagged index. */
  services: string[];
  clientsHead?: string;
  clients?: string[];
  ctaHead: string;
  ctaSub: string;
  mailSubj: string;
}

export interface Unit {
  id: string;
  /** Ordinal shown in the mono label. */
  n: string;
  es: UnitCopy;
  en: UnitCopy;
}

export const unitOrder = ['agency', 'production', 'gr8', 'synergy'] as const;
export type UnitId = (typeof unitOrder)[number];

/* ─────────────────────────── parent brand ─────────────────────────── */

export const brand = {
  es: {
    tagline: 'Creative Content Strategy',
    manifesto: [
      'En Residencia creemos que el contenido no es solamente un entregable: es la expresión visible de una estrategia.',
      'Todas nuestras unidades parten de una misma filosofía: conectar creatividad, estrategia, producción, tecnología y negocio para construir marcas relevantes dentro de los ecosistemas digitales.',
      'Creamos soluciones de comunicación que nacen de un entendimiento profundo de las personas, la cultura y las plataformas. Desde una campaña integral hasta una pieza de contenido, cada ejecución responde a un propósito y forma parte de una idea más grande.',
    ],
    ecosystemHead: 'Cómo funciona el ecosistema',
    ecosystemLead:
      'Las unidades de Residencia pueden trabajar de manera independiente o integrarse dentro de un mismo proyecto. Cada proyecto reúne las capacidades necesarias bajo una misma visión estratégica, creativa y operativa.',
  },
  en: {
    tagline: 'Creative Content Strategy',
    manifesto: [
      'At Residencia we believe content is not simply a deliverable: it is the visible expression of a strategy.',
      'All of our units start from the same philosophy — connecting creativity, strategy, production, technology and business to build relevant brands inside digital ecosystems.',
      'We create communication solutions born from a deep understanding of people, culture and platforms. From an integrated campaign to a single piece of content, every execution answers to a purpose and belongs to a larger idea.',
    ],
    ecosystemHead: 'How the ecosystem works',
    ecosystemLead:
      'Residencia’s units can work independently or come together inside a single project. Each project assembles the capabilities it needs under one strategic, creative and operational vision.',
  },
} as const;

/* ─────────────────────────── the four units ─────────────────────────── */

export const units: Record<UnitId, Unit> = {
  agency: {
    id: 'agency',
    n: '01',
    es: {
      name: 'Residencia Agency',
      short: 'Agency',
      kind: 'Estrategia y creatividad',
      role: 'Encuentra la oportunidad y construye la estrategia.',
      blurb: 'El núcleo estratégico y creativo del ecosistema.',
      heroHead: ['El núcleo estratégico y ', 'creativo de Residencia'],
      heroLead:
        'Integramos data, insights culturales, estrategia de marca, creatividad, contenidos, amplificación y performance para desarrollar estrategias digitales full funnel.',
      intro: [
        'Partimos del descubrimiento de una oportunidad o tensión cultural para convertirla en una plataforma creativa capaz de vivir en diferentes formatos, canales y momentos.',
        'Diseñamos ecosistemas en los que cada punto de contacto cumple una función: generar conocimiento, conversación, consideración o conversión.',
        'No desarrollamos contenidos aislados. Construimos narrativas conectadas que pueden amplificarse mediante redes sociales, paid media, creadores de contenido, experiencias, relaciones públicas y cualquier otro canal necesario para alcanzar los objetivos de negocio.',
      ],
      pillarsHead: 'Cómo trabajamos',
      pillars: [
        { t: 'Tensión cultural', d: 'Encontramos la oportunidad o la tensión que hace que una marca tenga algo real que decir.' },
        { t: 'Plataforma creativa', d: 'La convertimos en una idea capaz de vivir en distintos formatos, canales y momentos.' },
        { t: 'Ecosistema full funnel', d: 'Cada punto de contacto cumple una función: conocimiento, conversación, consideración o conversión.' },
        { t: 'Amplificación', d: 'Redes, paid media, creadores, experiencias y PR trabajando sobre la misma narrativa.' },
      ],
      servicesHead: 'Servicios principales',
      services: [
        'Estrategia digital', 'Estrategia de contenidos', 'Creatividad', 'Campañas integrales',
        'Social media', 'Always on', 'Planeación de canales', 'Paid media',
        'Performance', 'Amplificación', 'Consultoría de marca',
      ],
      clientsHead: 'Marcas',
      clients: ['Mattel', 'Volkswagen', 'SEAT', 'Victoria', 'Ford', 'Iprikene', 'Huawei', 'Pernod Ricard', 'Sensilis', 'Bonafont', 'Porsche'],
      ctaHead: 'Empecemos por la estrategia.',
      ctaSub: 'Cuéntanos dónde está tu marca y a dónde quiere llegar.',
      mailSubj: 'Consulta — Residencia Agency',
    },
    en: {
      name: 'Residencia Agency',
      short: 'Agency',
      kind: 'Strategy and creative',
      role: 'Finds the opportunity and builds the strategy.',
      blurb: 'The strategic and creative core of the ecosystem.',
      heroHead: ['The strategic and creative ', 'core of Residencia'],
      heroLead:
        'We integrate data, cultural insight, brand strategy, creative, content, amplification and performance to build full-funnel digital strategies.',
      intro: [
        'We start by finding an opportunity or a cultural tension, then turn it into a creative platform able to live across different formats, channels and moments.',
        'We design ecosystems where every touchpoint does a job: build awareness, spark conversation, drive consideration or convert.',
        'We don’t make isolated content. We build connected narratives that can be amplified through social, paid media, creators, experiences, PR and any other channel the business objective requires.',
      ],
      pillarsHead: 'How we work',
      pillars: [
        { t: 'Cultural tension', d: 'We find the opportunity or tension that gives a brand something real to say.' },
        { t: 'Creative platform', d: 'We turn it into an idea that can live across formats, channels and moments.' },
        { t: 'Full-funnel ecosystem', d: 'Every touchpoint has a function: awareness, conversation, consideration or conversion.' },
        { t: 'Amplification', d: 'Social, paid media, creators, experiences and PR all working on one narrative.' },
      ],
      servicesHead: 'Core services',
      services: [
        'Digital strategy', 'Content strategy', 'Creative', 'Integrated campaigns',
        'Social media', 'Always on', 'Channel planning', 'Paid media',
        'Performance', 'Amplification', 'Brand consulting',
      ],
      clientsHead: 'Brands',
      clients: ['Mattel', 'Volkswagen', 'SEAT', 'Victoria', 'Ford', 'Iprikene', 'Huawei', 'Pernod Ricard', 'Sensilis', 'Bonafont', 'Porsche'],
      ctaHead: 'Let’s start with the strategy.',
      ctaSub: 'Tell us where your brand is and where it wants to go.',
      mailSubj: 'Inquiry — Residencia Agency',
    },
  },

  production: {
    id: 'production',
    n: '02',
    es: {
      name: 'Residencia Producción',
      short: 'Producción',
      kind: 'Producción y ejecución',
      role: 'Convierte la idea en contenido.',
      blurb: 'El brazo de producción y ejecución del grupo.',
      heroHead: ['La estrategia determina ', 'la producción'],
      heroLead:
        'Transformamos estrategias e ideas creativas en contenidos diseñados para conectar con las audiencias y funcionar dentro de cada plataforma.',
      intro: [
        'Desarrollamos desde grandes producciones audiovisuales y campañas publicitarias hasta contenido social-first, fotografía, piezas con creadores, UGC y formatos ágiles para redes sociales.',
        'Trabajamos con modelos de producción flexibles y escalables que nos permiten responder tanto a proyectos de gran alcance como a las necesidades cotidianas de contenido de una marca.',
        'También integramos herramientas de inteligencia artificial y nuevas tecnologías dentro de los procesos de producción, siempre que ayuden a mejorar la calidad, acelerar los tiempos o expandir las posibilidades creativas de una idea.',
      ],
      pillarsHead: 'El enfoque',
      pillars: [
        { t: 'De la estrategia al máster', d: 'La producción responde a la estrategia, nunca al revés.' },
        { t: 'Escala flexible', d: 'Del gran rodaje publicitario a la necesidad cotidiana de contenido de una marca.' },
        { t: 'Nativo por plataforma', d: 'Cada pieza está pensada para funcionar dentro del canal donde vive.' },
        { t: 'IA con criterio', d: 'Nuevas tecnologías cuando mejoran la calidad, los tiempos o las posibilidades creativas.' },
      ],
      servicesHead: 'Servicios principales',
      services: [
        'Producción audiovisual', 'Fotografía', 'Contenido para redes sociales', 'UGC',
        'Producción con creadores', 'Postproducción', 'Motion graphics',
        'Adaptación de formatos', 'Producción ágil', 'Contenido asistido por IA',
      ],
      ctaHead: 'Produzcamos algo que funcione.',
      ctaSub: 'Comparte tu brief, tus fechas y tus referencias.',
      mailSubj: 'Consulta — Residencia Producción',
    },
    en: {
      name: 'Residencia Production',
      short: 'Production',
      kind: 'Production and delivery',
      role: 'Turns the idea into content.',
      blurb: 'The group’s production and delivery arm.',
      heroHead: ['Strategy determines ', 'production'],
      heroLead:
        'We turn strategies and creative ideas into content designed to connect with audiences and work inside every platform.',
      intro: [
        'We produce everything from large-scale film production and advertising campaigns to social-first content, photography, creator pieces, UGC and agile formats for social media.',
        'We work with flexible, scalable production models that let us answer both far-reaching projects and a brand’s everyday content needs.',
        'We also build AI tools and new technologies into the production process — whenever they improve quality, shorten timelines or expand what an idea can become.',
      ],
      pillarsHead: 'The approach',
      pillars: [
        { t: 'From strategy to master', d: 'Production answers to the strategy, never the other way around.' },
        { t: 'Flexible scale', d: 'From the large advertising shoot to a brand’s everyday content need.' },
        { t: 'Native by platform', d: 'Every piece is built to work inside the channel where it lives.' },
        { t: 'AI with judgment', d: 'New technology when it improves quality, speed or creative possibility.' },
      ],
      servicesHead: 'Core services',
      services: [
        'Film production', 'Photography', 'Social content', 'UGC',
        'Creator production', 'Post-production', 'Motion graphics',
        'Format adaptation', 'Agile production', 'AI-assisted content',
      ],
      ctaHead: 'Let’s produce something that works.',
      ctaSub: 'Share your brief, your dates and your references.',
      mailSubj: 'Inquiry — Residencia Production',
    },
  },

  gr8: {
    id: 'gr8',
    n: '03',
    es: {
      name: 'GR8 by Residencia',
      short: 'GR8',
      kind: 'Creator marketing',
      role: 'Conecta la idea con creadores y comunidades.',
      blurb: 'Creator e influencer marketing, con la cultura de cada comunidad.',
      heroHead: ['Un punto de encuentro entre la marca, ', 'el creador y su comunidad'],
      heroLead:
        'Trabajamos con algunos de los creadores más relevantes del ecosistema digital para desarrollar colaboraciones estratégicas que generen valor tanto para las marcas como para sus comunidades.',
      intro: [
        'Diseñamos campañas que parten del lenguaje, la personalidad y la relación que cada creador ha construido con su audiencia.',
        'En lugar de insertar mensajes publicitarios de manera forzada, buscamos encontrar un punto de encuentro natural entre la marca, el creador y la cultura de su comunidad.',
        'Acompañamos los proyectos desde la selección de perfiles y el desarrollo de la estrategia creativa hasta la conceptualización de contenidos, producción, amplificación y medición de resultados.',
      ],
      pillarsHead: 'El modelo',
      pillars: [
        { t: 'El lenguaje del creador', d: 'Partimos de su personalidad y de la relación que ya construyó con su audiencia.' },
        { t: 'Encaje natural', d: 'Buscamos el punto de encuentro entre marca, creador y cultura — no el mensaje forzado.' },
        { t: 'De perfil a resultado', d: 'Selección, estrategia, concepto, producción, amplificación y medición.' },
        { t: 'Al objetivo', d: 'Awareness, conversación, consideración, engagement, tráfico o conversión.' },
      ],
      servicesHead: 'Servicios principales',
      services: [
        'Estrategia de creator marketing', 'Selección de perfiles', 'Campañas con creadores',
        'Desarrollo de conceptos', 'Diseño de dinámicas', 'Experiencias con comunidades',
        'Producción de contenido', 'Amplificación', 'Medición',
      ],
      clientsHead: 'Marcas',
      clients: ['Konami', 'Telcel', 'Comex', 'Amazon', 'Xbox'],
      ctaHead: 'Conectemos con la comunidad correcta.',
      ctaSub: 'Marcas y creadores: hablemos.',
      mailSubj: 'Consulta — GR8 by Residencia',
    },
    en: {
      name: 'GR8 by Residencia',
      short: 'GR8',
      kind: 'Creator marketing',
      role: 'Connects the idea with creators and communities.',
      blurb: 'Creator and influencer marketing, grounded in each community’s culture.',
      heroHead: ['A meeting point between the brand, ', 'the creator and their community'],
      heroLead:
        'We work with some of the most relevant creators in the digital ecosystem to build strategic collaborations that create value for brands and for their communities alike.',
      intro: [
        'We design campaigns that start from the language, the personality and the relationship each creator has built with their audience.',
        'Instead of forcing an advertising message in, we look for the natural meeting point between the brand, the creator and the culture of their community.',
        'We stay with the project from profile selection and creative strategy through concept, production, amplification and measurement.',
      ],
      pillarsHead: 'The model',
      pillars: [
        { t: 'The creator’s language', d: 'We start from their personality and the relationship they already built with their audience.' },
        { t: 'Natural fit', d: 'We look for the meeting point between brand, creator and culture — not the forced message.' },
        { t: 'Profile to result', d: 'Selection, strategy, concept, production, amplification and measurement.' },
        { t: 'Built to the objective', d: 'Awareness, conversation, consideration, engagement, traffic or conversion.' },
      ],
      servicesHead: 'Core services',
      services: [
        'Creator marketing strategy', 'Profile selection', 'Creator campaigns',
        'Concept development', 'Mechanic design', 'Community experiences',
        'Content production', 'Amplification', 'Measurement',
      ],
      clientsHead: 'Brands',
      clients: ['Konami', 'Telcel', 'Comex', 'Amazon', 'Xbox'],
      ctaHead: 'Let’s reach the right community.',
      ctaSub: 'Brands and creators: let’s talk.',
      mailSubj: 'Inquiry — GR8 by Residencia',
    },
  },

  synergy: {
    id: 'synergy',
    n: '04',
    es: {
      name: 'Synergy by Residencia',
      short: 'Synergy',
      kind: 'Innovación y tecnología',
      role: 'Expande la idea mediante innovación y tecnología.',
      blurb: 'El laboratorio de innovación creativa y tecnológica.',
      heroHead: ['El laboratorio de innovación ', 'creativa y tecnológica'],
      heroLead:
        'Exploramos cómo las nuevas tecnologías pueden ampliar las posibilidades de una idea, transformar la relación entre una marca y las personas, y crear experiencias que antes no eran posibles.',
      intro: [
        'Desarrollamos propuestas que integran inteligencia artificial, CGI, realidad aumentada, experiencias interactivas, contenido generativo, instalaciones tecnológicas y soluciones digitales aplicadas a campañas, contenidos y experiencias de marca.',
        'Synergy converge en el mundo phygital, conectando los entornos físicos y digitales para crear experiencias más inmersivas, funcionales y memorables. Desde una pieza que cobra vida a través de realidad aumentada hasta una instalación que responde a la presencia de las personas, buscamos que la tecnología tenga un papel real dentro de la idea.',
        'No utilizamos la innovación como un adorno ni como un truco visual. La tecnología debe hacer que la creatividad sea más relevante, más visible, más útil o más impactante.',
        'Además de ejecutar proyectos, Synergy funciona como un espacio de experimentación en el que investigamos tendencias, desarrollamos prototipos y exploramos nuevos formatos para anticiparnos a las posibilidades de comunicación del futuro.',
      ],
      pillarsHead: 'El criterio',
      pillars: [
        { t: 'Phygital', d: 'Conectamos entornos físicos y digitales en experiencias inmersivas, funcionales y memorables.' },
        { t: 'Tecnología con papel real', d: 'La innovación no es adorno ni truco visual: debe hacer la idea más relevante o más útil.' },
        { t: 'Laboratorio', d: 'Investigamos tendencias, desarrollamos prototipos y exploramos formatos nuevos.' },
        { t: 'Anticipación', d: 'Nos adelantamos a las posibilidades de comunicación del futuro.' },
      ],
      servicesHead: 'Servicios principales',
      services: [
        'Inteligencia artificial', 'CGI', 'Realidad aumentada', 'Experiencias interactivas',
        'Instalaciones tecnológicas', 'Contenido generativo', 'Prototipos digitales',
        'Activaciones phygital', 'Innovación aplicada',
      ],
      ctaHead: 'Probemos algo que no se ha hecho.',
      ctaSub: 'Cuéntanos la idea y buscamos cómo expandirla.',
      mailSubj: 'Consulta — Synergy by Residencia',
    },
    en: {
      name: 'Synergy by Residencia',
      short: 'Synergy',
      kind: 'Innovation and technology',
      role: 'Expands the idea through innovation and technology.',
      blurb: 'The creative and technological innovation lab.',
      heroHead: ['The creative and technological ', 'innovation lab'],
      heroLead:
        'We explore how new technologies can widen what an idea can do, change how a brand relates to people, and create experiences that were not possible before.',
      intro: [
        'We build proposals that integrate artificial intelligence, CGI, augmented reality, interactive experiences, generative content, technological installations and digital solutions applied to campaigns, content and brand experiences.',
        'Synergy converges on the phygital — connecting physical and digital environments to create experiences that are more immersive, more functional and more memorable. From a piece that comes alive through augmented reality to an installation that responds to a person’s presence, we want technology to play a real part inside the idea.',
        'We don’t use innovation as decoration or as a visual trick. Technology has to make the creative work more relevant, more visible, more useful or more striking.',
        'Beyond delivering projects, Synergy runs as a space for experimentation: we research trends, build prototypes and explore new formats to stay ahead of what communication will be able to do next.',
      ],
      pillarsHead: 'The criteria',
      pillars: [
        { t: 'Phygital', d: 'We connect physical and digital environments into immersive, functional, memorable experiences.' },
        { t: 'Technology with a real role', d: 'Innovation is not decoration or a trick: it must make the idea more relevant or more useful.' },
        { t: 'A laboratory', d: 'We research trends, build prototypes and explore new formats.' },
        { t: 'Ahead of it', d: 'We anticipate what communication will be able to do next.' },
      ],
      servicesHead: 'Core services',
      services: [
        'Artificial intelligence', 'CGI', 'Augmented reality', 'Interactive experiences',
        'Technological installations', 'Generative content', 'Digital prototypes',
        'Phygital activations', 'Applied innovation',
      ],
      ctaHead: 'Let’s try something that hasn’t been done.',
      ctaSub: 'Tell us the idea and we’ll find how to expand it.',
      mailSubj: 'Inquiry — Synergy by Residencia',
    },
  },
};

/** Convenience: units in display order, resolved to one language. */
export function unitList(lang: Lang) {
  return unitOrder.map((id) => ({ id, n: units[id].n, ...units[id][lang] }));
}
