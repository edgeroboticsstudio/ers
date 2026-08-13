/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ==== ORIGINAL SKY BLUE THEME ====
        primary: {
          DEFAULT: "#0ea5e9", // sky-500
          hover: "#0284c7",   // sky-600
        },
        secondary: "#0f172a", // slate-900
        background: "#0f172a", // slate-900
        surface: "#1e293b",   // slate-800

        /* ==== EMERALD TECH THEME ====
        primary: {
          DEFAULT: "#10b981", // emerald-500
          hover: "#059669",   // emerald-600
        },
        secondary: "#022c22", // emerald-950
        background: "#022c22",
        surface: "#064e3b",   // emerald-900
        ================================== */

        /* ==== NEW CRIMSON FLAME THEME ====
        primary: {
          DEFAULT: "#e11d48", // rose-600
          hover: "#be123c",   // rose-700
        },
        secondary: "#4c0519", // rose-950
        background: "#0f172a", // slate-900 
        surface: "#1f2937",   // gray-800
        ================================== */

        /* ==== CLASSIC FOREST THEME ====
        primary: {
          DEFAULT: "#ff0000",   // Pure Red (for accents and text highlights)
          hover: "#b71c1c",     // Dark Red (for hover states)
        },
        secondary: "#004d40",   // Deep Teal (for cards/surfaces)
        background: "#013220",  // Very Dark Green (for page background)
        surface: "#004d40",     // Deep Teal (for containers)
        ================================== */

        /* ==== NEW SUNSET EMBER THEME ====
        primary: {
          DEFAULT: "#f59e0b", // amber-500
          hover: "#d97706",   // amber-600
        },
        secondary: "#451a03", // orange-950
        background: "#1c1917", // stone-900
        surface: "#292524",   // stone-800
        ================================== */
      },
    },
  },
  plugins: [],
};
