import {
  contentStatuses,
  type ArtExperience,
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
      name: "Premio Skinko a las Artes 2027",
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
      label: "Proposed partnership",
    },
  },
  roadmap: {
    status: contentStatuses.proposed,
    data: [
      { period: "November 2026", focus: "Concept + alliance + bases" },
      { period: "December / January", focus: "Preparation" },
      { period: "February", focus: "Open call" },
      { period: "March", focus: "Selection + finalists" },
      { period: "April", focus: "Winner + development" },
    ] satisfies ProposedMilestone[],
  },
} satisfies Record<string, StatusedContent<unknown>>;
