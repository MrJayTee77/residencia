// ─────────────────────────────────────────────────────────────────────────────
// v4 — content from "Residencia · Arquitectura y contenido del sitio web" (v1).
// Reference model: Whalar Group — one mother page telling the group story, four
// unit landings with their own identity inside one design system.
//
// Site language is ES. The document marks the EN version as pending, so v4 is
// Spanish only rather than shipping a machine translation.
//
// Document v2 resolved 7 of its 14 gaps. 19 years and hola@residencia.com are
// now CONFIRMED and render as fact. What is still unverified stays flagged
// `pending` and renders marked — notably the roster audience totals, which come
// from public sources (Aug 2026) and await GR8's internal validation.
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
      { value: '19', label: 'años de experiencia', pending: false },
      { value: '+30', label: 'marcas', pending: false },
      { value: '4', label: 'unidades de negocio', pending: false },
      { value: '+25', label: 'creadores representados', pending: false },
      { value: '+100M', label: 'audiencia combinada', pending: true },
    ],
    statsNote: 'La audiencia combinada del roster se calculó con fuentes públicas (SocialBlade, StreamsCharts, prensa) a agosto 2026 — validar con los números internos de GR8 antes de publicar y refrescar cada trimestre.',
  },
  ecosystem: {
    kicker: 'El ecosistema',
    title: 'Un ecosistema. Cuatro unidades. Una misma filosofía.',
    close: 'Cada unidad puede trabajar de manera independiente o integrarse dentro de un mismo proyecto: las capacidades necesarias, bajo una misma visión estratégica, creativa y operativa.',
  },
  work: { kicker: 'Trabajo destacado', title: 'La prueba.', cta: 'Ver todo el trabajo' },
  clients: { kicker: 'Clientes', copy: 'Marcas que ya construyen con nosotros.' },
  team: {
    kicker: 'Equipo',
    title: 'Las personas detrás del ecosistema.',
    note: 'Pendiente: autorización de Residencia, nombres definitivos, cargos y fotos.',
    people: [
      { role: 'Fundador/a & CEO' },
      { role: 'Director/a General Creativo/a' },
      { role: 'Head de Estrategia' },
      { role: 'Head de Producción' },
    ],
  },
  awards: {
    kicker: 'Reconocimientos',
    title: '19 años también se miden en reconocimientos.',
    note: 'Lista real pendiente. Si no hay premios formales, esta sección se convierte en «Hitos».',
    entries: [
      { a: 'Premio / Festival', b: 'Categoría', c: 'Marca / Campaña', y: '20—' },
      { a: 'Premio', b: 'Categoría', c: 'Campaña', y: '20—' },
      { a: 'Ranking / Listado de industria', b: 'Posición', c: '', y: '20—' },
      { a: 'Reconocimiento de plataforma', b: 'Meta / TikTok / Google', c: '', y: '20—' },
    ],
  },
  closing: {
    manifesto: ['Sabemos hacer lo bueno.', 'Nos encanta hacerlo más grande.'],
    cta: 'Hablemos',
    email: 'hola@residencia.com',
    emailPending: false,
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
    kicker: 'Estudio de tecnología creativa',
    role: 'Expande las posibilidades de cada idea.',
    h1: 'Arte, diseño, cultura e innovación. En el mismo lugar.',
    sub: 'Definimos la estrategia, la activamos a través de experiencias creativas y convertimos el engagement en data, insights y resultados de negocio.',
    accent: '#3FB8B8', accentDeep: '#0E5E63', onAccent: '#04201F',
    services: ['Smart Art Toys', 'Immersive Mapping', 'Digital Wearables', 'Live Stream Effects',
      'Videomapping', 'Immersive AR', 'Augmented Reality', 'CGI Effects'],
    cta: '¿Qué pasaría si tu idea pudiera más? Experimentemos.',
  },
};

export const unitOrder: UnitId[] = ['agency', 'produccion', 'gr8', 'synergy'];

/** Home ecosystem cards — the four-line pitch. */
export const ecosystemCards = [
  { id: 'agency' as UnitId, lead: 'El núcleo estratégico y creativo.', body: 'Data, insights culturales, creatividad y performance para diseñar estrategias digitales full funnel.' },
  { id: 'produccion' as UnitId, lead: 'El brazo de producción y ejecución.', body: 'De grandes producciones audiovisuales a UGC y contenido con IA.' },
  { id: 'gr8' as UnitId, lead: 'La evolución del creator marketing.', body: 'Colaboraciones estratégicas con los creadores más relevantes de habla hispana.' },
  { id: 'synergy' as UnitId, lead: 'El estudio de tecnología creativa.', body: 'AR, CGI, smart art toys, experiencias phygital y Reflex.AR, su espejo inteligente propio — con casos para Nike, Formula 1 y Nissan.' },
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
  methodHead: 'La metodología Synergy',
  method: [
    { t: 'Discovery', d: 'Entender oportunidades, retos y contexto cultural.' },
    { t: 'Strategic Architectures', d: 'Definir visión, roadmap y marco de innovación.' },
    { t: 'Synergy Core', d: 'Donde convergen estrategia, creatividad e innovación.' },
    { t: 'Experience Ecosystem', d: 'Experiencias, productos y activaciones diseñadas para generar impacto.' },
    { t: 'Intelligence Loop', d: 'Insights, performance y aprendizajes que alimentan la siguiente innovación.' },
  ],
  methodClose: 'Evolución continua: cada proyecto se convierte en inteligencia para el siguiente.',
  philHead: 'Filosofía',
  phil: 'No utilizamos la innovación como un adorno ni como un truco visual. La tecnología debe hacer que la creatividad sea más relevante, más visible, más útil o más impactante.',
  capsHead: 'Capacidades',
  capsExtHead: 'Capacidades extendidas',
  capsExt: ['Estrategia y concepto', 'Producción audiovisual', 'CGI-powered videos',
    'AR multitracker, hand-tracking y mini-juegos', 'Lentes AR (colaboración con Snapchat)',
    'Plataformas de registro y captura de datos', 'Photo opportunities', 'Activaciones phygital',
    'AR prints con artistas', 'Perfilamiento de audiencias'],
  reflexHead: 'Reflex.AR',
  reflexTitle: 'Reflex.AR — el espejo inteligente de Synergy.',
  reflexIntro: 'Un espejo AR propio, en tres formatos:',
  reflex: [
    { t: 'Pro', d: 'Showrooms, retail y aeropuertos — moda, deporte, lifestyle y entretenimiento a gran escala.' },
    { t: 'Lite', d: 'Formato vertical compacto para pop-ups y seeding — ideal para accesorios, maquillaje y belleza.' },
    { t: 'Custom', d: 'Diseño y fabricación a medida, integrado a la identidad de la marca.' },
  ],
  reflexModes: 'Modos: try-on, beauty, interactive branding y mini-juegos, siempre con captura de datos.',
  reflexNote: 'Tener producto propio diferencia a Synergy de cualquier laboratorio de innovación de agencia.',
  clientsHead: 'Clientes',
  clients: ['Nike', 'Formula 1', 'Nissan', 'adidas', 'Jordan', 'Apple', 'Dior', 'Vogue', 'Meta',
    'Adobe', 'IKEA', 'HP', 'Mercedes-Benz', 'Hyundai', 'Walmart', 'Heineken', 'Dos Equis', 'Patrón',
    'Moët Hennessy', 'LVMH', 'American Express', 'Coachella', 'Cirque du Soleil', 'HBO Max',
    'UEFA Champions League', 'Liga MX', 'MLB', 'WNBA', 'Kings League', 'Chivas',
    'El Palacio de Hierro', 'Maybelline', 'Takis', 'Krispy Kreme', 'Telcel', 'Cupra', 'Ford',
    'OCESA', 'Tecate', 'Naciones Unidas'],
  clientsNote: 'Del logo wall del book (~65 marcas). Autorización de uso público pendiente.',
  /** Two decisions the document says must be made before this landing publishes. */
  openQuestions: [
    'El «BOOK SYNERGY 2026» está redactado en inglés y firma «LAB. ® MX» — nunca menciona a Residencia. Confirmar cómo se comunica públicamente la relación («Synergy by Residencia» vs. estudio aliado).',
    'Definir el idioma de esta landing: aquí el copy está en español por consistencia; puede conservarse en inglés si Synergy apunta a clientes globales.',
  ],
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
