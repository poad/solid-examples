import { defineConfig } from '@farmfe/core';
import solid from 'vite-plugin-solid';

export default defineConfig({
  compilation: {
    persistentCache: true,
  },
  vitePlugins: [
    () => ({
      name: 'solid',
      vitePlugin: solid(),
      filters: ['\\.tsx$', '\\.jsx$'],
    }),
  ],
});
