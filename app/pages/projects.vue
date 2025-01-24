<script setup>
import { chunkedProjects } from '~/assets/data/projects.js'

const itemsToShow = ref(2)
const projectsToShow = ref(chunkedProjects.slice(0, itemsToShow.value))
const isLimitReached = ref(
  projectsToShow.value.length === chunkedProjects.length,
)

const handleLoadMore = () => {
  if (chunkedProjects.length - 1 > itemsToShow.value) {
    itemsToShow.value += 2
    projectsToShow.value = chunkedProjects.slice(0, itemsToShow.value)
  }
  else if (chunkedProjects.length - 1 === itemsToShow.value) {
    projectsToShow.value = chunkedProjects.slice()
  }
  isLimitReached.value = projectsToShow.value.length === chunkedProjects.length
}

const handleScroll = () => {
  const lastElementId = `three-${projectsToShow.value.length - 2}`
  const lastElement = document.getElementById(lastElementId)

  if (lastElement)
    lastElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

onUpdated(() => handleScroll())
</script>

<template>
  <main class="flex-col projects-page">
    <PageHeader head-key="worksH2" text-key="worksT1" />

    <div class="projects-container w100 rel">
      <div
        v-for="(a, index) in projectsToShow"
        :id="'three-' + index"
        :key="index"
        class="three w100 rel"
      >
        <div
          v-for="(p, i) in a"
          :key="i"
          class="project card-back br1 text-center flex-col hideO"
        >
          <FrameLoader
            :iframe-class="{
              vertical: p.orientation === '|',
              horizontal: p.orientation === '-',
              white_bg: p.white_bg,
              iframe: true,
              w100: true,
            }"
            :iframe-src="getPath(p.path)"
            :iframe-title="p.title"
            :scrolling="'no'"
          />

          <div class="title-box flex-align">
            <p class="t3">
              {{ p.tags.join(' | ') }}
            </p>

            <NuxtLink
              class="t2"
              :title="$t('worksDetails') + ' «' + p.title + '»'"
              :to="{
                name: 'project-projectName',
                params: { projectName: p.name },
              }"
            >
              <em>
                {{ p.title }}
              </em>
            </NuxtLink>
          </div>
        </div>
      </div>

      <InteractiveButton
        v-if="!isLimitReached"
        :action="handleLoadMore"
        :bg="'var(--accent50)'"
        :border-radius="'2.166rem'"
        class="font-variant load-more text-center flex-center"
        :font-size="'1.33rem'"
        :padding="'1.5rem 2.5rem'"
      >
        {{ $t('worksMore') }}
      </InteractiveButton>
    </div>
  </main>
</template>

<style lang="scss">
.projects-page {
  .projects-container {
    padding: 6.25rem 0 10rem;
    gap: 3rem;
  }

  .projects-container,
  .three {
    display: flex;
    flex-wrap: wrap;
  }

  .three {
    margin: 0 auto;
    gap: 1.5rem;

    @media (orientation: landscape) {
      width: calc(50% - 1.5rem);
    }

    @media (orientation: portrait) {
      width: 100%;
    }
  }

  .project {
    height: auto;
    justify-content: space-between;
    flex-shrink: 1;
    flex-grow: 0;
    padding-bottom: 0.5rem;

    &:has(.vertical) {
      @media (orientation: landscape) {
        width: calc(((40dvw - 1.5rem) * 0.333 - 1rem) - 2px);
        height: calc((40dvw * 0.666 * 1.2) - 2px);
      }
      @media (orientation: portrait) {
        width: calc((80dvw * 0.333 - 1rem) - 2px);
        height: calc((80dvw * 0.666 * 1.2) - 2px);
      }
    }

    &:has(.horizontal) {
      @media (orientation: landscape) {
        width: calc(((((40dvw - 1.5rem) * 0.333 - 1rem) * 2) + 1.5rem) - 2px);
        height: calc(((40dvw * 0.666 * 1.2 - 1.5rem) / 2) - 2px);
      }
      @media (orientation: portrait) {
        width: calc((80dvw - (80dvw * 0.333 - 1rem) - 1.5rem) - 2px);
        height: calc((((80dvw * 0.666 * 1.2) - 1.5rem) / 2) - 2px);
      }
    }

    .title-box {
      padding: 0.25rem;
      justify-content: space-between;
    }

    &:has(.vertical) .title-box {
      flex-direction: column;
      justify-content: space-between;
      gap: 1rem;
    }

    &:has(.horizontal) .title-box {
      flex-direction: row;
    }

    .horizontal {
      aspect-ratio: 2 / 1;
    }

    .vertical {
      aspect-ratio: 1 / 2;
    }

    .iframe {
      @media (orientation: portrait) and (max-width: 1023px) {
        zoom: 0.175;
        border-radius: 5.714285rem;
      }

      @media (orientation: portrait) and (min-width: 1024px) {
        zoom: 0.333;
        border-radius: 3rem;
      }

      @media (orientation: landscape) and (max-width: 1023px) {
        zoom: 0.175;
        border-radius: 5.714285rem;
      }

      @media (orientation: landscape) and (min-width: 1024px) {
        zoom: 0.25;
        border-radius: 4rem;
      }
    }
  }

  .project:nth-child(3n):has(.vertical) {
    position: absolute;
    top: 0;
    right: 0;
  }

  .project:nth-child(3n):has(.horizontal) {
    position: absolute;
    top: calc(50% + 0.75rem);
    right: 0;
  }

  @media (orientation: landscape) {
    .three:last-child {
      margin: 0 auto;
      align-self: center;
      justify-self: center;
    }
  }

  .load-more {
    font-size: 0.8rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    margin: 3.75rem auto 0;
  }
}
</style>
