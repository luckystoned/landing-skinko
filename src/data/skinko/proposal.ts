import {
  contentStatuses,
  type ArtExperience,
  type BandadasValueContent,
  type ClosingContent,
  type CulturalConnectionContent,
  type HiddenSystemContent,
  type JourneyPhase,
  type PrizeConcept,
  type ProposedApplication,
  type ProposedMilestone,
  type StatusedContent,
  type Transformation,
} from "@/schemas/skinko";

export const proposal = {
  brandTerritory: {
    status: contentStatuses.confirmed,
    data: {
      name: "SKINKO — THE ART OF SKIN",
      statement: "Beauty becomes art.",
      signature: "SKINKO × BANDADAS",
      question: "What if art became part of the brand itself?",
    },
  },
  artExperiences: {
    status: contentStatuses.confirmed,
    data: [
      {
        index: "01",
        name: "The Living Sculptures",
        description: "Skincare presentado como una pieza de museo.",
        ratio: "4:5",
      },
      {
        index: "02",
        name: "Become the Artist",
        description: "La audiencia deja de mirar y pasa a participar.",
        ratio: "3:2",
      },
      {
        index: "03",
        name: "The Masterpiece",
        description: "La arquitectura convierte al visitante en parte de la obra.",
        ratio: "4:5",
      },
    ] satisfies ArtExperience[],
  },
  opportunity: {
    status: contentStatuses.proposed,
    data: [
      { from: "Activation", to: "Cultural platform" },
      { from: "Event", to: "Program" },
      { from: "Audience", to: "Community" },
    ] satisfies Transformation[],
  },
  prize: {
    status: contentStatuses.proposed,
    data: {
      name: "Premio SKINKO a las Artes 2027",
      displayLines: ["Premio", "SKINKO", "a las Artes", "2027"],
      summary:
        "Una convocatoria propuesta para seleccionar un/a artista que interprete el universo SKINKO.",
      development:
        "La propuesta seleccionada se desarrollaría junto a la marca hasta convertirse en una cápsula artística real.",
      disciplines: ["Art", "Beauty", "Design", "Architecture", "Brand"],
      collaborators: ["SKINKO", "BANDADAS", "PRODUCTORA DE ARTE"],
    } satisfies PrizeConcept,
  },
  possibilities: {
    status: contentStatuses.proposed,
    data: [
      { index: "01", name: "Store", ratio: "16:9" },
      { index: "02", name: "Packaging", ratio: "3:4" },
      { index: "03", name: "Object", ratio: "1:1" },
      { index: "04", name: "Product", ratio: "4:5" },
      { index: "05", name: "Digital", ratio: "16:9" },
      { index: "06", name: "Content", ratio: "3:4" },
      { index: "07", name: "Experience", ratio: "16:9" },
    ] satisfies ProposedApplication[],
  },
  journey: {
    status: contentStatuses.proposed,
    data: [
      {
        phase: 1,
        label: "Open call",
        description: "Lanzamiento y difusión de la convocatoria propuesta.",
      },
      {
        phase: 2,
        label: "Selection",
        description: "El jurado evaluaría las propuestas recibidas.",
      },
      {
        phase: 3,
        label: "5 finalists",
        description: "Cinco proyectos pasarían a una segunda instancia.",
      },
      {
        phase: 4,
        label: "Development",
        description: "Los finalistas ampliarían y profundizarían sus ideas.",
      },
      {
        phase: 5,
        label: "Winner",
        description: "El jurado seleccionaría un proyecto ganador.",
      },
      {
        phase: 6,
        label: "Production",
        description: "La propuesta se desarrollaría con SKINKO, Bandadas y productora.",
      },
      {
        phase: 7,
        label: "Activation",
        description: "La obra podría materializarse dentro del territorio de la marca.",
      },
    ] satisfies JourneyPhase[],
  },
  culturalConnection: {
    status: contentStatuses.proposed,
    data: {
      institution: "Museo Nacional de Arte Oriental",
      label: "Potential cultural partnership",
      actors: ["Brand", "Artists", "Institution"],
      statement:
        "El premio también podría conectar a SKINKO con instituciones y especialistas de la escena artística.",
      proposal:
        "Proponemos explorar una vinculación con el Museo Nacional de Arte Oriental como marco cultural para una de las instancias del premio.",
      possibleRoles: [
        "Marco cultural",
        "Contexto institucional",
        "Encuentro con especialistas",
        "Posible instancia vinculada al jurado",
        "Potencial sede de una instancia central",
      ],
    } satisfies CulturalConnectionContent,
  },
  hiddenSystem: {
    status: contentStatuses.confirmed,
    data: {
      surface: "An open call",
      layers: [
        { index: "01", label: "Strategy", action: "Define el marco" },
        { index: "02", label: "Legal", action: "Protege el proceso" },
        { index: "03", label: "Technology", action: "Sostiene el flujo" },
        { index: "04", label: "Communication", action: "Activa la convocatoria" },
        { index: "05", label: "Artists", action: "Ordena la experiencia" },
        { index: "06", label: "Support", action: "Acompaña cada caso" },
        { index: "07", label: "Jury", action: "Coordina especialistas" },
        { index: "08", label: "Evaluation", action: "Estructura criterios" },
        { index: "09", label: "Production", action: "Materializa la obra" },
        { index: "10", label: "Reporting", action: "Documenta decisiones" },
      ],
      statement:
        "What looks like an open call is actually an operating system.",
      closing: "Bandadas operates every layer.",
    } satisfies HiddenSystemContent,
  },
  bandadasValue: {
    status: contentStatuses.confirmed,
    data: {
      headline: "One partner. The whole process.",
      statement:
        "Bandadas reúne estrategia cultural, comunidad, tecnología y operación en un mismo proceso.",
      capabilities: [
        "Cultural strategy",
        "Community",
        "Technology",
        "Operations",
      ],
      process: ["Idea", "Open call", "Artist", "Jury", "Development", "Production"],
      closing:
        "Un solo equipo acompaña la convocatoria desde la idea hasta su materialización.",
    } satisfies BandadasValueContent,
  },
  roadmap: {
    status: contentStatuses.proposed,
    data: [
      { period: "November 2026", focus: "Concept", description: "Definición del premio, alcance y posibles alianzas." },
      { period: "December / January", focus: "Preparation", description: "Bases, plataforma, identidad y estrategia de lanzamiento." },
      { period: "February 2027", focus: "Open call", description: "Lanzamiento y convocatoria de artistas." },
      { period: "March", focus: "Selection", description: "Evaluación y desarrollo de finalistas." },
      { period: "April", focus: "Winner", description: "Selección y comienzo de producción." },
    ] satisfies ProposedMilestone[],
  },
  closing: {
    status: contentStatuses.proposed,
    data: {
      territory: "The Art of Skin",
      answer: "can become a platform for art.",
      prize: "Premio SKINKO a las Artes",
      year: "2027",
      signature: "SKINKO × BANDADAS",
      invitation: "Let's build it.",
    } satisfies ClosingContent,
  },
} satisfies Record<string, StatusedContent<unknown>>;
