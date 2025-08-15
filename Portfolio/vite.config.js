import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],

    // Options du serveur de développement
    server: {
      port: 3042,   
      host: '0.0.0.0',        // port de dev (par défaut 5173)
      strictPort: true,     // échoue si le port est déjà utilisé
      open: false,           // ouvre automatiquement le navigateur

      // Active le HMR (true par défaut)
      hmr: {
        protocol: 'ws',     // protocole WebSocket
        host: 'localhost',  // nom d’hôte (utile en Docker/VM)
        port: 3042,         // port HMR (même que dev server)
      },

      // Option de watch pour forcer le polling si besoin
      watch: {
        // Utilisez le polling si les fichiers ne sont pas détectés
        usePolling: true,
        // Intervalle en millisecondes
        interval: 100,
        // Ignorer node_modules
        ignored: ['!**/node_modules/your-package-to-watch/**']
      }
    },

    // Configurations additionnelles (exemple : alias)
    resolve: {
      alias: {
        '@': '/src'
      }
    },

    // Si vous avez besoin de configurations différentes selon le mode
    define: {
      __APP_ENV__: JSON.stringify(mode)
    }
  }
})