<script setup>
const { locale, setLocale } = useI18n()

const showOptions = ref(false)
const selectedLanguage = ref(locale.value)
const availableLanguages = ref([
  { code: 'en', flag: '/flags/en.webp', name: 'English' },
  { code: 'uk', flag: '/flags/uk.webp', name: 'Українська' },
])

const sortedLanguages = computed(() => {
  return [...availableLanguages.value].sort(l =>
    l.code === selectedLanguage.value ? -1 : 1,
  )
})

const changeLanguage = (lang) => {
  setLocale(lang) // Змінюємо мову
  selectedLanguage.value = lang
  sessionStorage.setItem('lang', lang)
}

const toggleMenu = () => showOptions.value = !showOptions.value

const closeMenu = () => showOptions.value = false
</script>

<template>
  <div
    class="lang-swither-wrapper flex items-center justify-center relative"
    role="button"
    tabindex="0"
    :title="$t('toggleLangTip')"
  >
    <menu
      v-click-outside="closeMenu"
      class="lang-switcher select flex flex flex-col items-center justify-center overflow-hidden absolute"
      :class="{ open: showOptions, close: !showOptions }"
      @click="toggleMenu"
    >
      <li
        v-for="lang in sortedLanguages"
        :key="lang.code"
        class="select-option relative"
        @click="changeLanguage(lang.code)"
      >
        <img
          :src="lang.flag"
          :alt="lang.name"
          class="select-option-img"
        >
      </li>
    </menu>
  </div>
</template>

<style lang="scss" scoped>
.lang-swither-wrapper {
  width: var(--header-h);
  height: calc(var(--header-h) / 2);

  * {
    cursor: pointer !important;
  }
}

.lang-switcher {
  top: calc(((var(--header-h) / 2) - 7.5vmin) / 2);
}

.select {
  justify-content: space-between;

  &::after {
    content: '';
    z-index: -1;
    top: 0;
    width: 7.5vmin;
    background: #80808080;
    border-radius: 3.75vmin;
  }

  &-option {
    width: 7.5vmin;
    height: 7.5vmin;

    &::after {
      content: '';
      z-index: 1;
      top: 0;
      left: 0;
      width: 7.5vmin;
      height: 7.5vmin;
      border-radius: 3.75vmin;
      box-shadow: inset 0 0 0.5rem 0.166rem #80808080;
      backdrop-filter: saturate(0.8);
    }

    &-img {
      width: 7.5vmin;
      height: 7.5vmin;
      object-fit: cover;
      -webkit-object-fit: cover;
      -moz-object-fit: cover;
      border-radius: 50%;
      filter: contrast(1.05) brightness(1.05);
    }
  }

  &.close,
  &.close::after {
    height: 7.5vmin;
  }

  &.open,
  &.open::after {
    height: 17vmin;
  }
}
</style>
