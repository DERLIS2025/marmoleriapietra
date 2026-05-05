import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        pietra: {
          green: "#5a7c6c",
          beige: "#c4b5a0",
          black: "#1a1a1a",
          warm: "#f5f5f0",
          soft: "#eeeeea",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "ui-sans-serif", "system-ui"],
        display: ["var(--font-display)", "Playfair Display", "serif"],
      },
      boxShadow: {
        soft: "0 24px 70px rgba(26, 26, 26, 0.08)",
      },
    },
  },
  plugins: [],
};

export default config;
