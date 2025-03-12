<script setup></script>

<template>
  <header class="header back-blur05 fixed">
    <nav>
      <menu class="w-full relative grid">
        <li class="menu-item w-full flex items-center justify-center text-center">
          <NuxtLink class="link flex items-center justify-center w-full logo-link" to="/">
            <app-logo font-weight="bold" />
          </NuxtLink>
        </li>

        <li class="menu-item w-full flex items-center justify-center text-center">
          <NuxtLink class="link flex items-center justify-center w-full" to="/bio">
            {{ $t('AboutMe') }}
          </NuxtLink>
        </li>

        <li class="menu-item w-full flex items-center justify-center text-center">
          <NuxtLink class="link flex items-center justify-center w-full" to="/blog">
            {{ $t('MyBlog') }}
          </NuxtLink>
        </li>

        <li class="menu-item w-full flex items-center justify-center text-center">
          <NuxtLink class="link flex items-center justify-center w-full" to="/projects">
            {{ $t('MyWorks') }}
          </NuxtLink>
        </li>

        <li class="menu-item w-full flex items-center justify-center text-center">
          <NuxtLink class="link flex items-center justify-center w-full" to="/contact">
            {{ $t('MyContacts') }}
          </NuxtLink>
        </li>

        <li class="menu-item w-full flex flex flex-col items-center justify-center text-center global-view">
          <ThemeToggler />
          <LanguageSwitcher />
        </li>
      </menu>
    </nav>
  </header>
</template>

<style lang="scss">
.header {
  z-index: 3;
  top: 0;
  left: 0;
  height: var(--header-h);
  background: linear-gradient(180deg, var(--bg0), var(--bg50), transparent);
}

menu {
  grid-template-columns: 3fr repeat(4, 1fr) 3fr;
  place-items: center;
  height: var(--header-h);

  a {
    display: inline-block;
    height: var(--header-h);
    width: var(--header-h) !important;
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
      border-radius: calc(var(--header-h) / 2);
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
  --padding: calc(((100vw - 1.75rem) - 100vmin) / 20);
  --padding3: calc((((100vw - 1.75rem) - 100vmin) / 20) * 3);

  &:first-child,
  &:last-child {
    padding-inline: var(--padding3);
  }

  &:nth-child(2),
  &:nth-child(3),
  &:nth-child(4),
  &:nth-child(5) {
    padding-inline: var(--padding);
  }
}

.global-view {
  height: var(--header-h);
}
</style>
