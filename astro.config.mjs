import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://eldion-astro-priv.vercel.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
