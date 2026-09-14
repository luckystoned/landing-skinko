import { contentStatuses, type ArtExperience, type BandadasValueContent, type ClosingContent, type HiddenSystemContent, type JourneyPhase, type OpportunityContent, type PrizeConcept, type ProposedMilestone, type SiteSpecificContent, type StatusedContent } from "@/schemas/skinko";

export const proposal = {
  brandTerritory: { status: contentStatuses.confirmed, data: { name: "SKINKO — THE ART OF SKIN", statement: "Beauty becomes art.", signature: "SKINKO × BANDADAS", question: "What if the next artwork was created for SKINKO?" } },
  artExperiences: { status: contentStatuses.confirmed, data: [
    { index: "01", name: "The Living Sculptures", description: "Skincare presentado como una pieza de museo.", ratio: "4:5" },
    { index: "02", name: "Become the Artist", description: "La audiencia deja de mirar y pasa a participar.", ratio: "3:2" },
    { index: "03", name: "The Masterpiece", description: "La arquitectura convierte al visitante en parte de la obra.", ratio: "4:5" },
  ] satisfies ArtExperience[] },
  opportunity: { status: contentStatuses.proposed, data: {
    statement: "The Art of Skin was an activation. What if the next step was made to stay?",
    shifts: [{ from: "Activation", to: "Artwork" }, { from: "Temporary", to: "Site-specific" }, { from: "Event", to: "Place" }],
    closing: "No se trata de extender una campaña. Se trata de crear una obra que pertenezca a un lugar de SKINKO.",
  } satisfies OpportunityContent },
  prize: { status: contentStatuses.proposed, data: {
    name: "Premio SKINKO a las Artes 2027", displayLines: ["Premio", "SKINKO", "a las Artes", "2027"],
    summary: "Una convocatoria para seleccionar una obra site-specific concebida especialmente para uno de los espacios de SKINKO.",
    definition: "Una obra site-specific no se diseña primero para después encontrarle un lugar. Se concibe desde el inicio para un espacio determinado.",
    principles: ["Arquitectura", "Materiales", "Luz", "Circulación", "Público", "Identidad"], formula: ["SKINKO", "ARTIST", "PLACE"],
    processSummary: "Bandadas convoca artistas a partir de un brief y un local real. Un jurado selecciona finalistas, las propuestas se desarrollan y la obra ganadora se produce e instala en el lugar para el que fue concebida.",
  } satisfies PrizeConcept },
  siteSpecific: { status: contentStatuses.proposed, data: {
    reasons: [
      { label: "Place", description: "La obra nace de una arquitectura, sus materiales, su luz y su circulación." },
      { label: "Belonging", description: "No podría trasladarse sin perder una parte central de su significado." },
      { label: "Identity", description: "Hace que el espacio sea menos intercambiable y más reconocible." },
      { label: "Longevity", description: "Puede seguir generando conversación, contenido y experiencia después de la campaña." },
      { label: "Community", description: "Conecta a la marca con artistas, jurados, instituciones y nuevos públicos." },
    ],
    positioning: "En beauty, productos, tendencias y rutinas pueden compartirse. Un vínculo cultural construido por la marca es más difícil de replicar.",
    closing: "No compramos una obra para colgarla. Invitamos a un artista a interpretar un lugar de SKINKO.",
  } satisfies SiteSpecificContent },
  journey: { status: contentStatuses.proposed, data: [
    { phase: 1, label: "Open call", description: "Convocatoria a artistas a partir de un espacio y un brief concretos." },
    { phase: 2, label: "Selection", description: "Evaluación inicial de las propuestas recibidas." },
    { phase: 3, label: "Finalists", description: "Selección propuesta de hasta cinco proyectos finalistas." },
    { phase: 4, label: "Development", description: "Profundización de la relación con el espacio, materialidad, factibilidad, presupuesto y montaje." },
    { phase: 5, label: "Winner", description: "Selección de la obra ganadora por el jurado." },
    { phase: 6, label: "Production", description: "Desarrollo técnico junto a SKINKO, Bandadas y productora." },
    { phase: 7, label: "Installation", description: "Producción e instalación en el espacio para el cual fue concebida." },
  ] satisfies JourneyPhase[] },
  hiddenSystem: { status: contentStatuses.confirmed, data: {
    surface: "An open call", layers: [
      { index: "01", label: "Strategy", action: "Define el marco" }, { index: "02", label: "Legal", action: "Protege el proceso" },
      { index: "03", label: "Technology", action: "Sostiene el flujo" }, { index: "04", label: "Communication", action: "Activa la convocatoria" },
      { index: "05", label: "Artists", action: "Ordena la experiencia" }, { index: "06", label: "Support", action: "Acompaña cada caso" },
      { index: "07", label: "Jury", action: "Coordina especialistas" }, { index: "08", label: "Evaluation", action: "Estructura criterios" },
      { index: "09", label: "Production", action: "Materializa la obra" }, { index: "10", label: "Reporting", action: "Documenta decisiones" },
    ], statement: "What looks like an open call is actually an operating system.", closing: "Bandadas operates every layer.",
  } satisfies HiddenSystemContent },
  bandadasValue: { status: contentStatuses.confirmed, data: {
    headline: "One partner. The whole process.",
    statement: "Bandadas reúne estrategia cultural, comunidad, tecnología y operación en un mismo proceso.",
    capabilities: ["Cultural strategy", "Community", "Technology", "Operations"],
    process: ["Idea", "Open call", "Artist", "Jury", "Development", "Production"],
    closing: "Un solo equipo acompaña la convocatoria desde la idea hasta su materialización.",
  } satisfies BandadasValueContent },
  roadmap: { status: contentStatuses.proposed, data: [
    { period: "November 2026", focus: "Concept + space + brief", description: "Definición del local, alcance y criterios del premio." },
    { period: "December / January", focus: "Bases + platform", description: "Bases, plataforma y preparación del lanzamiento." },
    { period: "February 2027", focus: "Open call", description: "Lanzamiento y convocatoria de artistas." },
    { period: "March", focus: "Finalists + development", description: "Selección y desarrollo de finalistas." },
    { period: "April", focus: "Winner + production", description: "Selección de la obra e inicio de producción." },
  ] satisfies ProposedMilestone[] },
  closing: { status: contentStatuses.proposed, data: { territory: "From The Art of Skin", answer: "to an artwork made for SKINKO.", prize: "Premio SKINKO a las Artes 2027", descriptor: "A site-specific art prize.", signature: "SKINKO × BANDADAS", invitation: "Let's build it." } satisfies ClosingContent },
} satisfies Record<string, StatusedContent<unknown>>;
