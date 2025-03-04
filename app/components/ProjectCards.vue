<script setup>
import { projects } from '~/assets/data'

const three = getThreeRandom(projects)
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isPortrait = useMediaQuery('(orientation: portrait)')
const zoom = computed(() => (isLargeScreen && isPortrait ? '0.3' : '0.175'))
const br = computed(() => (zoom.value === '0.3' ? '3.333rem' : '5.714285rem'))
</script>

<template>
  <div class="three three-projects flex-center w100">
    <div
      v-for="({ title, name, stack, tags, path, white_bg }, i) in three"
      :key="i"
      class="card card-back br1 hideO"
    >
      <div class="frame w100 rel">
        <FrameLoader
          :iframe-class="{
            white_bg: white_bg,
            iframe: true,
            w100: true,
            hideO: true,
            br1: true,
            abs: true,
          }"
          :iframe-src="getPath(path)"
          :iframe-style="{ zoom: zoom, borderRadius: br }"
          :scrolling="'no'"
          :iframe-title="title"
          :three="true"
        />
      </div>

      <h4 class="h4 text-left rel">
        <NuxtLink
          class="text-wrap hideO cursor-help"
          :title="$t('worksDetails') + ' «' + title + '»'"
          :to="{ name: 'project-projectName', params: { projectName: name } }"
        >
          <em>{{ title }}</em>
        </NuxtLink>
      </h4>

      <p class="p3" style="letter-spacing: -0.1rem">
        <span class="dimmed">tech stack: &nbsp;</span>

        {{ stack.join(' | ') }}

        <br>

        <span class="dimmed">tech area: &nbsp;&nbsp;</span>

        {{ tags.join(', ') }}
      </p>
    </div>
  </div>
</template>

<style lang="scss">
.text-wrap {
  max-width: 100%;
  text-wrap: wrap;
}

.three-projects {
  flex-wrap: wrap;
  flex-direction: row;
  gap: 1rem;
  height: auto;

  .card {
    display: grid;
    gap: 0.75rem;

    @media (orientation: landscape) {
      grid-template-rows: calc(29rem - 2px) 4rem 2.75rem;
      width: calc(29rem - 2px);
      height: calc(29rem + 8.75rem);
    }

    @media (orientation: portrait) {
      grid-template-rows: calc(18rem - 2px) 4rem 2.75rem;
      width: calc(18rem - 2px);
      height: calc(18rem + 8.75rem);
    }

    .frame {
      transform: none;
      aspect-ratio: 1 / 1;

      .iframe {
        aspect-ratio: 1 / 1;
      }
    }

    .h4::after {
      content: '--------------------';
      bottom: 0;
      right: 0;
      width: fit-content;
      height: 2px;
      line-height: inherit;
      font-size: inherit;
      letter-spacing: -0.33ch;
      color: var(--accent0);
      text-align: right;
    }

    .h4,
    .p3 {
      padding: 0 0.5rem;
    }
  }
}
</style>
