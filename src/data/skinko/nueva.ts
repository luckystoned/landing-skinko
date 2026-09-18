import {
  contentStatuses,
  type ArtExperience,
  type BandadasValueContent,
  type Benchmark,
  type ClosingContent,
  type GesCaseContent,
  type HiddenSystemContent,
  type JourneyPhase,
  type OpportunityContent,
  type PrizeConcept,
  type ProposedMilestone,
  type SiteSpecificContent,
  type StatusedContent,
} from "@/schemas/skinko";

export const nuevaProposal = {
  brandTerritory: {
    status: contentStatuses.confirmed,
    data: {
      name: "SKINKO — THE ART OF SKIN",
      statement: "La belleza se convierte en arte.",
      signature: "SKINKO × BANDADAS",
      question: "¿Y si la próxima obra fuera creada para SKINKO?",
    },
  },
  artExperiences: {
    status: contentStatuses.confirmed,
    data: [
      { index: "01", name: "The Living Sculptures", description: "Skincare presentado como una pieza de museo.", ratio: "4:5" },
      { index: "02", name: "Become the Artist", description: "La audiencia deja de mirar y pasa a participar.", ratio: "3:2" },
      { index: "03", name: "The Masterpiece", description: "La arquitectura convierte al visitante en parte de la obra.", ratio: "4:5" },
    ] satisfies ArtExperience[],
  },
  opportunity: {
    status: contentStatuses.proposed,
    data: {
      statement: "De una activación artística a una obra creada para SKINKO.",
      description: "La oportunidad es convertir uno de los espacios de SKINKO en parte de una obra de arte concebida especialmente para ese lugar.",
      shifts: [
        { from: "Activación", to: "Obra" },
        { from: "Espacio comercial", to: "Lugar con identidad" },
        { from: "Impacto momentáneo", to: "Vínculo cultural" },
      ],
      value: "Una obra vinculada con su arquitectura, su identidad y la experiencia de quienes lo recorren puede hacer que ese espacio sea más reconocible y menos intercambiable.",
      closing: "No proponemos extender una campaña. Proponemos crear una obra que pertenezca conceptual y materialmente a un lugar de SKINKO.",
    } satisfies OpportunityContent,
  },
  prize: {
    status: contentStatuses.proposed,
    data: {
      name: "Premio SKINKO a las Artes 2027",
      displayLines: ["Premio", "SKINKO", "a las Artes", "2027"],
      summary: "Una convocatoria para seleccionar una obra concebida desde el inicio para un espacio específico de SKINKO.",
      definition: "En arte, este tipo de obra se denomina site-specific: una pieza que nace de la arquitectura, los materiales, la luz, la circulación y la identidad de un lugar determinado.",
      principles: ["Arquitectura", "Materiales", "Luz", "Circulación", "Público", "Identidad"],
      formula: ["SKINKO", "ARTISTA", "LUGAR"],
      processSummary: "Bandadas convoca artistas a partir de lineamientos y un local real. Un jurado selecciona finalistas, las propuestas se desarrollan y la obra ganadora se produce e instala en el lugar para el que fue concebida.",
    } satisfies PrizeConcept,
  },
  siteSpecific: {
    status: contentStatuses.proposed,
    data: {
      reasons: [
        { label: "Identidad", description: "Vuelve al espacio más reconocible y traduce el universo de SKINKO en una experiencia propia." },
        { label: "Pertenencia", description: "La obra no podría trasladarse sin perder una parte central de su sentido." },
        { label: "Experiencia", description: "Integra arquitectura, materiales, circulación y público en una misma propuesta." },
        { label: "Vínculo cultural", description: "Conecta a la marca con artistas, especialistas y nuevas audiencias." },
      ],
      positioning: "En belleza, productos, tendencias y rutinas pueden compartirse. Una identidad cultural construida por la marca es más difícil de replicar.",
      closing: "No compramos una obra para colgarla. Invitamos a un artista a interpretar un lugar de SKINKO.",
    } satisfies SiteSpecificContent,
  },
  journey: {
    status: contentStatuses.proposed,
    data: [
      { phase: 1, label: "Convocatoria", description: "Convocatoria a artistas a partir de un espacio y lineamientos concretos." },
      { phase: 2, label: "Selección", description: "Evaluación inicial de las propuestas recibidas." },
      { phase: 3, label: "Finalistas", description: "Selección propuesta de hasta cinco proyectos finalistas." },
      { phase: 4, label: "Desarrollo", description: "Profundización de la relación con el espacio, materialidad, factibilidad, presupuesto y montaje." },
      { phase: 5, label: "Obra ganadora", description: "Selección de la obra ganadora por el jurado." },
      { phase: 6, label: "Producción", description: "Desarrollo técnico junto a SKINKO, Bandadas y productora." },
      { phase: 7, label: "Instalación", description: "Producción e instalación en el espacio para el cual fue concebida." },
    ] satisfies JourneyPhase[],
  },
  hiddenSystem: {
    status: contentStatuses.confirmed,
    data: {
      surface: "Una convocatoria",
      layers: [
        { index: "01", label: "Estrategia", action: "Define el marco" }, { index: "02", label: "Legal", action: "Protege el proceso" },
        { index: "03", label: "Tecnología", action: "Sostiene el flujo" }, { index: "04", label: "Comunicación", action: "Activa la convocatoria" },
        { index: "05", label: "Artistas", action: "Ordena la experiencia" }, { index: "06", label: "Soporte", action: "Acompaña cada caso" },
        { index: "07", label: "Jurado", action: "Coordina especialistas" }, { index: "08", label: "Evaluación", action: "Estructura criterios" },
        { index: "09", label: "Producción", action: "Materializa la obra" }, { index: "10", label: "Registro", action: "Documenta decisiones" },
      ],
      statement: "Lo que parece una convocatoria es, en realidad, un sistema operativo.",
      closing: "Bandadas articula cada capa.",
    } satisfies HiddenSystemContent,
  },
  bandadasValue: {
    status: contentStatuses.confirmed,
    data: {
      headline: "Un equipo. Todo el proceso.",
      statement: "Bandadas construye el marco cultural, artístico y operativo del premio y lo articula con los equipos de marca, comunicación, arquitectura y producción de SKINKO.",
      capabilities: ["Estrategia cultural", "Comunidad", "Tecnología", "Operación"],
      process: ["Idea", "Convocatoria", "Artista", "Jurado", "Desarrollo", "Producción"],
      closing: "Un equipo para articular todo el proceso.",
    } satisfies BandadasValueContent,
  },
  roadmap: {
    status: contentStatuses.proposed,
    data: [
      { period: "Noviembre 2026", focus: "Concepto + espacio + lineamientos", description: "Definición del local, alcance y criterios del premio." },
      { period: "Diciembre / enero", focus: "Bases + plataforma", description: "Bases, plataforma y preparación del lanzamiento." },
      { period: "Febrero 2027", focus: "Convocatoria", description: "Lanzamiento y convocatoria de artistas." },
      { period: "Marzo", focus: "Finalistas + desarrollo", description: "Selección y desarrollo de finalistas." },
      { period: "Abril", focus: "Obra ganadora + producción", description: "Selección de la obra e inicio de producción." },
    ] satisfies ProposedMilestone[],
  },
  closing: {
    status: contentStatuses.proposed,
    data: {
      territory: "De THE ART OF SKIN",
      answer: "a una obra creada para SKINKO.",
      prize: "Premio SKINKO a las Artes 2027",
      descriptor: "Propuesta de premio para una obra de sitio específico.",
      signature: "SKINKO × BANDADAS",
      invitation: "Conversemos sobre el espacio que podría darle origen.",
    } satisfies ClosingContent,
  },
} satisfies Record<string, StatusedContent<unknown>>;

export const nuevaBenchmarks: Benchmark[] = [
  { name: "Zivals × Martín Ron", location: "Buenos Aires, Argentina", category: "Retail / Cultura", whatTheyDid: "Encargó para su 55° aniversario un mural concebido para la terraza de Corrientes y Callao, en diálogo con la historia cultural de la esquina.", brandValue: "Un elemento identitario visible desde el espacio público y un relato editorial alrededor de la obra y su proceso.", relevance: "Muestra cómo una obra ligada a un edificio puede volver reconocible un lugar de marca.", quantitativeResult: "195 m² · dato documentado de la obra", sourceLabel: "Zivals", sourceUrl: "https://www.zivals.com.ar/nota/nos%2Bencontramos%2Ben%2Bzivals" },
  { name: "Gabe Tenute × Arte Laguna", location: "Treviso, Italia", category: "Convocatoria / Site-specific", whatTheyDid: "Convocó una obra exterior para el jardín de Borgo di Guia, vinculada con el territorio, la historia y la identidad de la propiedad.", brandValue: "Una convocatoria artística conectada con su identidad y la adquisición de la obra ganadora.", relevance: "Replica la secuencia propuesta: espacio, brief, convocatoria, selección, producción e instalación.", quantitativeResult: "€2.000 · premio, no indicador de impacto", sourceLabel: "Arte Laguna Prize", sourceUrl: "https://artelagunaprize.com/network/gabe-tenute-treviso-italy/" },
  { name: "Bios Line × Arte Laguna", location: "Padua, Italia", category: "Bienestar / Site-specific", whatTheyDid: "Convocó una escultura exterior para su sede; la obra debía dialogar con la arquitectura, el jardín y los valores naturales de la marca.", brandValue: "Un activo físico propio que traduce valores de marca en espacio y materialidad.", relevance: "Es un modelo cercano para construir un brief que indique qué espacio interpretar, sin prescribir qué obra hacer.", quantitativeResult: "€5.000 · premio, más costos de realización", sourceLabel: "Arte Laguna Prize", sourceUrl: "https://artelagunaprize.com/wp-content/uploads/2026/02/Presentazione-EN-2025-6-compresso.pdf" },
  { name: "Four Seasons Madrid", location: "Madrid, España", category: "Hospitalidad / Convocatoria", whatTheyDid: "Organizó cuatro ediciones de concursos con escuelas de Bellas Artes y luego encargó obras específicas para restaurantes y áreas comunes.", brandValue: "Obras integradas a espacios concretos y acceso sostenido a una comunidad creativa.", relevance: "Demuestra la transición de convocatoria y selección hacia comisiones vinculadas con espacios concretos.", quantitativeResult: "500+ propuestas · 75 obras seleccionadas", sourceLabel: "Four Seasons Press Room", sourceUrl: "https://press.fourseasons.com/content/fourseasons_pressroom/printView.html?pageToPrint=%2Fcontent%2Ffourseasons_pressroom%2Fen%2Fnews%2Fmadrid%2F2021%2Fnew_kaws_art_install1" },
];

export const nuevaGesCase = {
  status: contentStatuses.caseInProgress,
  data: {
    name: "Premio GES a las Artes 2026",
    headline: "Ya estamos construyendo un proceso así.",
    summary: "Bandadas está operando una convocatoria real: plataforma, artistas, soporte, jurado, comunicación y proceso.",
    capabilities: ["Convocatoria", "Plataforma", "Artistas + soporte", "Jurado", "Comunicación", "Operación"],
    verifiedFacts: [
      { value: "5", label: "Jurados coordinados" },
      { value: "100+", label: "Postulaciones recibidas" },
      { value: "PRUEBA → PROD", label: "Flujo de despliegue" },
      { value: "PUNTA A PUNTA", label: "Control de calidad" },
    ],
    evidence: [
      { index: "01", title: "Landing de GES", ratio: "2:1", caption: "Banner oficial de la convocatoria de sitio específico.", href: "https://premio-ges.bandadas.com" },
      { index: "02", title: "Flujo de postulación", ratio: "1:1", caption: "Formulario real: identificación de la convocatoria y datos personales." },
      { index: "03", title: "Comunicación", ratio: "4:5", caption: "Identidad y sistema de difusión del premio." },
    ],
    progressNote: "El proceso de selección continúa en curso. No se presentan todavía resultados finales.",
    closing: "Un equipo. Todo el proceso.",
  } satisfies GesCaseContent,
};

export const nuevaUi = {
  hero: { meta: "Propuesta privada · Obra de sitio específico · 2027", visualTitle: "The Art of Skin — imagen principal", visualCaption: "Visual conceptual provisto · composición preparada para fotografía vertical.", next: "Próximo", siteSpecific: "Sitio específico", prizeAria: "Propuesta a desarrollar en el próximo capítulo" },
  artOfSkin: { label: "Un territorio ya abierto", heading: "La belleza, presentada como arte.", first: "Para la apertura de Galerías Pacífico, SKINKO concibió el local como una galería contemporánea de skincare.", second: "Producto, cuerpo, arquitectura, música y participación formaron parte de un mismo recorrido:", closing: "SKINKO ya convirtió skincare, espacio y participación en una experiencia artística. Bandadas propone profundizar esa dirección." },
  opportunity: { label: "La oportunidad" },
  prize: { label: "La propuesta", status: "Propuesta 2027" },
  siteSpecific: { label: "Una obra creada para el lugar", heading: "¿Por qué una obra creada para el lugar?", culture: "Cultura de marca." },
  journey: { label: "El proceso", heading: "De un lugar real a una obra real.", asideLabel: "Opcional · Propuesto", aside: "También se podría explorar la participación de una institución cultural como colaboradora en una instancia de jurado o desarrollo." },
  benchmarks: { label: "Referencias documentadas", heading: "El modelo ya existe.", intro: "Cuatro casos muestran cómo distintas marcas conectaron convocatoria, espacio y obra. Los resultados cuantitativos se distinguen del valor estratégico observable.", what: "Qué hicieron", value: "Valor estratégico", relevance: "Por qué es relevante para SKINKO", data: "Dato documentado", note: "Imágenes documentales pendientes de permiso. Esta versión utiliza composición editorial, sin recreaciones de IA." },
  hiddenSystem: { label: "El sistema detrás del premio", record: "Archivo operativo · sistema desplegado", archive: "Registro · 00", simple: "Aparentemente simple" },
  ges: { label: "Capacidad comprobable", status: "Caso en curso", closing: "Bandadas diseña y opera el sistema completo detrás de la convocatoria.", evidenceStatuses: ["Caso en curso · landing publicada", "Caso en curso · flujo de postulación real", "Caso en curso · comunicación publicada"] },
  bandadas: { label: "Por qué Bandadas", evidence: "Evidencia → capacidad", system: "Un sistema" },
  roadmap: { label: "Cronograma", status: "Cronograma propuesto", heading: "Noviembre 2026\n— Abril 2027" },
  closing: { meta: "Propuesta privada · 2027" },
} as const;
