export const useThemeColor = () => {
  const themeColor = useState('themeColor', () => '#ffffff')

  const setThemeColor = (value) => {
    themeColor.value = value
  }

  return {
    themeColor,
    setThemeColor,
  }
}
