// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: "https://jonmarkdeane.github.io",
  base: "/malue2/",
  output: "static",

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
    },
  ],

  integrations: [mdx()],
});