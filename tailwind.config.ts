import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F9F9F9",
        foreground: "var(--foreground)",
        primary: "var(--color-primary)",
        primaryLight: "var(--color-primary-light)",
        primaryHover: "var(--color-primary-hover)",
        discard: "var(--color-discard)",
        discardHover: "var(--color-discard-hover)",
        secondary: "var(--color-secondary)",
        secondaryHover: "var(--color-secondary-hover)",
        headlines: "var(--color-headlines)",
        subtitle: "var(--color-subtitle)",
        info: "var(--color-info)",
        navItem: "#8E8B8B",
        navActive: "var(--color-primary)",
        error: "var(--color-error)",
        border: "var(--color-border)",
      },
      fontFamily: {
        helveticaNeue: ["var(--font-helvetica-neue)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
