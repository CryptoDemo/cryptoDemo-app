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
        // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {name:"viewport" ,content:"user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, target-densitydpi=device-dpi"},

        {
            hid: 'description',
            name: 'description',
            content: 'my website description'
        }
    ],
    },
  },



})
