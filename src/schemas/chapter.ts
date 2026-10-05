import type { Benchmark, ContentStatus, ResponsiveImage } from "./skinko";

export interface ChapterItem {
  title: string;
  description: string;
  example?: string;
}

export interface ChapterSection {
  label: string;
  title: string;
  description: string;
  status: ContentStatus;
  statusLabel: string;
}

export interface ChapterContent {
  navigation: { comparison: string; explore: string; meta: string };
  hero: ChapterSection & { brand: string; lines: string[]; question: string; image: ResponsiveImage; caption: string };
  opportunity: ChapterSection & { introduction: string; items: ChapterItem[]; closing: string };
  experience: ChapterSection & { items: ChapterItem[]; openLabel: string; openDecisions: string[]; culture: string };
  journey: ChapterSection & { items: ChapterItem[] };
  references: ChapterSection & { items: Benchmark[]; note: string; sourceLabel: string };
  support: ChapterSection & { roles: ChapterItem[]; caseTitle: string; caseDescription: string; caseNote: string; image: ResponsiveImage; href: string; linkLabel: string };
  nextSteps: ChapterSection & { items: ChapterItem[]; closing: string; signature: string };
}
