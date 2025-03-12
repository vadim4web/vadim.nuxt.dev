<script setup>
import { projects } from '~/assets/data'

const three = getThreeRandom(projects)
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const isPortrait = useMediaQuery('(orientation: portrait)')
const zoom = computed(() => (isLargeScreen && isPortrait ? '0.3' : '0.175'))
const br = computed(() => (zoom.value === '0.3' ? '3.333rem' : '5.714285rem'))
</script>

<template>
  <div class="three three-projects flex flex-row flex-wrap items-center justify-center w-full h-auto gap-[1rem]">
    <div
      v-for="({ title, name, stack, tags, path, bgWhite }, i) in three"
      :key="i"
      class="card grid gap-[0.75rem] card-back rounded-[1rem] overflow-hidden"
    >
      <div class="frame w-full relative">
        <FrameLoader
          :iframe-class="{
            'bg-white': bgWhite,
            'iframe': true,
            'w-full': true,
            'overflow-hidden': true,
            'rounded-[1rem]': true,
            'absolute': true,
          }"
          :iframe-src="getPath(path)"
          :iframe-style="{ zoom: zoom, borderRadius: br }"
          :scrolling="'no'"
          :iframe-title="title"
          :three="true"
        />
      </div>

      <h4 class="h4 text-left relative">
        <NuxtLink
          class="text-wrap max-w-full overflow-hidden cursor-help"
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
.three-projects {
  .card {
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
