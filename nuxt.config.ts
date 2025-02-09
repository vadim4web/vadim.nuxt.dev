// https://nuxt.com/docs/api/configuration/nuxt-config
const isProd = process.env.NODE_ENV === 'production'

export default defineNuxtConfig({
  // https://nuxt.com/modules
  modules: [
    '@nuxthub/core',
    '@nuxt/eslint',
    '@nuxtjs/color-mode',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    'dayjs-nuxt',
    '@nuxtjs/supabase',
  ],

  plugins: [
    '~/plugins/clickOutside.client.js',
  ],
  ssr: isProd,

  // https://devtools.nuxt.com
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  // Env variables - https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens
  runtimeConfig: {
    public: {
      // Can be overridden by NUXT_PUBLIC_HELLO_TEXT environment variable
      // helloText: 'Hello from the Edge 👋',
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailjsUserKey: process.env.NUXT_PUBLIC_EMAILJS_USER_KEY,
    },
  },
  // https://nuxt.com/docs/getting-started/upgrade#testing-nuxt-4
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2024-07-30',

  // https://hub.nuxt.com/docs/getting-started/installation#options
  hub: {
    blob: isProd,
    cache: isProd,
  },

  // auth: {
  //   baseURL: `http://localhost:3000`,
  // },

  dayjs: {
    plugins: ['duration'],
  },

  // https://eslint.nuxt.com
  eslint: {
    config: {
      stylistic: {
        quotes: 'single',
      },
    },
  },

  i18n: {
    vueI18n: './i18n.config.ts',
  },

  supabase: {
    // Options
    redirectOptions: {
      login: '/signin',
      callback: '/confirm',
      include: undefined,
      exclude: [],
      cookieRedirect: false,
    },
  },

})
