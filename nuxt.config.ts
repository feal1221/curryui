import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // ...
  css: ['@/assets/css/tailwind.css','@/assets/css/globals.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
    server: {
    hmr: {
      protocol: 'wss',
      clientPort: 443
    },
    allowedHosts: [
        'grilla-estella-noneducationally.ngrok-free.dev' // 報錯訊息中的那個網址
      ]
  }
  },
  modules: [
    '@vee-validate/nuxt','@nuxt/icon'
  ],
  veeValidate: {
    autoImports: true,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  devServer: {
    allowedHosts: ['.ngrok-free.app'] 
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/png', href: '/smallLogo.png' }
      ]
    }
  }
})