<script setup lang="ts">
import InteractiveButton from '~/components/InteractiveButton.vue'
import TextHighlight from '~/components/TextHighlight.vue'
import type { NuxtError } from '#app'

const router = useRouter()
const route = useRoute()
const { t } = useI18n()

const goBack = () => {
  router.back()
}

const { error } = defineProps({
  error: Object as () => NuxtError | undefined,
})

const is404 = error?.statusCode === 404
</script>

<template>
  <main class="flex flex flex-col items-center justify-center error-page w-full">
    <h2 class="h2 flex flex flex-col items-center justify-center text-center">
      {{ error?.statusCode }}
      <TextHighlight />

      <div class="p1">
        <template v-if="is404">
          {{ t('notFoundT11') }}<br>
          {{ t('notFoundT12') }}<b>{{ route.path }}</b>{{ t('notFoundT13') }}<br>
          {{ t('notFoundT14') }}<br>
          <hr>
          <hr>
          <i>{{ t('notFoundT15') }}</i>
        </template>

        <template v-else>
          {{ t('errorT11') }}<br>
          {{ t('errorT12') }}<b>{{ route.path }}</b><br>
          <hr>
          <hr>
          <i>{{ t('errorT13') }}</i>
        </template>
      </div>

      <InteractiveButton
        :action="goBack"
        :bg="'var(--bg50)'"
        :border-radius="'4.25rem'"
        class="font-variant go-back"
        :font-size="'2.5rem'"
        :padding="'3rem 5rem'"
      >
        {{ t('notFoundB') }}
      </InteractiveButton>
    </h2>
  </main>
</template>

<style lang="scss" scoped>
.error-page {
  height: 100vh;

  h2 {
    top: -7.5vh;
    font-size: 20rem;

    .text-highlight {
      top: 2rem;
    }

    .p1 {
      line-height: 3.5rem;
      font-size: 3rem;

      b {
        color: var(--bg0);
        background: var(--color0);
      }
    }

    .go-back {
      margin-top: 5rem;
    }
  }
}
</style>
