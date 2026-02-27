import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite Configuration
 * 
 * Configuration file for Vite build tool and development server.
 * Defines build settings, development server options, and plugin configurations.
 * 
 * @see https://vitejs.dev/config/
 */
export default defineConfig({
  /**
   * Vite plugins configuration
   * @see https://vitejs.dev/plugins/
   */
  plugins: [react()],
  
  /**
   * Development server configuration
   * @see https://vitejs.dev/config/server-options.html
   */
  server: {
    port: 3000,
    host: true
  }
})