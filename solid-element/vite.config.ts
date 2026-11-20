import solid from "@solidjs/vite-plugin";
import { defineConfig } from "vite";
import babel from "vite-plugin-babel";

export default defineConfig({
  plugins: [
    solid(),
    babel({
      babelConfig: {
        plugins: ["@solidjs/babel-plugin"],
      },
    }),
  ],
});
