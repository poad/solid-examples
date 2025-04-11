/// <reference types="vitest" />
import solid from "vite-plugin-solid";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [solid()],
  resolve: {
    conditions: ["development", "browser"],
    preserveSymlinks: true,
  },
  test: {
    coverage: {
      reporter: ['text', 'json-summary', 'json', 'html', 'cobertura'],
      reportOnFailure: true,
    }
  },
});
