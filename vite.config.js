import { resolve } from 'path';

import { defineConfig } from 'vite';
import vitePluginDts from 'vite-plugin-dts';
import { libInjectCss as vitePluginLibInjectCss } from 'vite-plugin-lib-inject-css';
import vitePluginReact from '@vitejs/plugin-react-swc';

export default defineConfig({
  build: {
    outDir: 'docs',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'SubakGame',
      fileName: (format) => `subak-game.${format}.js`
    }
  },
  rollupOptions: {
    external: ['react', 'react-dom', 'react/jsx-runtime'],
    output: {
      globals: {
        react: 'React',
        'react-dom': 'reactdom'
      }
    }
  },
  plugins: [
    vitePluginReact(),
    vitePluginLibInjectCss(),
    vitePluginDts({ include: ['docs', 'types'] })
  ]
});
