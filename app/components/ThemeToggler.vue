<script setup>
import { useThemeColor } from '~/composables/useThemeColor'

const { x, y } = useMouse()
const { width, height } = useWindowSize()
const { setThemeColor } = useThemeColor()
const preferredColor = usePreferredColorScheme()
const colorMode = useColorMode()

const offsetX = ref(50)
const offsetY = ref(50)

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    const color = colorMode.preference === 'dark' ? '#ffffff' : '#000000'
    setThemeColor(color)
  },
})

onMounted(() => {
  if (preferredColor === 'dark') setThemeColor('#ffffff')
  else setThemeColor('#000000')
})

onUpdated(() => {
  offsetX.value = (x.value / width.value) * 100 || 50
  offsetY.value = (y.value / height.value) * 100 || 50
})
</script>

<template>
  <button
    class="theme-toggler flex-col-center"
    :title="$t(`toggleTheme${'_' + colorMode.value}`)"
    aria-label="Theme"
    @click="isDark = !isDark"
  >
    <span
      id="spot"
      class="flex-col-center rel"
      :style="{
        background: `radial-gradient(ellipse at ${offsetX}% ${offsetY}%,
          var(--accent1_50) 5%, var(--color0))`,
      }"
    >
      <svg
        v-if="!isDark"
        fill="none"
        height="24"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3 11.5066C3 16.7497 7.25034 21 12.4934 21C16.2209 21 19.4466 18.8518 21 15.7259C12.4934 15.7259 8.27411 11.5066 8.27411 3C5.14821 4.55344 3 7.77915 3 11.5066Z"
          stroke="var(--bg0)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>

      <svg
        v-else
        fill="none"
        height="24"
        stroke-width="1.5"
        viewBox="0 0 24 24"
        width="24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18Z"
          stroke="var(--bg0)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 12L23 12"
          stroke="var(--bg0)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 2V1"
          stroke="var(--bg0)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12 23V22"
          stroke="var(--bg0)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 20L19 19"
          stroke="var(--bg0)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M20 4L19 5"
          stroke="var(--bg0)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 20L5 19"
          stroke="var(--bg0)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4 4L5 5"
          stroke="var(--bg0)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M1 12L2 12"
          stroke="var(--bg0)"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </span>

    <h2 v-show="false">
      {{ width }} {{ height }}<br>
      {{ x }} {{ y }}<br>
      {{ offsetX }} {{ offsetY }}
    </h2>
  </button>
</template>

<style lang="scss" scoped>
.theme-toggler {
  z-index: 1;
  width: 20vmin;
  height: 10vmin;
  background: transparent;
  transition: transform 0.5s;
  cursor: pointer;

  #spot {
    width: 7.5vmin;
    height: 7.5vmin;
    border-radius: 50%;
    color: var(--color0);
    background: radial-gradient(
      ellipse at 0% 0%,
      var(--accent2) 5%,
      var(--color0)
    );

    svg {
      width: 5vmin;
      height: 5vmin;
      align-self: center;
      justify-self: center;
    }

    &::after {
      content: '';
      z-index: -1;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      background: var(--color0);
    }
  }
}
</style>
