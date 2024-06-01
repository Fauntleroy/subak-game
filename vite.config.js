import { defineConfig } from 'vite';
import vitePluginReact from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    outDir: 'docs',
    lib: {
      entry: 'src/index.ts',
      name: 'SubakGame',
      fileName: (format) => `subak-game.${format}.js`
    }
  },
  rollupOptions: {
    external: ['react', 'react-dom'],
    output: {
      globals: {
        react: 'React'
      }
    }
  },
  plugins: [vitePluginReact()]
});
