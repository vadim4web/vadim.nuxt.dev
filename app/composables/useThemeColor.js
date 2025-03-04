export const useThemeColor = () => {
  const themeColor = useState('themeColor', () => '#808080')

  const setThemeColor = (value) => {
    themeColor.value = value
  }

  return {
    themeColor,
    setThemeColor,
  }
}
