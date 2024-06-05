import * as esbuild from 'esbuild';

await esbuild.build({
  bundle: true,
  entryPoints: ['src/index.ts'],
  bundle: true,
  outdir: 'docs',
  platform: 'neutral'
});
