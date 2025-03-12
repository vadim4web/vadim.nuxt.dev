<script setup></script>

<template>
  <footer class="footer flex-align flex-col rel">
    <h5 class="h4 top text-center">
      <NuxtLink
        class="link not-to-show-active"
        style="padding: 1rem; border-radius: 4rem"
        to="/contact"
      >
        {{ $t('footerGIT') }}
      </NuxtLink>
    </h5>

    <h5 class="h1 mail">
      <NuxtLink
        class="link"
        :to="`mailto:vadim4web@gmail.com?subject=${encodeURIComponent(
          $t('emailSubject'),
        )}`"
        rel="noopener noreferrer"
        style="padding: 1rem; border-radius: 4rem"
        target="_blank"
      >
        vadim4web@gmail.com
      </NuxtLink>
    </h5>

    <div class="grid info w100">
      <app-logo font-weight="normal" />

      <address class="text-center">
        <h5 class="h4" :title="$t('location')">
          {{ $t('footerA1') }}, 175/14,<br />
          {{ $t('footerA2') }},<br />
          08150
        </h5>
      </address>

      <div class="contacts">
        <h5 class="h4 phone">
          <NuxtLink to="tel:+380933789883" target="_self" :title="$t('callMe')">
            +380-933-789-883
          </NuxtLink>
        </h5>

        <div class="links">
          <h5 class="h4">
            <NuxtLink
              to="https://github.com/vadim4web"
              rel="noopener noreferrer"
              target="_blank"
              :area-label="$t('gitHub')"
              :title="$t('gitHub')"
            >
              <svg
                fill="none"
                height="24"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </NuxtLink>
          </h5>

          <h5 class="h4">
            <NuxtLink
              to="https://www.youtube.com/@vadim4web"
              rel="noopener noreferrer"
              target="_blank"
              :area-label="$t('youtube')"
              :title="$t('youtube')"
            >
              <svg
                enable-background="new -143 145 512 512"
                viewBox="-143 145 512 512"
                xmlns="http://www.w3.org/2000/svg"
                style="transform: scale(0.92)"
              >
                <path
                  d="m113 145c-141.4 0-256 114.6-256 256s114.6 256 256 256 256-114.6 256-256-114.6-256-256-256zm159.8 415.7c-20.8 20.8-44.9 37.1-71.8 48.4-27.8 11.8-57.4 17.7-88 17.7-30.5 0-60.1-6-88-17.7-26.9-11.4-51.1-27.7-71.8-48.4-20.8-20.8-37.1-44.9-48.4-71.8-11.8-27.8-17.8-57.4-17.8-87.9s6-60.1 17.7-88c11.4-26.9 27.7-51.1 48.4-71.8 20.9-20.8 45-37.1 71.9-48.5 27.9-11.7 57.5-17.7 88-17.7s60.1 6 88 17.7c26.9 11.4 51.1 27.7 71.8 48.4 20.8 20.8 37.1 44.9 48.4 71.8 11.8 27.8 17.7 57.4 17.7 88 0 30.5-6 60.1-17.7 88-11.4 26.9-27.7 51.1-48.4 71.8z"
                  fill="var(--color0)"
                />
                <path
                  d="m196.9 311.2h-167.8s-44.1 0-44.1 44.1v91.5s0 44.1 44.1 44.1h167.8s44.1 0 44.1-44.1v-91.5s0-44.1-44.1-44.1zm-118 139.1v-98.5l83.8 49.3z"
                  fill="var(--color0)"
                />
              </svg>
            </NuxtLink>
          </h5>

          <h5 class="h4">
            <NuxtLink
              to="https://t.me/vadim4web"
              rel="noopener noreferrer"
              target="_blank"
              :aria-label="$t('chatMe')"
              :title="$t('chatMe')"
            >
              <svg
                fill="none"
                height="24"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 8L5 12.5L9.5 14M18 8L9.5 14M18 8L14 18.5L9.5 14"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="var(--color0)"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </NuxtLink>
          </h5>
        </div>
      </div>
    </div>

    <h5 class="h4 hr-above text-center w100">
      &copy; 2020-{{ new Date().getFullYear() }}
      <NuxtLink
        to="https://github.com/vadim4web"
        rel="noopener noreferrer"
        target="_blank"
        :title="$t('gitHub')"
      >
        VADIM4WEB</NuxtLink>.
      <em> {{ $t('copyright') }}. </em>
    </h5>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  justify-content: flex-end;
  left: -10dvw;
  width: 100dvw;
  padding: 0 10dvw;
  background: var(--bg2);

  a:hover {
    filter: drop-shadow(0 0 0.1rem var(--accent0));
  }

  .h4.hr-above {
    padding: 2.25rem 0 5rem 0;
    border-top: 0.125rem solid var(--color2);
  }

  .h4.top {
    padding: 6rem 0 1rem 0;

    & a {
      color: var(--accent0);
      text-shadow: 0 0 0.25rem var(--color50);
    }
  }

  .h1 {
    padding-top: 1rem;
    padding-bottom: 10rem;
  }

  .grid {
    display: grid;
    grid-template-columns: 22vw 36vw calc(22vw + 0.25rem);
    height: 8rem;
    padding-bottom: 2.5rem;

    .logo-span {
      align-self: start;
      justify-self: start;
    }

    address {
      justify-self: center;
      justify-content: center;
    }

    .contacts {
      text-align: right;
      justify-self: end;
    }
  }
}

.links {
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  gap: 1.75rem;
  padding: 1rem 0 0;

  .h4 {
    width: 3.5rem;
    height: 3.5rem;
  }
}

.links svg {
  width: 3.5rem;
  height: 3.5rem;
  stroke: var(--color0);
  overflow: visible;
}

.mail a {
  text-decoration: underline;
}
</style>
