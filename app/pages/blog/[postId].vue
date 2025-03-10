<script setup>
const { postId } = useRoute().params

const { data } = await useAsyncData(`blog-${postId}`, () => {
  return queryContent('blog').where({ _path: `/blog/${postId}` }).findOne()
})
</script>

<template>
  <div v-if="data">
    <h1>{{ data.title }}</h1>
    <p>Автор: {{ data.author }}</p>
    <p>Дата: {{ data.date }}</p>

    <!-- Відображаємо контент як Markdown -->
    <ContentRenderer :value="data" />
  </div>
</template>
