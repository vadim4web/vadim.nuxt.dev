<script setup>
defineProps({
  headKey: {
    type: String,
    required: true,
  },
  textKey: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <div class="flex-col page-header padding-13">
    <h2 class="h2">
      <strong>
        {{ $t(headKey) }}
      </strong>
      <TextHighlight />
    </h2>

    <p class="t2">
      <em>
        {{ $t(textKey) }}
      </em>
    </p>
  </div>
</template>
