/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,md,mdx,ts}"],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        paper: "#F7F6F2",
        silver: "#C8C9CB",
        chrome: "#8B8E92",
      },
      fontFamily: {
        sans: ["Arial", "Helvetica Neue", "ui-sans-serif", "sans-serif"],
        serif: ["Times New Roman", "ui-serif", "serif"],
      },
      maxWidth: {
        content: "80rem",
        reading: "60rem",
      },
    },
  },
  plugins: [],
};
