// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,

  modules: [
    // ...
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon',

  ],

  css: ['~/assets/css/main.css'],
  srcDir: "src",
  postcss: {

    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
    
  },


  app:{
    head: {
      title: 'demo',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
            hid: 'description',
            name: 'description',
            content: 'my website description'
        }
    ],
    },
  },




})
