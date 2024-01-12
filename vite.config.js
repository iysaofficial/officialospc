import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: ['react-bootstrap/Nav','react-bootstrap/NavDropdown'], // Tambahkan modul yang perlu di-externalize di sini
    },
  },
});
