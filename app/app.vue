<script setup>
import { useLoader } from '~/composables/useLoader'

const { showLoader, setShowLoader } = useLoader()

const colorMode = useColorMode()
const { t, locale } = useI18n()
const router = useRouter()
const route = useRoute()

const themeColor = ref(() => colorMode.value === 'dark' ? '#000000' : '#ffffff')
const themeIcon = ref(() => colorMode.value === 'dark' ? '/favicon_dark.svg' : '/favicon_light.svg')

const { y } = useWindowScroll()
const scrollUp = () => y.value = 0

router.beforeEach((_to, _from, next) => {
  setShowLoader(true)
  next()
})

router.afterEach(() => {
  if (!sessionStorage.getItem('once_loaded')) {
    sessionStorage.setItem('once_loaded', true)
    setTimeout(() => {
      setShowLoader(false)
    }, 3510)
  }
  else {
    setTimeout(() => {
      setShowLoader(false)
    }, 1755)
  }
  scrollUp()
})

const getPageTitle = computed(() => {
  const routeName = route.name

  switch (routeName) {
    case 'index':
      return `VADIM4WEB – ${t('homeH11')}`
    case 'about':
      return `VADIM4WEB | ${t('AboutMe')}`
    case 'projects':
      return `VADIM4WEB | ${t('MyWorks')}`
    case 'project-projectName':
      return `VADIM4WEB | ${route.params.projectName}`
    case 'contact':
      return `VADIM4WEB | ${t('MyContacts')}`
    // case 'blog':
    //   return `VADIM4WEB | ${t('MyBlog')}`
    // case 'blog-postName':
    //   return `VADIM4WEB | ${route.params.postName}`
    default:
      return `VADIM4WEB`
  }
})

useHead({
  htmlAttrs: {
    lang: locale.value,
  },
  title: getPageTitle,
  meta: [
    { name: 'description', content: 'Розробка цифрових рішень для бізнесу. Досконалість у кожній деталі.' },
    { name: 'author', content: 'Червоняк Вадим Вікторович' },
    { name: 'keywords', content: 'цифрові рішення, веброзробка, цифровий маркетинг, Vadim4Web' },
    { name: 'robots', content: 'index, follow' },
    { property: 'og:title', content: 'VADIM4WEB – Розробка цифрових рішень' },
    { property: 'og:description', content: 'Цифрові рішення, які піднімають ваш бізнес на новий рівень.' },
    { property: 'og:image', content: '/logo.png' },
    { property: 'og:url', content: 'https://vadim4web.nuxt.dev' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'VADIM4WEB – Розробка цифрових рішень' },
    { name: 'twitter:description', content: 'Цифрові рішення, які піднімають ваш бізнес на новий рівень.' },
    { name: 'twitter:image', content: '/logo.png' },
    { name: 'msapplication-TileColor', content: themeColor.value },
    { name: 'msapplication-TileImage', content: '/ms-icon-144x144.png' },
    { name: 'theme-color', content: themeColor.value },
  ],
  link: [
    { rel: 'manifest', href: '/manifest.json' },
    { rel: 'icon', id: 'favicon', href: themeIcon, type: 'image/svg+xml' },
    { rel: 'canonical', href: 'https://vadim4web.nuxt.dev' },
    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Victor+Mono:ital,wght@0,400;0,600;0,700;1,400;1,500;1,600;1,700&display=swap',
    },
    { rel: 'apple-touch-icon', sizes: '57x57', href: '/apple-icon-57x57.png' },
    { rel: 'apple-touch-icon', sizes: '60x60', href: '/apple-icon-60x60.png' },
    { rel: 'apple-touch-icon', sizes: '72x72', href: '/apple-icon-72x72.png' },
    { rel: 'apple-touch-icon', sizes: '76x76', href: '/apple-icon-76x76.png' },
    { rel: 'apple-touch-icon', sizes: '114x114', href: '/apple-icon-114x114.png' },
    { rel: 'apple-touch-icon', sizes: '120x120', href: '/apple-icon-120x120.png' },
    { rel: 'apple-touch-icon', sizes: '144x144', href: '/apple-icon-144x144.png' },
    { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-icon-152x152.png' },
    { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-icon-180x180.png' },
    { rel: 'icon', type: 'image/png', sizes: '192x192', href: '/android-icon-192x192.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/favicon-96x96.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
  ],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        'name': 'VADIM4WEB',
        'url': 'https://vadim4web.nuxt.dev',
        'description': 'Цифрові рішення для сучасного бізнесу. Досконалість у кожній деталі.',
        'image': '/logo.png',
        'sameAs': [
          'https://linkedin.com/in/vadim4web',
          'https://facebook.com/vadim4web',
          'https://x.com/vadim4web',
        ],
      }),
    },
  ],
})

watch(locale, () => {
  useHead({
    title: getPageTitle,
    htmlAttrs: {
      lang: locale.value,
    },
  })
})

watch(
  () => colorMode.value,
  (newValue) => {
    themeColor.value = newValue === 'dark' ? '#000000' : '#ffffff'
    themeIcon.value = newValue === 'dark' ? '/favicon_dark.svg' : '/favicon_light.svg'

    useHead({
      meta: [{ name: 'theme-color', content: themeColor.value }],
      link: [{ rel: 'icon', href: themeIcon.value }],
    })
  },
  { immediate: true },
)
</script>

<template>
  <h1 style="display: none">
    Червоняк Вадим Вікторович
  </h1>
  <NuxtRouteAnnouncer />
  <NuxtLoadingIndicator />
  <PageLoader v-if="showLoader" />
  <AppHeader />
  <NuxtPage />
  <AppFooter />
</template>
