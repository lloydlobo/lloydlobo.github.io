/// <reference types="vitest/config" />
import { getViteConfig } from "astro/config"

export default getViteConfig({
  test: {
    // configured to use node environment for Astro container
    environment: "node",
    // include/exclude patterns if needed, defaults are usually fine
    globals: true,
    setupFiles: ["./src/test/setup.ts"],
    include: ["src/**/*.{test,spec}.{js,ts,tsx}"],
  },
})

// import { resolve } from "path"
//   resolve: {
//     alias: {
//       "@": resolve(__dirname, "./src"),
//     },
//   },
