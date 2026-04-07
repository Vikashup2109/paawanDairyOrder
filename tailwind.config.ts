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
        primary: {
          DEFAULT: "#683489",
          50: "#f4eef9",
          100: "#e8dcf3",
          200: "#d1b9e7",
          300: "#ba96db",
          400: "#a373cf",
          500: "#8c50c3",
          600: "#683489",
          700: "#52296d",
          800: "#3c1f51",
          900: "#271435",
        },
        accent: {
          DEFAULT: "#91A13A",
          50: "#f5f7ec",
          100: "#ebeed9",
          200: "#d7ddb3",
          300: "#c3cc8d",
          400: "#afbb67",
          500: "#91A13A",
          600: "#74812e",
          700: "#576123",
          800: "#3a4117",
          900: "#1d200c",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      animation: {
        "fade-in": "fadeIn 0.3s ease-in-out",
        "slide-up": "slideUp 0.3s ease-out",
        "bounce-in": "bounceIn 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97)",
        "pulse-ring": "pulseRing 1.5s ease-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceIn: {
          "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
          "40%": { transform: "translateY(-8px)" },
          "60%": { transform: "translateY(-4px)" },
        },
        pulseRing: {
          "0%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(104, 52, 137, 0.4)" },
          "70%": { transform: "scale(1)", boxShadow: "0 0 0 10px rgba(104, 52, 137, 0)" },
          "100%": { transform: "scale(0.95)", boxShadow: "0 0 0 0 rgba(104, 52, 137, 0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
