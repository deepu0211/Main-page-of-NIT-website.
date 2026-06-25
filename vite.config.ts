import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite' // 👈 THIS INTEGRATES TAILWIND WITH VITE

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // 👈 THIS ACTIVATES TAILWIND PROCESSING
  ],
})
