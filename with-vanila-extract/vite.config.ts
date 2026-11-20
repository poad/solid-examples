import solidPlugin from "@solidjs/vite-plugin";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [solidPlugin(), vanillaExtractPlugin()],
  test: {
    environment: "jsdom",
    globals: true,
    transformMode: {
      web: [/\.[jt]sx?$/],
    },
    setupFiles: "./setupVitest.ts",
    // solid needs to be inline to work around
    // a resolution issue in vitest:
    deps: {
      inline: [/solid-js/],
    },
    // if you have few tests, try commenting one
    // or both out to improve performance:
    threads: false,
    isolate: false,
  },
  build: {
    target: "esnext",
    polyfillModulePreload: false,
  },
  resolve: {
    conditions: ["development", "browser"],
  },
});
