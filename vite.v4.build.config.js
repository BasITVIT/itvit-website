import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/itvit-website/",
  plugins: [
    react(),
    tailwindcss(),
    {
      name: "entry",
      transformIndexHtml: (html) =>
        html.replace("/src/main.jsx", "/src/main-v4.jsx"),
    },
  ],
  build: {
    outDir: "dist",
  },
});
