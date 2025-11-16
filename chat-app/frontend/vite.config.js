import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': 'http://localhost:5000'
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false, // Disable source maps in production
    minify: 'terser', // Minify code
    terserOptions: {
      compress: {
        drop_console: true, // Remove console logs in production
      }
    }
  }
})