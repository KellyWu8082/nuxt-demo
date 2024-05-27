// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss', 'nuxt-chatgpt'],
  typescript: {
    shim: false
  },
  tailwindcss: {
    exposeConfig: true
  },
  chatgpt: {
    apiKey: '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'
  },
})
