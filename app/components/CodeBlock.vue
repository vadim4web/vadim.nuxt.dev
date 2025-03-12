<script setup>
import { computed } from 'vue'

const { lang, code } = defineProps({
  lang: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  },
})

const options = {
  automaticLayout: true,
  readOnly: true,
  scrollBeyondLastLine: false,
  scrollbar: {
    vertical: 'hidden',
    horizontal: 'hidden',
  },
  minimap: {
    enabled: false,
  },
}

const computedHeight = computed(() => `${code.split('\n').length * 1.25}rem`)
</script>

<template>
  <MonacoEditor
    :model-value="code"
    :lang
    :options="options"
    style="filter: invert(var(--is-dark));"
    :style="{ height: computedHeight }"
  />
</template>

<style lang="scss">
.decorationsOverviewRuler,
.scrollbar {
  display: none !important;
}

.view-lines,
.margin-view-overlays {
  overflow: hidden !important;
  max-height: 100%;
}
</style>
