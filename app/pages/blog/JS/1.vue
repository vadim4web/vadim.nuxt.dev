<script setup></script>

<template>
  <main>
    <h2 class="padding-13 flex justify-start items-center gap-[2rem]">
      <span class="h2">
        JS 1
      </span>

      <InteractiveButton
        :action="$router.goBack"
        :bg="'var(--bg50)'"
        :border-radius="'4.25rem'"
        class="font-variant go-back"
        :font-size="'2rem'"
        :padding="'1rem 2rem'"
      >
        {{ $t('notFoundB') }}
      </InteractiveButton>
    </h2>
  </main>
</template>

<style lang="scss" scoped></style>
