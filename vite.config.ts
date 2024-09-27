import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/market/',
  plugins: [react()],
  resolve: {
    alias: {
      public: path.resolve(__dirname, 'public'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString(); // Разделяет модули по пакетам
          }
        }
      }
    }
  }
});

