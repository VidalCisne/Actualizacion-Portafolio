import { defineConfig } from 'vite';

export default defineConfig({
  base: './',
  build: {
    cssMinify: true,
    minify: 'esbuild',
    cssCodeSplit: false
  }
});
