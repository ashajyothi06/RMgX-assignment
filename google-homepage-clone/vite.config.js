// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/RMgX-assignment/', // 👈 required for GitHub Pages
  plugins: [react()],
})
