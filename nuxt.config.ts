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
    '@vee-validate/nuxt','@nuxt/icon','@pinia/nuxt','nuxt-gtag','@nuxt/image'
  ],
  gtag: {
    id: 'G-34V28CKHHS',
    additionalTransports: [
      { id: 'G-08EGQD4R05' } 
    ],
    initCommands: [
      ['config', 'G-34V28CKHHS', { send_page_view: true }],
      ['config', 'G-08EGQD4R05', { send_page_view: true }]
    ]
  },
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
        { rel: 'apple-touch-icon',type: 'image/png', href: 'https://housefindyourcurry.tw/smal.png?v=2' }
      ],
      // script: [
      //   {
      //     src: 'https://www.googletagmanager.com/gtag/js?id=G-34V28CKHHS',
      //     async: true
      //   },
      //   {
      //     children: `
      //       window.dataLayer = window.dataLayer || [];
      //       function gtag(){dataLayer.push(arguments);}
      //       gtag('js', new Date());
      //       gtag('config', 'G-34V28CKHHS');
      //     `,
      //     type: 'text/javascript'
      //   }
      // ]
    }
  }
})