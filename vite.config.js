import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import { fileURLToPath, URL } from 'url';

// https://vite.dev/config/

export default defineConfig(({mode})=>{
const isProd = mode === 'production'
  return {
      plugins: [react()],
      base: isProd ? '/new-Coffee/' : '/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
  }
})