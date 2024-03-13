/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';

import { getPlugins } from './utils/vite';

const rootDir = resolve(__dirname);
const srcDir = resolve(rootDir, 'src');
const pagesDir = resolve(srcDir, 'pages');

const isDev = process.env.__DEV__ === 'true';
const isProduction = !isDev;

export default defineConfig({
   resolve: {
      alias: {
         '@root': rootDir,
         '@src': srcDir,
         '@assets': resolve(srcDir, 'assets'),
         '@pages': pagesDir,
      },
   },
   plugins: [...getPlugins(isDev), react()],
   publicDir: resolve(rootDir, 'public'),
   build: {
      outDir: resolve(rootDir, 'dist'),
      /** Can slow down build speed. */
      // sourcemap: isDev,
      minify: isProduction,
      modulePreload: false,
      reportCompressedSize: isProduction,
      emptyOutDir: !isDev,
      rollupOptions: {
         input: {
            content: resolve(pagesDir, 'content', 'index.ts'),
            popup: resolve(pagesDir, 'popup', 'index.html'),
            settings: resolve(pagesDir, 'settings', 'index.html'),
            background: resolve(pagesDir, 'background', 'index.ts'),
         },
         output: {
            entryFileNames: 'src/pages/[name]/index.js',
            chunkFileNames: isDev ? 'assets/js/[name].js' : 'assets/js/chunk.[hash].js',
            assetFileNames: `assets/[ext]/[name].[ext]`,
         },
         onwarn(warning, warn) {
            if (
               warning.code === 'MODULE_LEVEL_DIRECTIVE' &&
               warning.message.includes(`"use client"`)
            ) {
               return;
            }
            warn(warning);
         },
      },
   },
   test: {
      globals: true,
      environment: 'jsdom',
      include: ['**/*.test.ts', '**/*.test.tsx'],
      setupFiles: './test-utils/vitest.setup.js',
   },
});
