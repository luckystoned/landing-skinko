import { contentStatuses } from "@/schemas/skinko";

export const gesCase = {
  status: contentStatuses.caseInProgress,
  data: {
    name: "Premio GES a las Artes 2026",
    workstreams: [
      "Strategy",
      "Platform",
      "Communication",
      "Artist Experience",
      "Jury",
      "Operations",
    ],
    verifiedFacts: [
      "3 jurados coordinados",
      "Más de 20 postulaciones revisadas durante soporte",
      "Flujo STAGE → PROD",
      "QA completo",
      "Soporte dedicado",
      "Proceso de selección todavía en curso",
    ],
  },
} as const;

