import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";

const here = fileURLToPath(new URL(".", import.meta.url));

export default defineConfig({
  root: here,
  base: "/welcome/",
  build: {
    outDir: fileURLToPath(new URL("../welcome-build/", import.meta.url)),
    emptyOutDir: true,
    sourcemap: false,
  },
});
