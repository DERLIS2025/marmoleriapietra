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
        display: ["var(--font-display)", "Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(26, 26, 26, 0.08)",
        card: "0 12px 35px rgba(26, 26, 26, 0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
