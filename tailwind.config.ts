import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-dark": "#111111",
        "brand-black": "#0D0D0D",
        "brand-lime": "#B8F23C",
        "brand-orange": "#F4A11B",
        "brand-cream": "#F5F1E8",
        "brand-gray": "#2A2A2A",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        brutal: "6px 6px 0px #0D0D0D",
        "brutal-sm": "4px 4px 0px #0D0D0D",
        "brutal-lg": "8px 8px 0px #0D0D0D",
        "brutal-lime": "6px 6px 0px #B8F23C",
        "brutal-orange": "6px 6px 0px #F4A11B",
        "brutal-hover": "2px 2px 0px #0D0D0D",
        "brutal-white": "6px 6px 0px #F5F1E8",
      },
      borderWidth: {
        "3": "3px",
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "marquee-slow": "marquee 50s linear infinite",
        "fade-up": "fadeUp 0.6s ease forwards",
        "fade-in": "fadeIn 0.5s ease forwards",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
