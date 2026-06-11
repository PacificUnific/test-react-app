import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// For GitHub Pages project site "test-react-app" use: base: '/test-react-app/'
// For a custom domain use: base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/test-react-app/',
});
