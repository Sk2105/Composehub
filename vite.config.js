import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "",
  plugins: [react()],
  build: {
    outDir: "dist",
    output: {
      manualChunks(id) {
        if (id.includes("node_modules")) {
          return "vendor"; // bundle all third-party modules into a single chunk
        }
        if (id.includes("src/modules")) {
          return "modules"; // create a specific chunk for your modules
        }
      },
    },
    chunkSizeWarningLimit: 5000,
  },
});
