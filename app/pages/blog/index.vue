<script setup>
import { posts } from '~/assets/data'
</script>

<template>
  <main>
    <h2 class="padding-13">Blog</h2>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <nuxt-link :to="'/blog/' + post.path">
          <strong>{{ post.title }}</strong>
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>
