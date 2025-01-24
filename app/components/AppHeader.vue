<script></script>

<template>
  <header class="header w100 back-blur05">
    <nav>
      <menu class="w100 rel">
        <li class="menu-item w100 flex-center text-center">
          <NuxtLink class="link flex-center w100 logo-link" to="/">
            <app-logo font-weight="bold" />
          </NuxtLink>
        </li>

        <li class="menu-item w100 flex-center text-center">
          <NuxtLink class="link flex-center w100" to="/about">
            {{ $t('AboutMe') }}
          </NuxtLink>
        </li>

        <li class="menu-item w100 flex-center text-center">
          <NuxtLink class="link flex-center w100" to="/projects">
            {{ $t('MyWorks') }}
          </NuxtLink>
        </li>

        <li class="menu-item w100 flex-center text-center">
          <NuxtLink class="link flex-center w100" to="/contact">
            {{ $t('MyContacts') }}
          </NuxtLink>
        </li>

        <li class="menu-item w100 flex-col-center text-center global-view">
          <ThemeToggler />
          <LanguageSwitcher />
        </li>
      </menu>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  position: fixed;
  z-index: 3;
  top: 0;
  left: 0;
  height: 20vmin;
  background: linear-gradient(180deg, var(--bg0), var(--bg50), transparent);
}

menu {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  height: 20vmin;
  gap: 0.125rem;

  a {
    display: inline-block;
    height: 20vmin;
    opacity: 0.75;
    font-size: 3vmin;
    letter-spacing: -0.1ch;
    word-spacing: -0.5ch;
    font-weight: bold;
    text-wrap: nowrap;
    text-transform: uppercase;
    color: var(--color0);
    border: 0.125rem solid transparent;

    &:hover,
    &.NuxtLink-active {
      border: 0.125rem solid var(--color50);
      border-radius: 10vmin;
      color: var(--color0);
      opacity: 0.66;
      filter: hue-rotate(90deg);
    }

    &:hover .logo-image,
    &.NuxtLink-active .logo-image {
      stroke: var(--color0);
      filter: url(#shadowActive);
    }
  }
}

.menu-item {
  text-shadow: 0 0 2rem var(--bg0);
  --padding: calc((100vw - 100vmin) / 10);
  --padding2: calc((100vw - 100vmin) / 5);

  &:first-child,
  &:nth-child(3),
  &:last-child {
    padding: 0 var(--padding);
  }

  &:nth-child(2) {
    padding-left: var(--padding2);
  }
  &:nth-child(4) {
    padding-right: var(--padding2);
  }
}

.global-view {
  height: 20vmin;
}
</style>
