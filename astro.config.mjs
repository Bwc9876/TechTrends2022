import { defineConfig } from "astro/config";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
    site: "https://bwc9876.github.io",
    base: "/TechTrends2022",
    integrations: [react()]
});
