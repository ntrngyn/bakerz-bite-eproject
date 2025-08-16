// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import basicSsl from '@vitejs/plugin-basic-ssl'; // <-- 1. Import plugin

export default defineConfig({
  plugins: [
    react(),
    basicSsl() // <-- 2. Thêm plugin vào mảng plugins
  ],
  server: {
    https: true, // <-- 3. Bật chế độ HTTPS
  }
});
