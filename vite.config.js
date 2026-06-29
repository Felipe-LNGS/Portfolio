import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig(({ mode }) => {
  return {
    base: '/',
    plugins: [react()],

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
        '@': path.resolve(__dirname, './src'),
      },
    },

    define: {
      __APP_ENV__: JSON.stringify(mode)
    }
  }
})
