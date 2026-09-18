export const contentStatuses = { confirmed: "CONFIRMED", proposed: "PROPOSED", caseInProgress: "CASE_IN_PROGRESS" } as const;
export type ContentStatus = (typeof contentStatuses)[keyof typeof contentStatuses];
export interface StatusedContent<T> { status: ContentStatus; data: T }
export interface ResponsiveImage { src: string; srcset: string; sizes: string; alt: string; width: number; height: number; objectPosition?: string; objectPositionDesktop?: string; statusLabel?: string }
export interface ArtExperience { index: string; name: string; description: string; ratio: "4:5" | "3:2" | "16:9" }
export interface OpportunityContent { statement: string; description?: string; shifts: Array<{ from: string; to: string }>; value?: string; closing: string }
export interface PrizeConcept { name: string; displayLines: string[]; summary: string; definition: string; principles: string[]; formula: string[]; processSummary: string }
export interface SiteSpecificReason { label: string; description: string }
export interface SiteSpecificContent { reasons: SiteSpecificReason[]; positioning: string; closing: string }
export interface JourneyPhase { phase: number; label: string; description: string }
export interface SystemLayer { index: string; label: string; action: string }
export interface HiddenSystemContent { surface: string; layers: SystemLayer[]; statement: string; closing: string }
export interface Benchmark { name: string; location: string; category: string; whatTheyDid: string; brandValue: string; relevance: string; quantitativeResult?: string; sourceLabel: string; sourceUrl: string }
export interface GesFact { value: string; label: string }
export interface GesEvidence { index: string; title: string; ratio: "1:1" | "2:1" | "4:5" | "4:3" | "16:10"; caption: string; href?: string }
export interface GesCaseContent { name: string; headline: string; summary: string; capabilities: string[]; verifiedFacts: GesFact[]; evidence: GesEvidence[]; progressNote: string; closing: string }
export interface BandadasValueContent { headline: string; statement: string; capabilities: string[]; process: string[]; closing: string }
export interface ProposedMilestone { period: string; focus: string; description: string }
export interface ClosingContent { territory: string; answer: string; prize: string; descriptor: string; signature: string; invitation: string }
