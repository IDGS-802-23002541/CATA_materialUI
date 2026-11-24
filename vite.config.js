import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      manifest: {
        name: 'CATASI',
        short_name: 'CATA',
        description: 'Cualidades de mí',
        theme_color: '#e9882d',
        background_color: '#ffffff',
        display: 'standalone', // se abre como app, sin la barra del navegador
        start_url: '/',
        icons: [
          {
            src: 'css-logo-192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'css-logo-512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'css-logo-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable', // version que se adapta a iconos redondos/cuadrados en Android
          },
        ],
      },
      workbox: {
        // Cachea automaticamente todo lo que Vite genera en el build (JS, CSS, HTML, imagenes)
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
    }),
  ],
})
