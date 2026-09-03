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
    summary:
      "GES comenzó como una convocatoria. Detrás hubo estrategia, legales, producto, soporte, comunicación y jurado trabajando como un solo proceso.",
    workstreams: [
      {
        index: "01",
        label: "Strategy",
        details: ["Kickoff", "Alcance", "Requisitos", "Categorías", "Premios", "Fechas", "Metodología"],
      },
      {
        index: "02",
        label: "Platform",
        details: ["STAGE", "PROD", "Formulario", "Campos dinámicos", "Validaciones", "Uploads", "Emails", "QA"],
      },
      {
        index: "03",
        label: "Communication",
        details: ["Identidad", "Landing", "Redes", "FAQ", "Gacetilla", "Difusión", "SEO", "Alianzas"],
      },
      {
        index: "04",
        label: "Artist experience",
        details: ["Soporte", "Guías", "Asistencia", "Revisión", "Preadmisión"],
      },
      {
        index: "05",
        label: "Jury",
        details: ["Búsqueda", "Disponibilidad", "Contratación", "Criterios", "Ranking", "Soporte", "Adendas"],
      },
      {
        index: "06",
        label: "Operations",
        details: ["Cliente", "Kanban", "Responsables", "Dependencias", "Legales", "Cronograma", "Documentación", "Reporting"],
      },
    ],
    verifiedFacts: [
      { value: "3", label: "Jurors coordinated" },
      { value: "20+", label: "Applications reviewed during support" },
      { value: "STAGE → PROD", label: "Deployment flow" },
      { value: "END-TO-END", label: "QA" },
    ],
    evidence: [
      { index: "01", title: "GES landing", ratio: "16:10", caption: "Convocatoria diseñada y desplegada." },
      { index: "02", title: "Application flow", ratio: "4:3", caption: "Formulario, validaciones y flujo de postulación." },
      { index: "03", title: "Communication", ratio: "4:5", caption: "Identidad y sistema de difusión del premio." },
    ],
    progressNote:
      "El proceso de selección continúa en curso. No se presentan todavía resultados finales.",
  },
} satisfies StatusedContent<GesCaseContent>;
