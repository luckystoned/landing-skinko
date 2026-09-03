import { defineCollection } from "astro:content";

// The directory stores typed TypeScript modules. Declaring it explicitly keeps
// Astro from treating it as an implicit legacy collection.
export const collections = {
  skinko: defineCollection({ type: "content" }),
};
