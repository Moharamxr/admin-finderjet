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
        background: "#FFFFFF", // --background
        foreground: "#F5F5F5", // --foreground
        primary: "#055499", // --color-primary
        primaryLight: "#F2F3F7", // --color-primary-light
        primaryHover: "#2872B3", // --color-primary-hover
        discard: "#E6E6E6", // --color-discard
        discardHover: "#DAE6F2", // --color-discard-hover
        secondary: "#FE8A0F", // --color-secondary
        secondaryHover: "#FEA873", // --color-secondary-hover
        headlines: "#1E1E1E", // --color-headlines
        subtitle: "#434343", // --color-subtitle
        info: "#6B6969", // --color-info
        navItem: "#8E8B8B", // Custom value
        navActive: "#055499", // --color-primary
        error: "#D32F2F", // --color-error
        border: "#E6E6E6", // --color-border
        suede: "#6B6969", // --color-info
      },
      fontFamily: {
        helveticaNeue: ["var(--font-helvetica-neue)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
