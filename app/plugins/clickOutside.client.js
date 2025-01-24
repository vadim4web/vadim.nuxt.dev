import clickOutsideDirective from './clickOutsideDirective'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('click-outside', clickOutsideDirective)
})
