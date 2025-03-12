<script setup></script>

<template>
  <main class="flex flex-col">
    <PageHeader head-key="aboutH21" text-key="aboutT1" />

    <div class="mission flex flex-col">
      <div class="mission-header">
        <h2 class="h2">
          {{ $t('aboutH221') }}
          <br>
          {{ $t('aboutH222') }}
          <br>
          {{ $t('aboutH223') }}
          <br>
          {{ $t('aboutH224') }}
        </h2>

        <p class="t3 text1">
          {{ $t('aboutT21') }}
        </p>

        <p class="t3 text2">
          {{ $t('aboutT22') }}
        </p>
      </div>

      <div class="photos w-full relative">
        <div class="photo photo1 w-full" />

        <div class="photo photo2 w-full" />
      </div>
    </div>

    <pre class="rhymes text-center">
<span>I've earned my own very first PC</span>
<span>By working summer holidays in 2003</span>
<span>I'm a `web dev <em lang="es">loco</em>` (if you will) code-addict</span>
<span>Devoted to development with JavaScript</span>
<span>I'm experienced enough to exactly know</span>
<span>Using DOCs, AI, Google and Stackoverflow</span>
    </pre>
  </main>
</template>

<style lang="scss" scoped>
.mission-header {
  display: grid;
  grid-gap: 2.2rem;
  padding: 5.5rem 0 6.25rem 1.5rem;

  .h2 {
    min-width: 10ch;
    grid-area: mission;
  }

  @media (orientation: portrait) {
    grid-template-areas:
      'mission text1'
      'text2 text2';
  }

  @media (orientation: landscape) {
    grid-template-areas:
      'mission text1'
      'mission text2';
  }
}

.rhymes {
  padding-bottom: 10rem;

  span {
    display: inline-block;
    width: min(42rem, 75%);
    line-height: 3rem;
    font-size: 1.5rem;
    font-weight: 700;
    font-style: italic;
    text-align-last: justify;
  }
}

.t3 {
  @media (orientation: portrait) {
    font-size: 140%;
  }

  &.text1 {
    grid-area: text1;
  }

  &.text2 {
    grid-area: text2;

    @media (orientation: portrait) {
      min-width: 100%;
    }
  }

  @media (orientation: landscape) {
    font-size: 166%;
  }
}

.photos {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 1.75rem;
  height: 32rem;
  margin-bottom: 10rem;

  &::before,
  &::after {
    content: '';
    z-index: 1;
    border: 0.125rem solid var(--accent0);
  }

  &::before {
    top: 0;
    left: -1.125rem;
    width: 2rem;
    height: 7rem;
    border-radius: 1rem;
  }

  &::after {
    right: 0;
    bottom: -1.875rem;
    width: 11rem;
    height: 3.5rem;
    border-radius: 1.75rem;
  }

  .photo {
    height: 32rem;
    border-radius: 0.5rem;
    background-size: cover;
    background-repeat: no-repeat;
    filter: var(--filter1);

    &:hover {
      filter: var(--filter0);
    }
  }

  &:has(.photo1:hover)::before {
    filter: var(--filter1);
  }

  &:has(.photo2:hover)::after {
    filter: var(--filter1);
  }

  .photo1 {
    background-image: url('@/assets/img/photo1.webp');
    background-position: center;
  }
  .photo2 {
    background-image: url('@/assets/img/photo2.webp');
    background-position: center 65%;
  }
}
</style>
