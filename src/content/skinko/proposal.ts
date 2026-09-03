import {
  contentStatuses,
  type JourneyPhase,
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
    },
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
        "Una convocatoria para que artistas interpreten el universo Skinko.",
    },
  },
  possibilities: {
    status: contentStatuses.proposed,
    data: [
      "Store",
      "Installation",
      "Packaging",
      "Product",
      "Limited edition",
      "Content",
      "Digital",
      "Experience",
    ],
  },
  journey: {
    status: contentStatuses.proposed,
    data: [
      { phase: 1, label: "Open call" },
      { phase: 2, label: "Selection" },
      { phase: 3, label: "5 finalists" },
      { phase: 4, label: "Development" },
      { phase: 5, label: "Winner" },
      { phase: 6, label: "Production" },
      { phase: 7, label: "Activation" },
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

