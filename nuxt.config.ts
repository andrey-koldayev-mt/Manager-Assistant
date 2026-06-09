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
    colorMode: false,
    experimental: {
      componentDetection: true
    }
  },
  nitro: {
    ignore: [
      'sla-app/**',
      'src/**',
      'dist/**',
      '.angular/**',
      '.cache/**'
    ],
    routeRules: {
      '/api/**': {
        headers: {
          'cache-control': 'no-store'
        }
      }
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
});
