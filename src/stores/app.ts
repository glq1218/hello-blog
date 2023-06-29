import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'

export const useAppStore = defineStore('app', () => {
  const THEME_KEY = '__theme__'

  const theme = ref(localStorage.getItem(THEME_KEY) || 'default')
  const headerShow = ref(false)
  const sideShow = ref(false)

  const showAnimation = () => {
    headerShow.value = false
    sideShow.value = false
    setTimeout(() => {
      headerShow.value = true
    }, 400)
    setTimeout(() => {
      sideShow.value = true
    }, 700)
  }

  watchEffect(() => {
    headerShow.value = false
    sideShow.value = false
    document.documentElement.dataset.theme = theme.value
    localStorage.setItem(THEME_KEY, theme.value)
    showAnimation()
  })

  return { theme, headerShow, sideShow }
})
