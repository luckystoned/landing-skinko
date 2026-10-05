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
    "Presentación comercial privada de Bandadas para crear una obra de sitio específico en un espacio de SKINKO.",
  canonicalPath: "/",
  ogType: "website",
  twitterCard: "summary",
};

export const nuevaMetadata: PageMetadata = {
  title: "SKINKO × arte | El próximo capítulo de The Art of Skin",
  description: "Propuesta privada para conectar la identidad de SKINKO, los artistas y su comunidad a través de una primera experiencia artística.",
  canonicalPath: "/nueva/",
  ogType: "website",
  twitterCard: "summary",
};
