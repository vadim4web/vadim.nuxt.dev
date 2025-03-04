import getTheme from '~/utils/getTheme'

export const useThemeColor = () => {
  const themeColor = useState('themeColor', () =>
    getTheme() === 'dark' ? '#ffffff' : '#000000',
  )

  const setThemeColor = (value) => {
    themeColor.value = value
  }

  return {
    themeColor,
    setThemeColor,
  }
}
