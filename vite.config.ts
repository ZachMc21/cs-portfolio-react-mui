import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';
//import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react()],

  // esbuild: {
  //   loader: 'tsx'
  // },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './dist/assets'),
    },
 },
  // optimizeDeps: {
  //   esbuildOptions: {
  //     loader: {
  //       '.js': 'jsx',
  //       '.ts': 'tsx',
  //     }
  //   }
  // },
  assetsInclude: ['*.svg', '*.png', '*.ttf'],
  build: {
    outDir: "dist",
  }
});
