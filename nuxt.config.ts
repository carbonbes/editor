import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  css: ['~/assets/css/tailwind.css', '~/assets/css/main.sass'],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: [
    '@nuxt/test-utils/module',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@vueuse/nuxt',
    '@nuxt/scripts',
  ],

  fonts: {
    families: [{ name: 'Inter', provider: 'google' }],
  },

  icon: {
    mode: 'svg',
    customCollections: [
      {
        prefix: 'local',
        dir: './assets/icons',
      },
    ],
  },
})
