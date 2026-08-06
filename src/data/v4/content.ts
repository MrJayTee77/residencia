// ─────────────────────────────────────────────────────────────────────────────
// v4 — content from "Residencia · Arquitectura y contenido del sitio web" (v1).
// Reference model: Whalar Group — one mother page telling the group story, four
// unit landings with their own identity inside one design system.
//
// Site language is ES. The document marks the EN version as pending, so v4 is
// Spanish only rather than shipping a machine translation.
//
// UNCONFIRMED FIGURES are flagged `pending` and render marked, never as fact.
// The document itself flags the 19-vs-15 years conflict (brief says 19, the GR8
// deck says +15) — so the number is shown as pending until Residencia rules.
// ─────────────────────────────────────────────────────────────────────────────

export type UnitId = 'agency' | 'produccion' | 'gr8' | 'synergy';

export const brand = {
  name: 'Residencia',
  tagline: 'Creative Content Strategy',
  thesis: 'El contenido no es un entregable. Es el resultado de una estrategia.',
  domain: 'residencia.com.mx',
};

/* ── 02 · HOME ─────────────────────────────────────────────────────────── */

export const home = {
  hero: {
    eyebrow: 'Residencia — Creative Content Strategy',
    h1: ['El contenido no es un entregable.', 'Es el resultado de una estrategia.'],
    sub: 'Somos un ecosistema creativo con {years} años construyendo marcas relevantes dentro de los ecosistemas digitales.',
    cta: 'Descubre el ecosistema',
  },
  changed: {
    title: 'El contenido cambió. La forma de entretener, también.',
    before: {
      k: 'Antes',
      items: [
        'Se reunían a ver la final de fútbol en la TV.',
        'Contenido producido por grandes medios.',
        'Audiencia masiva, misma narrativa para todos.',
        'Horarios fijos, consumo lineal.',
      ],
    },
    now: {
      k: 'Ahora',
      items: [
        'Se reúnen a ver la Kings League en stream.',
        'Contenido creado por creadores y comunidades.',
        'Audiencias fragmentadas pero ultra comprometidas.',
        'Contenido en vivo, interactivo y en tiempo real.',
      ],
    },
    insight: 'Lo que antes era relevante hoy ya no conecta. Las audiencias evolucionaron, y el contenido también.',
    insightTail: 'Entender esta evolución no es opcional: es la base para crear contenido relevante hoy.',
  },
  who: {
    kicker: 'Quiénes somos',
    copy: 'En Residencia creemos que el contenido es la expresión visible de una estrategia. Creamos soluciones de comunicación que nacen de un entendimiento profundo de las personas, la cultura y las plataformas. Desde una campaña integral hasta una pieza de contenido, cada ejecución responde a un propósito y forma parte de una idea más grande.',
    stats: [
      { value: '19', label: 'años de experiencia', pending: true },
      { value: '+30', label: 'marcas', pending: true },
      { value: '4', label: 'unidades de negocio', pending: false },
      { value: '+25', label: 'creadores representados', pending: true },
    ],
    statsNote: 'Cifras por confirmar con Residencia. El brief indica 19 años; el deck de GR8 indica +15.',
  },
  ecosystem: {
    kicker: 'El ecosistema',
    title: 'Un ecosistema. Cuatro unidades. Una misma filosofía.',
    close: 'Cada unidad puede trabajar de manera independiente o integrarse dentro de un mismo proyecto: las capacidades necesarias, bajo una misma visión estratégica, creativa y operativa.',
  },
  work: { kicker: 'Trabajo destacado', title: 'La prueba.', cta: 'Ver todo el trabajo' },
  clients: { kicker: 'Clientes', copy: 'Marcas que ya construyen con nosotros.' },
  closing: {
    manifesto: ['Sabemos hacer lo bueno.', 'Nos encanta hacerlo más grande.'],
    cta: 'Hablemos',
    email: 'hola@residencia.com.mx',
    emailPending: true,
  },
};

/* ── 03–06 · UNITS ─────────────────────────────────────────────────────── */

export interface Unit {
  id: UnitId;
  n: string;
  slug: string;
  name: string;
  kicker: string;
  role: string;
  h1: string;
  sub: string;
  /** Accent proposed by the architecture document. Official unit colours are
   *  gap 13 — Agency, Producción and Synergy have none confirmed yet. */
  accent: string;
  accentDeep: string;
  onAccent: string;
  services: string[];
  brands?: string[];
  cta: string;
}

export const units: Record<UnitId, Unit> = {
  agency: {
    id: 'agency', n: '01', slug: 'agency', name: 'Residencia Agency',
    kicker: 'Núcleo estratégico',
    role: 'Encuentra la oportunidad y construye la estrategia.',
    h1: 'El núcleo estratégico y creativo de Residencia.',
    sub: 'Integramos data, insights culturales, estrategia de marca, creatividad, contenidos, amplificación y performance para desarrollar estrategias digitales full funnel.',
    accent: '#EE6352', accentDeep: '#D14B3B', onAccent: '#FFFFFF',
    services: ['Estrategia digital', 'Estrategia de contenidos', 'Creatividad', 'Campañas integrales',
      'Social media', 'Always on', 'Planeación de canales', 'Paid media', 'Performance',
      'Amplificación', 'Consultoría de marca'],
    brands: ['Mattel', 'Volkswagen', 'SEAT', 'Victoria', 'Ford', 'Iprikene', 'Huawei',
      'Pernod Ricard', 'Sensilis', 'Bonafont', 'Porsche'],
    cta: '¿Tienes un reto de negocio? Empecemos por la estrategia.',
  },
  produccion: {
    id: 'produccion', n: '02', slug: 'produccion', name: 'Residencia Producción',
    kicker: 'Brazo de ejecución',
    role: 'Convierte la idea en contenido.',
    h1: 'La estrategia determina la producción. Nunca al revés.',
    sub: 'Transformamos estrategias e ideas creativas en contenidos diseñados para conectar con las audiencias y funcionar dentro de cada plataforma.',
    accent: '#B4BC2A', accentDeep: '#8A8F1E', onAccent: '#1B1B0E',
    services: ['Producción audiovisual', 'Fotografía', 'Contenido para redes sociales', 'UGC',
      'Producción con creadores', 'Postproducción', 'Motion graphics', 'Adaptación de formatos',
      'Producción ágil', 'Contenido generado o asistido con IA'],
    cta: 'Tienes la idea. Nosotros la producimos.',
  },
  gr8: {
    id: 'gr8', n: '03', slug: 'gr8', name: 'GR8 by Residencia',
    kicker: 'Creator marketing',
    role: 'Conecta la idea con creadores y comunidades.',
    h1: 'Cuando el contenido cotidiano se vuelve impactante y memorable.',
    sub: 'En un mundo donde todos son creadores, un reel y dos stories ya no son suficientes.',
    accent: '#C93D85', accentDeep: '#5B2D86', onAccent: '#FFFFFF',
    services: ['Estrategia de creator marketing', 'Selección de perfiles', 'Campañas con creadores',
      'Desarrollo de conceptos', 'Diseño de dinámicas', 'Experiencias con comunidades',
      'Producción de contenido', 'Amplificación', 'Medición'],
    brands: ['Konami', 'Telcel', 'Comex', 'Amazon', 'Xbox'],
    cta: 'Hagamos algo GR8',
  },
  synergy: {
    id: 'synergy', n: '04', slug: 'synergy', name: 'Synergy by Residencia',
    kicker: 'Laboratorio de innovación',
    role: 'Expande sus posibilidades mediante innovación y tecnología.',
    h1: 'Donde las ideas se encuentran con la tecnología.',
    sub: 'El laboratorio de innovación creativa y tecnológica de Residencia: exploramos cómo las nuevas tecnologías amplían las posibilidades de una idea y crean experiencias que antes no eran posibles.',
    accent: '#3FB8B8', accentDeep: '#0E5E63', onAccent: '#04201F',
    services: ['Inteligencia artificial', 'CGI', 'Realidad aumentada', 'Experiencias interactivas',
      'Instalaciones tecnológicas', 'Contenido generativo', 'Prototipos digitales', 'Activaciones phygital'],
    cta: '¿Qué pasaría si tu idea pudiera más? Experimentemos.',
  },
};

export const unitOrder: UnitId[] = ['agency', 'produccion', 'gr8', 'synergy'];

/** Home ecosystem cards — the four-line pitch. */
export const ecosystemCards = [
  { id: 'agency' as UnitId, lead: 'El núcleo estratégico y creativo.', body: 'Data, insights culturales, creatividad y performance para diseñar estrategias digitales full funnel.' },
  { id: 'produccion' as UnitId, lead: 'El brazo de producción y ejecución.', body: 'De grandes producciones audiovisuales a UGC y contenido con IA.' },
  { id: 'gr8' as UnitId, lead: 'La evolución del creator marketing.', body: 'Colaboraciones estratégicas con los creadores más relevantes de habla hispana.' },
  { id: 'synergy' as UnitId, lead: 'El laboratorio de innovación creativa y tecnológica.', body: 'IA, CGI, realidad aumentada y experiencias phygital.' },
];

/* ── unit-specific long copy ────────────────────────────────────────────── */

export const agencyCopy = {
  thinkHead: 'Cómo pensamos',
  think: [
    'Partimos del descubrimiento de una oportunidad o tensión cultural para convertirla en una plataforma creativa capaz de vivir en diferentes formatos, canales y momentos.',
    'Diseñamos ecosistemas en los que cada punto de contacto cumple una función: generar conocimiento, conversación, consideración o conversión.',
    'No desarrollamos contenidos aislados. Construimos narrativas conectadas que pueden amplificarse mediante redes sociales, paid media, creadores de contenido, experiencias, relaciones públicas y cualquier otro canal necesario para alcanzar los objetivos de negocio.',
  ],
  modelHead: 'Modelo de trabajo',
  chain: ['Data', 'Strategy', 'Creativity'],
  satellites: [
    { t: 'Social Media / Digital Planning / Producción', to: 'produccion' as UnitId },
    { t: 'Influencers / Creators / Streamers', to: 'gr8' as UnitId },
    { t: 'Paid Media / Tech & Innovation', to: 'synergy' as UnitId },
  ],
};

export const produccionCopy = {
  whatHead: 'Qué hacemos',
  what: [
    'Desarrollamos desde grandes producciones audiovisuales y campañas publicitarias hasta contenido social-first, fotografía, piezas con creadores, UGC y formatos ágiles para redes sociales.',
    'Trabajamos con modelos de producción flexibles y escalables que nos permiten responder tanto a proyectos de gran alcance como a las necesidades cotidianas de contenido de una marca.',
  ],
  aiHead: 'IA en producción',
  ai: 'Integramos herramientas de inteligencia artificial y nuevas tecnologías dentro de los procesos de producción, siempre que ayuden a mejorar la calidad, acelerar los tiempos o expandir las posibilidades creativas de una idea.',
  spectrum: ['Blockbuster', 'Campaña', 'Social-first', 'Creadores / UGC', 'Always-on'],
};

export const gr8Copy = {
  momentHead: 'El momento del creator marketing',
  proof: [
    { big: '11 millones', label: 'de espectadores', detail: 'Supernova Strikers Orígenes — boxeo de creadores en el Palacio de los Deportes.' },
    { big: '$1.2 mil millones', label: 'de dólares', detail: 'PRIME (KSI × Logan Paul): una marca nacida de dos creadores.' },
    { big: 'Bernabéu · Camp Nou · Azteca', label: 'llenos', detail: 'Kings League. El futbol de creadores llena estadios reales.' },
  ],
  proofNote: 'Cifras de mercado, no de Residencia.',
  proofClose: 'Esto no es una tendencia. Es la nueva forma de entretener.',
  posHead: 'Posicionamiento',
  pos: [
    'No solo somos una agencia de contenido o representación. Somos estrategia, creatividad y producción que convierten a las marcas y creadores en plataformas vivas.',
    'Hacemos plataformas creativas que unen a marcas y creadores en algo mucho más grande. Unimos nuestro expertise con el talento de los streamers más potentes de habla hispana para crear proyectos GR8.',
  ],
  shiftHead: 'El cambio de paradigma',
  shift: [
    { from: 'No solo representamos', to: 'Co-creamos' },
    { from: 'No solo hacemos branded content', to: 'Construimos propiedades intelectuales' },
    { from: 'No solo activamos', to: 'Potencializamos a largo plazo' },
  ],
  pathsHead: 'Dos caminos',
  paths: [
    { n: '1', t: 'Propiedades intelectuales', lead: 'De un creador, hacemos una marca viva.',
      body: 'Diseñamos y producimos formatos propios de los creadores: productos, series, experiencias virtuales, eventos y collabs. Producción, desarrollo, conceptualización, estrategia y comunicación.' },
    { n: '2', t: 'Representación estratégica', lead: 'De una marca, la hacemos parte del universo del creador.',
      body: 'No solo representamos: potencializamos. Creamos estrategias y narrativas auténticas que conectan marcas y creadores en plataformas que dejan huella. Más que una mención: desarrollo estratégico.' },
  ],
  pairsHead: 'Casos',
  /** The flagship copy device. Numbers come from Residencia's own deck. */
  pairs: [
    { bueno: 'Que te guste recibir gente en tu casa', gr8: 'Tener 100k invitados diarios', hi: '100k invitados diarios', tag: 'IP con creador' },
    { bueno: 'Que te apasione la cultura pop', gr8: 'Compartirlo con 20K fans a diario', hi: '20K fans a diario', tag: '«Sin Ceintido», Roberto Cein' },
    { bueno: 'Anunciar un juego nuevo', gr8: 'Hacer un crossover épico', hi: 'crossover épico', tag: 'Konami' },
    { bueno: 'Que seas fan de Final Fantasy', gr8: 'Visitar el único museo de la saga', hi: 'único museo de la saga', tag: 'FFXVI: The Exhibition' },
    { bueno: 'Que te gusten los videojuegos', gr8: 'Que tú y tu equipo sean parte de uno', hi: 'tú y tu equipo sean parte de uno', tag: 'Amazon' },
  ],
  pairPending: { bueno: 'Mi Regalo Mattel', tag: 'Par «es bueno / es GR8» por formular con el cliente.' },
  partnersHead: 'Partners',
  partners: ['monou', 'MCR Agency', 'Spoiler', 'Randy'],
  closing: 'Sabemos hacer lo bueno. Pero nos encanta hacerlo GR8.',
};

export const synergyCopy = {
  philHead: 'Filosofía',
  phil: [
    'No utilizamos la innovación como un adorno ni como un truco visual. La tecnología debe hacer que la creatividad sea más relevante, más visible, más útil o más impactante.',
    'Synergy converge en el mundo phygital: conectamos los entornos físicos y digitales para crear experiencias más inmersivas, funcionales y memorables. Desde una pieza que cobra vida a través de realidad aumentada hasta una instalación que responde a la presencia de las personas.',
  ],
  labHead: 'El laboratorio',
  lab: 'Además de ejecutar proyectos, Synergy funciona como un espacio de experimentación: investigamos tendencias, desarrollamos prototipos y exploramos nuevos formatos para anticiparnos a las posibilidades de comunicación del futuro.',
  labNote: 'Sin casos publicables todavía — gap 04 del documento. La landing misma debería ser el caso de estudio.',
  statusNote: 'El nombre «Synergy» estaba marcado TBD en el brief. Confirmar antes de publicar.',
};

/* ── 07 · master client list ────────────────────────────────────────────── */

export const clientsMaster = [
  'Volkswagen', 'Flanax', 'Bonafont', 'Claro Video', 'Telmex', 'Jafra', 'Cupra', 'Ubisoft',
  'Huawei', 'Garnier', 'Victoria', 'Mattel', 'Samsung', 'Bayer', 'Porsche', 'NBA', "L'Oréal",
  'Nike', 'Absolut', 'Bimbo', 'Obao', 'Telcel', 'Splenda', 'Konami', 'SEAT', 'Danone', 'Ford',
  'Iprikene', 'Pernod Ricard', 'Sensilis', 'Comex', 'Amazon', 'Xbox',
];

/** Front row on the home marquee, per the document. */
export const clientsPriority = ['Volkswagen', 'Porsche', 'Mattel', 'Samsung', 'Nike', "L'Oréal", 'Amazon', 'Xbox', 'NBA'];
