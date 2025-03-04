export default () => {
  const storedTheme = sessionStorage.getItem('theme')

  const isDarkClass = document.documentElement.classList.contains('dark-mode')
    ? 'dark'
    : 'light'

  return storedTheme || isDarkClass || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
}
