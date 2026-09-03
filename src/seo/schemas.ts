export interface WebPageSchemaInput {
  name: string;
  description: string;
  url: string;
}

export function buildWebPageSchema({
  name,
  description,
  url,
}: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url,
    inLanguage: "es-AR",
    isAccessibleForFree: false,
  };
}

export function serializeJsonLd(schema: Record<string, unknown>): string {
  return JSON.stringify(schema).replaceAll("<", "\\u003c");
}

