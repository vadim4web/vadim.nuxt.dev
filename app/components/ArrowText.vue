<script setup>
defineProps({ height: { type: String, required: true } })
</script>

<template>
  <strong
    class="arrow-text font-bold text-nowrap"
    :style="{ height, width: parseInt(height) * 1.5 + 'rem' }"
  >
    ->
  </strong>
</template>
