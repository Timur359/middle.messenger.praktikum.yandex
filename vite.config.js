import { defineConfig } from "vite"

import handlebars from "./src/utils/vite-plugin-handlebars-precompile"

export default defineConfig({
  server: {
    host: "localhost",
    port: 3000,
  },
  plugins: [handlebars()],
  build: {
    emptyOutDir: true,
  },
})
