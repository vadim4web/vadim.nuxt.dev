<script setup>
defineProps({
  height: String,
})
</script>

<template>
  <strong
    class="arrow-text"
    style="font-weight: 700; text-wrap: nowrap"
    :style="{ height, width: parseInt(height) * 1.5 + 'rem' }"
  >
    ->
  </strong>
</template>
