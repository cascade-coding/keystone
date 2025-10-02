import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],

  base: "/keystone/",

  server: {
    host: true,
    allowedHosts: true
  },
})