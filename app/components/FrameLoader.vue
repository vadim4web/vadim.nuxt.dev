<script setup>
defineProps({
  iframeTitle: { type: String, required: true },
  iframeSrc: { type: String, required: true },
  iframeStyle: { type: Object, required: true },
  iframeClass: { type: Object, required: true },
  three: { type: Boolean, required: true },
  scrolling: { type: String, required: true },
})

const isLoaded = ref(false)

const setLoaded = () => setTimeout(() => (isLoaded.value = true), 0)
</script>

<template>
  <iframe
    v-show="isLoaded"
    :class="iframeClass"
    frameborder="0"
    :scrolling="scrolling"
    :src="iframeSrc"
    :style="iframeStyle"
    tabindex="-1"
    :title="iframeTitle"
    @load="setLoaded"
  />

  <LoaderSpinner
    v-if="!isLoaded"
    class="placeholder iframe br1 back-blur05"
    :classes="iframeClass"
    :three="three"
  />
</template>
