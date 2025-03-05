import { defineNuxtPlugin } from '#app'

const clickOutsideDirective = {
  beforeMount(el, binding) {
    const clickOutsideHandler = (event) => {
      if (!el.contains(event.target) && el !== event.target) {
        binding.value(event)
      }
    }

    document.addEventListener('click', clickOutsideHandler)
    el._clickOutsideHandler = clickOutsideHandler
  },
  unmounted(el) {
    document.removeEventListener('click', el._clickOutsideHandler)
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', clickOutsideDirective)
})
