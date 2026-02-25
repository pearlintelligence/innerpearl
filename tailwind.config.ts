import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        void: "#06060E",
        deep: "#0A0A16",
        midnight: "#0E0E1F",
        dusk: "#151530",
        "pearl-gold": "#C9A87C",
        "gold-light": "#E2CBA5",
        "pearl-glow": "#F5E6D0",
        "pearl-white": "#F0EDE8",
        celestial: "#4A6FA5",
        teal: "#5A8F8F",
        rose: "#8F5A6F",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Cormorant Garamond", "serif"],
        body: ["var(--font-dm-sans)", "DM Sans", "sans-serif"],
      },
      letterSpacing: {
        "pearl": "0.3em",
        "pearl-wide": "0.5em",
      },
      animation: {
        "glow-pulse": "glow-pulse 4s ease-in-out infinite",
        "fade-in": "fade-in 1s ease-out forwards",
        "fade-in-up": "fade-in-up 1s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        "glow-pulse": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-in-up": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
