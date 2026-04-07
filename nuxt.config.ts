import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // ...
  css: ['@/assets/css/tailwind.css','@/assets/css/globals.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
    hmr: false,
  }
  },
  modules: [
    '@vee-validate/nuxt','@nuxt/icon','@pinia/nuxt'
  ],
  veeValidate: {
    autoImports: true,
  },
  pinia: {
    storesDirs: ['./app/stores/**'],
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: 'https://api.housefindyourcurry.tw',
      // apiBase: 'https://hello-world-1-xm5omx4rva-de.a.run.app',
    }
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/smal.png?v=2' },
        { rel: 'apple-touch-icon',type: 'image/png', href: 'https://test.housefindyourcurry.tw/smal.png?v=2' }
      ]
    }
  }
})