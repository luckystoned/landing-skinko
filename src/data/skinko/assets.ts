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
    src: "/images/ges-landing-mockup-1600.webp",
    srcset: srcset("ges-landing-mockup", [480, 960, 1600, 1920]),
    sizes: "(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 72vw, 55vw",
    alt: "Mockup conceptual de la landing del Premio GES a las Artes",
    width: 1920,
    height: 1200,
    objectPosition: "50% 46%",
    statusLabel: "Case in progress · conceptual mockup",
  },
  flow: {
    src: "/images/ges-application-flow-mockup-1440.webp",
    srcset: srcset("ges-application-flow-mockup", [480, 960, 1440, 1800]),
    sizes: "(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 72vw, 48vw",
    alt: "Mockup conceptual del flujo de postulación del Premio GES a las Artes",
    width: 1800,
    height: 1350,
    objectPosition: "42% 48%",
    objectPositionDesktop: "46% 48%",
    statusLabel: "Case in progress · conceptual mockup",
  },
  communication: {
    src: "/images/ges-communication-mockup-1600.webp",
    srcset: srcset("ges-communication-mockup", [480, 960, 1600, 2160]),
    sizes: "(max-width: 767px) calc(100vw - 2rem), (max-width: 1023px) 60vw, 40vw",
    alt: "Mockup conceptual de una pieza de comunicación del Premio GES a las Artes",
    width: 2160,
    height: 2700,
    objectPosition: "50% 46%",
    objectPositionDesktop: "50% 42%",
    statusLabel: "Case in progress · conceptual mockup",
  },
} satisfies Record<string, ResponsiveImage>;
