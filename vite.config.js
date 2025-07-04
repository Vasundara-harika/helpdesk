import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ Clean config for Vercel
export default defineConfig({
  plugins: [react()]
})
