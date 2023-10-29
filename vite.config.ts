import {VitePWA} from 'vite-plugin-pwa'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES
    ? "/myRecords/"
    : "./",
  plugins: [
    react(),
    VitePWA({
      injectRegister: 'auto',
      includeAssets:[
        'offline.html',
        'favicon.svg',
        'favicon.ico',
        'rebots.txt',
        'apple-touch-icon.png',
      ],
      manifest: {
        "theme_color": "#f69435",
        "background_color": "#f69435",
        "display": "standalone",
        "scope": "https://ihgs.github.io/myRecords/",
        "start_url": ".",
        "name": "myRecords",
        "short_name": "myRecords",
        "icons": [
            {
                "src": "/myRecords/icon-192x192.png",
                "sizes": "192x192",
                "type": "image/png"
            },
            {
                "src": "/myRecords/icon-256x256.png",
                "sizes": "256x256",
                "type": "image/png"
            },
            {
                "src": "/myRecords/icon-384x384.png",
                "sizes": "384x384",
                "type": "image/png"
            },
            {
                "src": "/myRecords/icon-512x512.png",
                "sizes": "512x512",
                "type": "image/png"
            }
        ]
      }
    })
  ],
})
