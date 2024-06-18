// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Hello, Nuxt!",
      meta: [{ name: "description", content: "this is a meta description" }],
    },
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxt/eslint"],
  eslint: {
    config: {
      stylistic: true,
    },
  },
});
