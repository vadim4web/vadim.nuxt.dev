<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
import { slides } from '~/assets/data'

const slider = ref()

const setSlideContentGrid = () => {
  const contentElements = document.querySelectorAll('.vueperslide__content')
  contentElements.forEach((element) => {
    element.setAttribute(
      'style',
      `display: grid !important;
        grid-template-columns: repeat(3, 1fr) !important;
          width: 100% !important; transition: none !important;`,
    )
  })
}

onMounted(() => {
  setSlideContentGrid()
  slider.value.goToSlide(3)
})

onUpdated(() => setSlideContentGrid())
</script>

<template>
  <section class="flex-col-center tech-stack-slider">
    <h2 class="h2 text-center">
      {{ $t('homeH23') }}
    </h2>

    <VueperSlides
      ref="slider"
      :arrows-outside="true"
      autoplay
      :bullets="false"
      class="no-shadow w100 rel"
      :fixed-height="true"
    >
      <VueperSlide
        v-for="slide in slides"
        :key="slide.id"
        :content="slide.content"
        :style="'font-size: 3rem'"
        :title="slide[`title_${$i18n.locale}`]"
      />

      <template #pause>
        <i class="icon pause_circle_outline" />
      </template>
    </VueperSlides>
  </section>
</template>

<style lang="scss">
.tech-stack-slider {
  padding: 2rem auto 2rem auto;

  @media (orientation: landscape) {
    & {
      gap: 2rem;
    }
  }

  @media (orientation: portrait) {
    & {
      gap: 2rem;
    }
  }
}

.vueperslides--fixed-height {
  @media (orientation: landscape) {
    & {
      height: 34rem;
    }
  }

  @media (orientation: portrait) {
    & {
      height: 30rem;
    }
  }
}

.vueperslides__arrow {
  color: var(--accent0);
  filter: drop-shadow(0 0 1px var(--accent0));
}

.vueperslide__content {
  display: grid !important;
  grid-template-columns: repeat(3, 1fr) !important;
  width: 100% !important;
}
</style>
