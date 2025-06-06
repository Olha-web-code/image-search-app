import { defineConfig } from 'vite';

export default defineConfig({
  define: {
    global: 'window', // This tells Vite to replace 'global' with 'window'
  },
});