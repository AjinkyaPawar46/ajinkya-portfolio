// vite.config.js (ESM — ok because "type": "module" in package.json)
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ajinkya-portfolio/', 
  plugins: [react()]
})