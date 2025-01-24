export default {
  beforeMount(el, binding) {
    const clickOutsideHandler = (event) => {
      // Якщо кліки поза елементом
      if (!el.contains(event.target) && el !== event.target) {
        binding.value(event) // Викликаємо прив'язану функцію
      }
    }

    // Додаємо обробник кліків до документа
    document.addEventListener('click', clickOutsideHandler)
    el._clickOutsideHandler = clickOutsideHandler
  },
  unmounted(el) {
    // Видаляємо обробник під час демонтування елемента
    document.removeEventListener('click', el._clickOutsideHandler)
  },
}
