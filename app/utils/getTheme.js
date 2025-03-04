export default () => {
  const storedTheme = sessionStorage.getItem('nuxt-color-mode')

  const themeClass = document.documentElement.classList.contains('dark-mode')
    ? 'dark'
    : 'light'

  console.log('theme', storedTheme || themeClass || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))

  return storedTheme || themeClass || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
}
