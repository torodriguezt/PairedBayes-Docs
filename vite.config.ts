import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/PairedBayes-Docs/", // Reemplaza "your-repo-name" con el nombre de tu repositorio
});