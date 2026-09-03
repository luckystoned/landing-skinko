export interface PageMetadata {
  title: string;
  description: string;
  canonicalPath: string;
  ogType: "website" | "article";
  twitterCard: "summary" | "summary_large_image";
}

export const homeMetadata: PageMetadata = {
  title: "Premio SKINKO a las Artes 2027 | Propuesta de Bandadas",
  description:
    "Presentación comercial privada de Bandadas para convertir The Art of Skin en una plataforma cultural.",
  canonicalPath: "/",
  ogType: "website",
  twitterCard: "summary",
};
