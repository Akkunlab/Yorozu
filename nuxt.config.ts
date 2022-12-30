// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // publicRuntimeConfig: {
  // },
  // privateRuntimeConfig: {
  // },
  css: ["vuetify/lib/styles/main.sass"],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1.0'
    }
  }
})
