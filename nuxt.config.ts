// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['nuxt-primevue', '@nuxt/ui', '@nuxtjs/tailwindcss'],
  typescript: {
    shim: false
  },
  primevue: {},
  css: ['primevue/resources/themes/aura-light-green/theme.css'],
  tailwindcss: {
    exposeConfig: true
  },
})
