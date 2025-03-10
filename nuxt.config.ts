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
    '@nuxt/content',
  ],

  plugins: [
    '~/plugins/clickOutside.js',
  ],
  ssr: isProd,

  // https://devtools.nuxt.com
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  colorMode: {
    storage: 'sessionStorage',
  },

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
    strategy: 'no_prefix', // Відключає префікс у роуті (немає /en або /uk)
    locales: [
      {
        code: 'en',
        iso: 'en',
        name: 'English',
      },
      {
        code: 'uk',
        iso: 'uk',
        name: 'Українська',
      },
    ],
    vueI18n: './i18n.config.ts', // Підключаємо конфіг
    lazy: false, // Не підвантажуємо асинхронно
  },
})
