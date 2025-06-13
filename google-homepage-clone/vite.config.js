// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/google-homepage-clone/', // 👈 required for GitHub Pages
  plugins: [react()],
})
