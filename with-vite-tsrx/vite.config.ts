import { defineConfig } from 'vite';
import tsrxSolid from '@tsrx/vite-plugin-solid';
import solid from '@solidjs/vite-plugin';

export default defineConfig({
  plugins: [
    tsrxSolid(),
    solid(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
