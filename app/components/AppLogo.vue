<script setup>
const { fontWeight } = defineProps({ fontWeight: { type: String, required: true } })

const strokeWidth = computed(() =>
  fontWeight === 'bold' ? '10px' : '7px',
)
</script>

<template>
  <svg
    class="logo-svg flex items-center justify-center overflow-visible h-[3vmin]"
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
          flood-opacity="0.66"
          stdDeviation="4"
        />
      </filter>
    </defs>
    <text
      class="logo-letter flex items-center justify-center text-[100px] fill-current"
      x="0"
      y="90"
      :style="{ fontWeight }"
    >
      V
    </text>
    <text
      class="logo-letter flex items-center justify-center text-[100px] fill-current"
      x="36"
      y="90"
      :style="{ fontWeight }"
    >
      A
    </text>
    <text
      class="logo-letter flex items-center justify-center text-[100px] fill-current"
      x="90"
      y="90"
      :style="{ fontWeight }"
    >
      D
    </text>
    <text
      class="logo-letter flex items-center justify-center text-[100px] fill-current"
      x="134"
      y="90"
      :style="{ fontWeight }"
    >
      I
    </text>
    <text
      class="logo-letter flex items-center justify-center text-[100px] fill-current"
      x="185"
      y="90"
      :style="{ fontWeight }"
    >
      M
    </text>
    <g
      class="logo-image stroke-current"
      transform="translate(243, 0)"
      :style="{ strokeWidth }"
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
      class="logo-letter flex items-center justify-center text-[100px] fill-current"
      x="339"
      y="90"
      :style="{ fontWeight }"
    >
      W
    </text>
    <text
      class="logo-letter flex items-center justify-center text-[100px] fill-current"
      x="393"
      y="90"
      :style="{ fontWeight }"
    >
      E
    </text>
    <text
      class="logo-letter flex items-center justify-center text-[100px] fill-current"
      x="443"
      y="90"
      :style="{ fontWeight }"
    >
      B
    </text>
  </svg>
</template>
