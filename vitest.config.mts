import { defineConfig } from "vitest/config";
import path from "node:path";

export default defineConfig({
  test: {
    environment: "node",
    include: ["tests/**/*.test.ts"],
  },
  resolve: {
    // Reproduit l'alias `@/*` de tsconfig.json.
    alias: { "@": path.resolve(import.meta.dirname, "./src") },
  },
});
