<script setup></script>

<template>
  <main class="home">
    <section class="head w-full content flex flex flex-col items-center justify-center text-center">
      <div class="h1">
        <h2
          class="h1_h2"
          :data-text-1="$t('homeH11')"
          style="filter: drop-shadow(0 0 0.5rem var(--color-op))"
        >
          <strong>{{ $t('homeH11') }}</strong><br>
          <TextHighlight />
        </h2>

        <h2
          class="h1_span"
          :data-text-2="$t('homeH12')"
          style="
            font-size: 75%;
            filter: drop-shadow(0 0 0.5rem var(--color-op));
          "
        >
          <em>{{ $t('homeH12') }}</em>
        </h2>
      </div>

      <RotatingLogo />

      <InteractiveButton
        :bg="'var(--accent50)'"
        :border-radius="'2.3125rem'"
        :font-size="'1.75rem'"
        :padding="'1.5rem 3rem'"
        path="projects"
      >
        {{ $t('homeB1') }}&nbsp;

        <ArrowText height="1.75rem" />
      </InteractiveButton>
    </section>

    <section class="hero w-full">
      <div class="left content flex flex flex-col items-center justify-center w-full relative">
        <div class="text flex flex-col">
          <h2 class="h2">
            <TextHighlight />

            {{ $t('homeH211') }}<br>{{ $t('homeH212') }}<br>{{
              $t('homeH213')
            }}
          </h2>

          <p class="t2">
            {{ $t('homeP11') }}<em>{{ $t('homeP12') }}</em><AgeCounter />.<br>
            {{ $t('homeP13') }}<br>
            {{ $t('homeP14') }}
          </p>
        </div>

        <InteractiveButton
          :bg="'var(--accent50)'"
          :border-radius="'2.125rem'"
          class="font-variant"
          :font-size="'1.5rem'"
          :padding="'1.5rem 3rem'"
          path="bio"
        >
          {{ $t('homeB2') }}
        </InteractiveButton>
      </div>

      <div class="right relative">
        <div class="photo w-full" />
      </div>
    </section>

    <section class="projects flex flex flex-col items-center justify-center">
      <h2 class="h2 text-center">
        {{ $t('homeH22') }}
        <TextHighlight />
      </h2>

      <InteractiveButton
        :bg="'var(--accent50)'"
        :border-radius="'2.166rem'"
        :font-size="'1.33rem'"
        :padding="'1.5rem 2.5rem'"
        path="projects"
      >
        {{ $t('homeB3') }}&nbsp;
        <ArrowText height="1.33rem" />
      </InteractiveButton>

      <ProjectCards />
    </section>

    <TechStackSlider />
  </main>
</template>

<style lang="scss" scoped>
.head {
  .h1 {
    width: 22ch;
    z-index: 1;
  }

  & .text-highlight {
    top: -7.5rem;
    right: 0;
  }
}

.hero {
  display: grid;
  grid-template-columns: 4fr 3fr;
  gap: 6rem;
  align-items: center;

  .left {
    align-items: flex-start;
    justify-content: flex-start;

    .h2 .text-highlight {
      top: -7.5rem;
      left: -15rem;
    }

    .text {
      gap: 1.5rem;
    }
  }

  .right {
    .photo {
      aspect-ratio: 9 / 10;
      background: url('@/assets/img/photo.webp');
      background-position: 50% 25%;
      background-size: cover;
      background-repeat: no-repeat;
      border-radius: 2rem;
      filter: var(--filter1);
    }

    &::before,
    &::after {
      z-index: 1;
      content: '';
      border: 0.125rem solid var(--accent0);
    }

    &::before {
      left: -2.5rem;
      bottom: 3rem;
      width: 3.5rem;
      height: 11rem;
      border-radius: 1.75rem;
    }

    &::after {
      top: -1rem;
      right: 0;
      width: 7rem;
      height: 2rem;
      border-radius: 1rem;
    }

    &:hover {
      .photo {
        filter: var(--filter0);
      }

      &::before,
      &::after {
        filter: var(--filter1);
      }
    }
  }
}

.content {
  gap: 6rem;
}

.projects {
  padding: 3rem 0;
  gap: 2rem;

  .h2 .text-highlight {
    top: -10rem;
    right: -5rem;
  }
}
</style>
