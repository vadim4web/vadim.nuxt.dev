export default () => {
  const storedTheme
    = sessionStorage.getItem('theme')
      || document.documentElement.getAttribute('data-theme')
  return storedTheme
    ? storedTheme
    : window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}
