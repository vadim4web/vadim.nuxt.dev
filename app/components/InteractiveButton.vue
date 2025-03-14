<script setup>
const { path, action, fontSize, padding, borderRadius, bg } = defineProps({
  path: { type: String, required: false },
  action: { type: Function, required: false },
  fontSize: { type: String, required: true },
  padding: { type: String, required: true },
  borderRadius: { type: String, required: true },
  bg: { type: String, required: true },
})

const isLink = !!path
const target = ref(null)
const { elementX, elementY, isOutside } = useMouseInElement(target)
const router = useRouter()

const handleClick = () => {
  if (action) {
    action()
  }
  else if (!action && !isLink) {
    router.go(-1)
  }
}
</script>

<template>
  <NuxtLink
    v-if="isLink"
    ref="target"
    class="interactive-button flex items-center justify-center overflow-hidden relative font-bold leading-none z-1"
    :style="{
      background: !isOutside
        ? `radial-gradient(circle at ${elementX}px ${elementY}px,
          #ffffff, ${bg} 33%)`
        : bg,
      boxShadow: `0 0 1.5rem ${bg}`,
      fontSize,
      padding,
      borderRadius,
    }"
    :to="path"
  >
    <slot />
  </NuxtLink>

  <button
    v-else
    ref="target"
    class="interactive-button flex items-center justify-center overflow-hidden relative font-bold leading-none z-1"
    :style="{
      background: !isOutside
        ? `radial-gradient(circle at ${elementX}px ${elementY}px,
          #ffffff, ${bg} 33%, #808080)`
        : bg,
      boxShadow: `0 0 1.5rem ${bg}`,
      fontSize,
      padding,
      borderRadius,
    }"
    type="submit"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.interactive-button {
  color: var(--color0);
  text-shadow: 0 0 0.5em var(--color-op);
  mix-blend-mode: var(--mix-blend-mode1);

  &:hover,
  &:focus {
    text-shadow: 0 0 0.5em var(--accent0);
    box-shadow: inset 1rem 1rem 1rem #0004;
    mix-blend-mode: var(--mix-blend-mode2);

    &::after {
      box-shadow: inset -1rem -1rem 1rem #fff4;
    }
  }

  &:active {
    text-shadow: 0 0 1rem var(--accent0);
  }

  &::before {
    content: '';
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: inherit;
    box-shadow: inset 1rem 1rem 1rem var(--color125);
  }

  &::after {
    content: '';
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: inherit;
    box-shadow: inset -1rem -1rem 1rem var(--color33);
  }
}
</style>
