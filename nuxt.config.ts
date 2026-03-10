import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  // ...
  css: ['@/assets/css/tailwind.css','@/assets/css/globals.css'],

  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: [
    '@vee-validate/nuxt','@nuxt/icon'
  ],
  veeValidate: {
    autoImports: true,
  },
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true }
})