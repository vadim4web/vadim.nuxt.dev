<script setup>
// Масив для збереження категорій
const categories = ref([])

onMounted(async () => {
  // Отримуємо всі підпапки в `pages/blog`, крім `[category]`
  const categoryFiles = import.meta.glob('./*/**.vue')

  categories.value = Array.from(new Set(
    Object.keys(categoryFiles)
      .map(path => path.split('/')[1])
      .filter(category => category !== '[category]')))
})
</script>

<template>
  <main>
    <h2 class="h2 padding-13">Blog</h2>
    <br>
    <ul>
      <li v-for="category in categories" :key="category">
        <nuxt-link :to="`/blog/${category}`" class="h3">{{ category.toUpperCase() }}</nuxt-link>
      </li>
    </ul>
  </main>
</template>
