import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: 'https://nprevost.github.io',
  base: 'cv',
  trailingSlash: 'always',
  vite: {
    plugins: [tailwindcss()],
  },
});
