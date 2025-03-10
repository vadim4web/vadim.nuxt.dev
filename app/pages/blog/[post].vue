<script setup>
const { params } = useRoute()

const { data: post } = await useAsyncData(`blog-${params.post}`, () => {
  return queryContent('blog', params.post).findOne()
})
</script>

<template>
  <div v-if="post">
    <h1>{{ post.title || post._path.replace('/blog/', '') }}</h1>
    <p>Дата: {{ post.date }}</p>
    <ContentRenderer :value="post" />
  </div>
</template>
