import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig(({ command }) => ({
  plugins: [tailwindcss(), react()],
  base: "/",

  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (
              id.includes("/react/") ||
              id.includes("/react-dom/")
            ) {
              return "vendor";
            }

            if (id.includes("react-router-dom")) {
              return "router";
            }

            if (id.includes("framer-motion")) {
              return "motion";
            }

            if (
              id.includes("lucide-react") ||
              id.includes("react-icons")
            ) {
              return "icons";
            }
          }
        },
      },
    },

    chunkSizeWarningLimit: 1000,
  },
}));