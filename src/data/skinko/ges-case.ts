import {
  contentStatuses,
  type GesCaseContent,
  type StatusedContent,
} from "@/schemas/skinko";

export const gesCase = {
  status: contentStatuses.caseInProgress,
  data: {
    name: "Premio GES a las Artes 2026",
    headline: "We're already building this.",
    summary: "Bandadas está operando una convocatoria real: plataforma, artistas, soporte, jurado, comunicación y proceso.",
    capabilities: ["Open call", "Platform", "Artists + support", "Jury", "Communication", "Operations"],
    verifiedFacts: [
      { value: "5", label: "Jurors coordinated" },
      { value: "100+", label: "Applications received" },
      { value: "STAGE → PROD", label: "Deployment flow" },
      { value: "END-TO-END", label: "QA" },
    ],
    evidence: [
      { index: "01", title: "GES landing", ratio: "2:1", caption: "Banner oficial de la convocatoria de sitio específico.", href: "https://premio-ges.bandadas.com" },
      { index: "02", title: "Application flow", ratio: "1:1", caption: "Formulario real: identificación de la convocatoria y datos personales." },
      { index: "03", title: "Communication", ratio: "4:5", caption: "Identidad y sistema de difusión del premio." },
    ],
    progressNote:
      "El proceso de selección continúa en curso. No se presentan todavía resultados finales.",
    closing: "One partner. The whole process.",
  },
} satisfies StatusedContent<GesCaseContent>;
