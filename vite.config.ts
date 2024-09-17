import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'pathe';
import path from "path";
const pathSrc = resolve(__dirname, './src');

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: true,
    https: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "${pathSrc}/assets/style.scss";
        `,
      },
    },
  },
});
