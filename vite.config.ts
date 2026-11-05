import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Relative base allows seamless deployment on GitHub Pages (<user>.github.io/peer-mohamed-portfolio/)
  // as well as custom domains or preview environments.
  base: './',
  build: {
    outDir: 'dist',
    sourcemap: false,
  },
});
