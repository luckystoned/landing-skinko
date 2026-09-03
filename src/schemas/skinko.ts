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

export interface JourneyPhase {
  phase: number;
  label: string;
}

export interface ProposedMilestone {
  period: string;
  focus: string;
}

