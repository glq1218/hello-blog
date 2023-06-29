<template>
  <Transition
    enter-active-class="animate__animated animate__fadeInDown"
    leave-active-class="animate__animated animate__fadeOutUp"
  >
    <div v-show="headerShow" class="header">
      <h1>这是一个标题</h1>
      <h2>这是一个小标题</h2>
      <DropdownMenu title="切换主题">
        <div class="theme-list">
          <button @click="theme = 'default'">默认{{ theme == 'default' ? '*' : '' }}</button>
          <button @click="theme = 'dark'">暗色{{ theme == 'dark' ? '*' : '' }}</button>
          <button @click="theme = 'spring-pear-blossom'">
            春日梨花{{ theme == 'spring-pear-blossom' ? '*' : '' }}
          </button>
          <button @click="theme = 'forest-vegetation'">
            林间草木{{ theme == 'forest-vegetation' ? '*' : '' }}
          </button>
          <button @click="theme = 'the-shore-of-the-ocean'">
            海洋之滨{{ theme == 'the-shore-of-the-ocean' ? '*' : '' }}
          </button>
          <button @click="theme = 'hear-the-wind-sing'">
            且听风吟{{ theme == 'hear-the-wind-sing' ? '*' : '' }}
          </button>
        </div>
      </DropdownMenu>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'
import DropdownMenu from '@/components/DropdownMenu.vue'

const app = useAppStore()

const { theme, headerShow } = storeToRefs(app)
</script>

<style>
.header {
  --animate-duration: 0.3s;
  height: 10vh;
  width: 100vw;
  background-color: var(--background-color);
  color: var(--heading-color);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-inline: 20px;
}

.theme-list {
  display: flex;
  flex-direction: column;
}
</style>
