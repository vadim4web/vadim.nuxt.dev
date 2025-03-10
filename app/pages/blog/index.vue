<script setup>
// const { path } = useRoute()
const { data } = await useAsyncData('blog', () => {
  return queryCollection('hackernews').all()
  // .select('title', 'description', 'path', 'id', 'date')
  // .order('date', 'DESC')
})
onMounted(() => console.log(data))
</script>

<template>
  <main>
    <h1 class="padding-13">Blog</h1>
    <p
      v-for="post in data"
      :key="post.id"
    >
      >
      <nuxt-link
        :to="{
          name: 'blog-postId',
          params: { postId: post.id.toString() },
        }"
      >
        <strong>{{ post.title }}</strong>
      </nuxt-link>

      &nbsp;{{ post.description }}
    </p>
  </main>
</template>
