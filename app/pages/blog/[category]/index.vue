<script setup>
const route = useRoute()
const category = route.params.category

const posts = ref([])

onMounted(async () => {
  // Завантажуємо всі файли в папці `pages/blog/[category]`
  const allFiles = import.meta.glob('@/pages/blog/*/*.vue')

  // Фільтруємо тільки файли цієї категорії, виключаємо `index.vue`
  posts.value = Object.keys(allFiles)
    .filter(path => path.includes(`/blog/${category}/`) && !path.endsWith('index.vue'))
    .map((path) => {
      const slug = path.split('/').pop().replace('.vue', '') // Отримуємо slug з імені файлу
      return {
        slug,
        title: slug.replace(/-/g, ' '), // Форматуємо заголовок
      }
    })
})
</script>

<template>
  <main>
    <h2 class="h2 padding-13">{{ category.toUpperCase() }}</h2>
    <ul>
      <li v-for="post in posts" :key="post.slug">
        <nuxt-link :to="`/blog/${category}/${post.slug}`" class="h3">{{ post.title }}</nuxt-link>
      </li>
    </ul>
  </main>
</template>
