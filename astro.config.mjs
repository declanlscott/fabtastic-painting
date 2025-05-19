// @ts-check
import { defineConfig } from "astro/config";
import solidJs from "@astrojs/solid-js";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  integrations: [solidJs(), icon()],
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },
});
