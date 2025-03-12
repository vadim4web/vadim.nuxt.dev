<script setup>
const route = useRoute()
const category = route.params.category
const slug = route.params.slug
</script>

<template>
  <main>
    <h2 class="padding-13">Стаття: {{ slug.replace(/-/g, ' ').toUpperCase() }}</h2>
    <p>Категорія: {{ category.toUpperCase() }}</p>
  </main>
</template>
