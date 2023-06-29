import { defineStore } from 'pinia'
import { ref, watchEffect } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  const THEME_KEY = '__theme__'

  const theme = ref(localStorage.getItem(THEME_KEY) || 'default')

  watchEffect(() => {
    document.documentElement.dataset.theme = theme.value
    localStorage.setItem(THEME_KEY, theme.value)
  })

  return { theme }
})
