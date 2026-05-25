export default defineNuxtConfig({
  compatibilityDate: '2026-05-25',
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
      title: 'Русский Экспресс | Реактивация клиентов',
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ]
    }
  }
});
