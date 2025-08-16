import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    base: '/',   // ← Ajoute cette ligne
    plugins: [react()],

    // Options du serveur de développement
    server: {
      port: 3042,
      host: '0.0.0.0',
      strictPort: true,
      open: false,
      hmr: {
        protocol: 'ws',
        host: 'localhost',
        port: 3042,
      },
      watch: {
        usePolling: true,
        interval: 100,
        ignored: ['!**/node_modules/your-package-to-watch/**']
      }
    },

    resolve: {
      alias: {
        '@': '/src'
      }
    },

    define: {
      __APP_ENV__: JSON.stringify(mode)
    }
  }
})
