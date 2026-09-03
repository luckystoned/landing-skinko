export const contentStatuses = {
  confirmed: "CONFIRMED",
  proposed: "PROPOSED",
  caseInProgress: "CASE_IN_PROGRESS",
} as const;

export type ContentStatus =
  (typeof contentStatuses)[keyof typeof contentStatuses];

export interface StatusedContent<T> {
  status: ContentStatus;
  data: T;
}

export interface Transformation {
  from: string;
  to: string;
}

export interface ArtExperience {
  index: string;
  name: string;
  description: string;
  ratio: "4:5" | "3:2" | "16:9";
}

export interface PrizeConcept {
  name: string;
  displayLines: string[];
  summary: string;
  development: string;
  disciplines: string[];
  collaborators: string[];
}

export interface ProposedApplication {
  index: string;
  name: string;
  ratio: "1:1" | "3:4" | "4:5" | "16:9";
}

export interface JourneyPhase {
  phase: number;
  label: string;
  description: string;
}

export interface ProposedMilestone {
  period: string;
  focus: string;
}
