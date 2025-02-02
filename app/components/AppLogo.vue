<script setup>
const { fontWeight } = defineProps({ fontWeight: String })

const strokeWidth = computed(() =>
  fontWeight === 'bold' ? 'max(0.9vmin, 9px)' : 'max(0.7vmin, 7px)',
)
</script>

<template>
  <svg
    class="logo-svg flex-center"
    viewBox="0 0 500 100"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <filter
        id="shadowActive"
        height="200%"
        width="200%"
        x="-50%"
        y="-50%"
      >
        <feDropShadow
          dx="0"
          dy="0"
          flood-color="currentColor"
          flood-opacity="0.75"
          stdDeviation="2"
        />
      </filter>
    </defs>
    <text
      class="logo-letter"
      x="0"
      y="90"
      :style="{ fontWeight: fontWeight }"
    >
      V
    </text>
    <text
      class="logo-letter"
      x="36"
      y="90"
      :style="{ fontWeight: fontWeight }"
    >
      A
    </text>
    <text
      class="logo-letter"
      x="90"
      y="90"
      :style="{ fontWeight: fontWeight }"
    >
      D
    </text>
    <text
      class="logo-letter"
      x="134"
      y="90"
      :style="{ fontWeight: fontWeight }"
    >
      I
    </text>
    <text
      class="logo-letter"
      x="185"
      y="90"
      :style="{ fontWeight: fontWeight }"
    >
      M
    </text>
    <g
      class="logo-image"
      transform="translate(243, 0)"
      :style="{ strokeWidth: strokeWidth }"
      stroke="currentColor"
    >
      <line
        x1="50"
        y1="96"
        x2="50"
        y2="4"
      />
      <line
        x1="50"
        y1="4"
        x2="4"
        y2="50"
      />
      <line
        x1="4"
        y1="50"
        x2="50"
        y2="50"
      />
      <path d="M 50,4 A 23,23,0,1,1,50,50" fill="none" />
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="none"
      />
    </g>
    <text
      class="logo-letter"
      x="339"
      y="90"
      :style="{ fontWeight: fontWeight }"
    >
      W
    </text>
    <text
      class="logo-letter"
      x="393"
      y="90"
      :style="{ fontWeight: fontWeight }"
    >
      E
    </text>
    <text
      class="logo-letter"
      x="443"
      y="90"
      :style="{ fontWeight: fontWeight }"
    >
      B
    </text>
  </svg>
</template>

<style lang="scss">
.logo-svg {
  height: 3vmin;
  overflow: visible;

  .logo-letter {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
    font-weight: bold;
    fill: var(--color0);
  }

  .logo-image {
    stroke: var(--color0);
  }
}
</style>
