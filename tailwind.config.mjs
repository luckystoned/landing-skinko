/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,md,mdx,ts}"],
  theme: {
    extend: {
      colors: {
        canvas: "var(--color-bg-primary)",
        surface: "var(--color-bg-secondary)",
        ink: "var(--color-fg-primary)",
        muted: "var(--color-fg-muted)",
        line: "var(--color-border)",
        metal: "var(--color-metal)",
        accent: "var(--color-accent)",
        "on-dark": "var(--color-on-dark)",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        editorial: ["var(--font-editorial)"],
        body: ["var(--font-body)"],
        utility: ["var(--font-utility)"],
      },
      fontSize: {
        "display-xl": ["var(--text-display-xl)", { lineHeight: "0.86", letterSpacing: "-0.045em" }],
        "display-lg": ["var(--text-display-lg)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        h1: ["var(--text-h1)", { lineHeight: "0.94", letterSpacing: "-0.035em" }],
        h2: ["var(--text-h2)", { lineHeight: "0.98", letterSpacing: "-0.025em" }],
        h3: ["var(--text-h3)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "body-lg": ["var(--text-body-lg)", { lineHeight: "1.5" }],
        body: ["var(--text-body)", { lineHeight: "1.55" }],
        caption: ["var(--text-caption)", { lineHeight: "1.4" }],
        eyebrow: ["var(--text-eyebrow)", { lineHeight: "1.2", letterSpacing: "0.1em" }],
      },
      maxWidth: {
        content: "90rem",
        reading: "42rem",
      },
      spacing: {
        gutter: "var(--space-gutter)",
        section: "var(--space-section)",
        "section-compact": "var(--space-section-compact)",
        content: "var(--space-content)",
      },
      screens: {
        wide: "100rem",
      },
    },
  },
  plugins: [],
};
