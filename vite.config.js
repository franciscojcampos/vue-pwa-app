import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/vue-pwa-app/",
  plugins: [
    vue(),
    VitePWA({
      mode: "development",
      base: "/vue-pwa-app/",
      srcDir: "src",
      filename: "sw.ts",
      includeAssets: ["/public/favicon.svg"],
      strategies: "injectManifest",
      registerType: "autoUpdate",
      injectRegister: "auto",

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "vue pwa app",
        shortName: "vue pwa app",
        startUrl: "/",
        display: "fullscreen",
        backgroundColor: "#ff00ff",
        lang: "en",
        scope: "/",
        description: "PWA Vue Application",
        themeColor: "#ff00ff",
        icons: [
          { src: "favicon.svg", sizes: "64x64", type: "image/svg+xml" },
          { src: "favicon.svg", sizes: "192x192", type: "image/svg+xml" },
          { src: "favicon.svg", sizes: "512x512", type: "image/svg+xml" },
          {
            src: "favicon.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "maskable",
          },
        ],
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: false,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
});
