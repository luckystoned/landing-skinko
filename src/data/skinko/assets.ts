import type { ResponsiveImage } from "@/schemas/skinko";

const srcset = (base: string, widths: number[]) =>
  widths.map((width) => `/images/${base}-${width}.webp ${width}w`).join(", ");

export const skinkoImages = {
  hero: {
    src: "/images/skinko-the-art-of-skin-hero-1600.webp",
    srcset: srcset("skinko-the-art-of-skin-hero", [480, 960, 1600, 2400]),
    sizes: "(max-width: 767px) 75vw, (max-width: 1023px) 50vw, 42vw",
    alt: "Composición conceptual de productos SKINKO junto a una escultura y superficies reflectantes",
    width: 2400,
    height: 3000,
    objectPosition: "50% 48%",
    objectPositionDesktop: "50% 46%",
  },
  livingSculptures: {
    src: "/images/skinko-living-sculptures-1600.webp",
    srcset: srcset("skinko-living-sculptures", [480, 960, 1600, 2400]),
    sizes: "(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 48vw, 31vw",
    alt: "Escultura clásica conceptual sosteniendo un producto SKINKO en una galería",
    width: 2400,
    height: 3000,
    objectPosition: "50% 46%",
    objectPositionDesktop: "50% 43%",
  },
  becomeTheArtist: {
    src: "/images/skinko-become-the-artist-1600.webp",
    srcset: srcset("skinko-become-the-artist", [480, 960, 1600, 2400]),
    sizes: "(max-width: 767px) calc(100vw - 3.5rem), (max-width: 1023px) 48vw, 48vw",
    alt: "Visitante interactuando con una pantalla artística sobre cuidado de la piel",
    width: 2400,
    height: 1350,
    objectPosition: "54% 50%",
    objectPositionDesktop: "52% 50%",
  },
  masterpiece: {
    src: "/images/skinko-the-masterpiece-1600.webp",
    srcset: srcset("skinko-the-masterpiece", [480, 960, 1600, 2400]),
    sizes: "(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 62vw, 40vw",
    alt: "Instalación conceptual de metal reflectante en la arquitectura de Galerías Pacífico",
    width: 2400,
    height: 3000,
    objectPosition: "50% 48%",
    objectPositionDesktop: "50% 44%",
  },
} satisfies Record<string, ResponsiveImage>;

export const gesImages = {
  landing: {
    src: "/images/ges-landing-real-1600.jpg",
    srcset: [480, 960, 1600].map((width) => `/images/ges-landing-real-${width}.jpg ${width}w`).join(", "),
    sizes: "(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 72vw, 55vw",
    alt: "Portada publicada de la landing del Premio GES a las Artes 2026",
    width: 1600,
    height: 778,
    objectPosition: "50% 50%",
    statusLabel: "Case in progress · published landing",
  },
  flow: {
    src: "/images/ges-application-flow-real-1600.jpg",
    srcset: [480, 960, 1600].map((width) => `/images/ges-application-flow-real-${width}.jpg ${width}w`).join(", "),
    sizes: "(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 72vw, 48vw",
    alt: "Formulario publicado para cargar la obra principal y antecedentes del Premio GES",
    width: 1600,
    height: 1553,
    objectPosition: "50% 0%",
    objectPositionDesktop: "50% 0%",
    statusLabel: "Case in progress · real application flow",
  },
  communication: {
    src: "/images/ges-communication-real-1400.jpg",
    srcset: [480, 960, 1400].map((width) => `/images/ges-communication-real-${width}.jpg ${width}w`).join(", "),
    sizes: "(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 60vw, 40vw",
    alt: "Pieza publicada de comunicación de la convocatoria Premio GES a las Artes 2026",
    width: 1118,
    height: 1400,
    objectPosition: "50% 48%",
    objectPositionDesktop: "50% 45%",
    statusLabel: "Case in progress · published communication",
  },
} satisfies Record<string, ResponsiveImage>;
