import { defineNuxtConfig } from 'nuxt/config';
import { fileURLToPath } from 'node:url';

const b24IconsVueDist = fileURLToPath(new URL('./node_modules/@bitrix24/b24icons-vue/dist', import.meta.url)).replace(/\\/g, '/');

export default defineNuxtConfig({
  compatibilityDate: '2026-05-25',
  ignore: [
    'sla-app/**',
    'src/**',
    'dist/**',
    '.angular/**',
    '.cache/**'
  ],
  modules: ['@bitrix24/b24ui-nuxt'],
  css: ['~/assets/css/main.css'],
  ssr: true,
  b24ui: {
    colorMode: true,
    experimental: {
      componentDetection: true
    }
  },
  routeRules: {
    '/api/**': {
      headers: {
        'cache-control': 'no-store'
      }
    }
  },
  vite: {
    resolve: {
      alias: [
        {
          find: /^@bitrix24\/b24icons-vue\/([^/]+)\/(.+)$/,
          replacement: `${b24IconsVueDist}/$1/esm/$2.js`
        }
      ]
    }
  },
  app: {
    head: {
      title: 'Русский Экспресс | Ассистент менеджера',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
} as any);
