export const useLoader = () => {
  const showLoader = useState('showLoader', () => false)

  const setShowLoader = (value) => {
    showLoader.value = value
  }

  return {
    showLoader,
    setShowLoader,
  }
}
