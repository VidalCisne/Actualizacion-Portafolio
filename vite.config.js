import { defineConfig } from 'vite';

export default defineConfig({
  base: '/Actualizacion-Portafolio/',
  build: {
    cssMinify: true,
    minify: 'esbuild',
    cssCodeSplit: false
  }
});
