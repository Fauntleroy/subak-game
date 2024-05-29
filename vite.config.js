import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'docs',
    lib: {
      entry: 'src/index.tsx',
      name: 'SubakGame',
      fileName: 'subak-game'
    }
  }
});
