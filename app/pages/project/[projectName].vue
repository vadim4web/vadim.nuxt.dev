<script setup>
import { projects } from '~/assets/data'

const route = useRoute()
const projectName = ref(route.params.projectName)
const project = ref(getProjectDetails(projectName.value))
const curIdx = ref(getCurrentProjectIndex())
const prev = ref(getPreviousProject())
const next = ref(getNextProject())
const others = ref(getThreeRandom(projects, curIdx.value))
const source = computed(() => getSrc(projectName.value))
const demo = computed(() => getPath(project.value.path))
const isLargeScreen = useMediaQuery('(min-width: 1024px)')
const zoom = computed(() => (isLargeScreen ? '0.25' : '0.175'))
const br = computed(() => (isLargeScreen ? '4rem' : '5.714285rem'))

function getProjectDetails(projectName) {
  return projects.find(project => project.name === projectName) || {}
}

function getCurrentProjectIndex() {
  return projects.findIndex(
    p =>
      p.name === project.value.name
      && p.orientation === project.value.orientation,
  )
}

function getNextProject() {
  const nextIndex = curIdx.value < projects.length - 1 ? curIdx.value + 1 : 0
  return projects[nextIndex]
}

function getPreviousProject() {
  const prevIndex = curIdx.value > 0 ? curIdx.value - 1 : projects.length - 1
  return projects[prevIndex]
}

watchEffect(() => {
  projectName.value = route.params.projectName
  project.value = getProjectDetails(projectName.value)
  curIdx.value = getCurrentProjectIndex()
  prev.value = getPreviousProject()
  next.value = getNextProject()
  others.value = getThreeRandom(projects, curIdx.value)
})
</script>

<template>
  <main class="flex-col project-page">
    <PageHeader head-key="projectH21" text-key="projectT1" />

    <div class="project-details flex-col">
      <FrameLoader
        :iframe-class="{ white_bg: project.white_bg, preview: true }"
        :iframe-src="demo"
        :iframe-title="project.title"
        :scrolling="'yes'"
      />

      <div class="text flex-col">
        <h3 class="h3">
          {{ project.title }}
        </h3>

        <p class="p4">
          <b> {{ $t('projectP1') }}:&nbsp; </b>
          {{ project.tags.join(' | ') }}
        </p>

        <p class="p4">
          <b> {{ $t('projectP2') }}:&nbsp; </b>
          {{ project.stack.join(', ') }}
        </p>

        <p class="p4">
          <b> {{ $t('projectP3') }}:&nbsp; </b>
          <a
            class="source"
            :href="source"
            target="_blank"
            title="GitHub Repository"
          >
            <i>
              {{ source }}
            </i>
          </a>
        </p>

        <p class="p4">
          <b> {{ $t('projectP4') }}:&nbsp; </b>
          <a
            class="demo"
            :href="demo"
            target="_blank"
            title="Live Demo"
          >
            <i>
              {{ demo }}
            </i>
          </a>
        </p>

        <div v-if="project.deps.length" class="p4">
          <b>{{ $t('projectP5') }}:</b>

          <br>

          <ul>
            <li v-for="(d, i) in project.deps" :key="i">
              {{ d }}
            </li>
          </ul>
        </div>

        <p v-else class="p4">
          {{ $t('projectP5_default') }}
        </p>

        <div class="p4">
          <b> {{ $t('projectP6') }}: </b>

          <br>

          <pre v-if="project['desc_' + $i18n.locale]">{{ project['desc_' + $i18n.locale] }}
          </pre>

          <p v-else class="p4">
            {{ $t('projectP6_default') }}
          </p>
        </div>
      </div>
    </div>

    <div class="navigation">
      <NuxtLink
        class="nav-button prev"
        :to="{
          name: 'project-projectName',
          params: { projectName: prev.name },
        }"
      >
        <ArrowIcon />
        {{ $t('projectPrev') }}
      </NuxtLink>

      <NuxtLink
        class="nav-button next"
        :to="{
          name: 'project-projectName',
          params: { projectName: next.name },
        }"
      >
        {{ $t('projectNext') }}
        <ArrowIcon />
      </NuxtLink>
    </div>

    <div class="others flex-col">
      <h2 class="h1">
        {{ $t('projectH22') }}
      </h2>

      <div class="cards">
        <div v-for="(p, i) in others" :key="i" class="card card-back br1 rel">
          <NuxtLink
            class="flex-col"
            :title="$t('worksDetails') + ' «' + p.title + '»'"
            :to="{
              name: 'project-projectName',
              params: { projectName: p.name },
            }"
          >
            <FrameLoader
              :iframe-class="{
                white_bg: p.white_bg,
                other: true,
                w100: true,
                br1: true,
                rel: true,
              }"
              :iframe-src="getPath(p.path)"
              :iframe-style="{ zoom: zoom, borderRadius: br }"
              :scrolling="'no'"
              :iframe-title="p.title"
              :three="true"
            />

            <div class="other-text flex-col-between text-center">
              <h4 class="h4">
                <em>
                  {{ p.title }}
                </em>
              </h4>

              <p class="other-p">
                {{ p.stack.join(', ') }}
              </p>
            </div>
          </NuxtLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
.project-page {
  .preview {
    aspect-ratio: 1 / 1;
    border-radius: 2rem;

    &:not(.white_bg) {
      background-color: var(--bg50);
    }

    @media (orientation: portrait) {
      width: 100%;
      zoom: 0.33;
    }

    @media (orientation: landscape) {
      width: 65%;
      zoom: 0.5;
    }
  }

  .project-details {
    margin-top: 7.5rem;
    align-items: center;
  }

  .text {
    width: 65%;
    gap: 1.875rem;
  }

  .h3 {
    margin-top: 4rem;
    font-size: 2rem;
  }

  .source:not(:hover),
  .demo:not(:hover) {
    text-decoration: underline;
  }

  pre {
    line-break: normal;
    text-wrap: wrap;
  }

  .navigation {
    margin-top: 9rem;
    display: flex;
    justify-content: space-between;
  }

  .nav-button {
    display: flex;
    justify-content: center;
    height: 1.5625rem;
    gap: 1.25rem;
    line-height: 170%;
    font-size: 0.875rem;
    font-weight: 600;
  }

  .prev svg {
    align-self: flex-end;
  }

  .next svg {
    align-self: flex-start;
    transform: rotate(180deg);
  }

  .others {
    margin-top: 12rem;
    align-items: center;
  }

  .cards {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-bottom: 3.125rem;
  }

  .card {
    z-index: 1;
  }

  .card a {
    aspect-ratio: 3 / 5;
    gap: 2rem;
  }

  .other {
    height: auto;
    aspect-ratio: 4 / 5;
    z-index: -1;

    &:not(.white_bg) {
      background-color: var(--bg50);
    }
  }

  .other-text {
    padding: 1rem;
    gap: 1rem;
  }
}
</style>
