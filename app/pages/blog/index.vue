<script setup>
const { data: posts } = await useAsyncData('blog', () => {
  return queryContent('blog')
    .only(['_path', 'date']) // Отримуємо тільки шлях і дату
    .sort({ date: -1 }) // Сортуємо за датою (від нових до старих)
    .find()
})
</script>

<template>
  <main>
    <h1 class="padding-13">Blog</h1>
    <ul>
      <li v-for="post in posts" :key="post._path">
        <nuxt-link :to="post._path">
          <strong>{{ post._path.replace('/blog/', '') }}</strong>
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>
