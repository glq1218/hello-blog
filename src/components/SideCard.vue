<script setup lang="ts">
import { useAppStore } from '@/stores/app'
import { storeToRefs } from 'pinia'

const app = useAppStore()

const { sideShow } = storeToRefs(app)
</script>
<template>
  <Transition
    enter-active-class="animate__animated animate__fadeInUp"
    leave-active-class="animate__animated animate__fadeOutDown"
  >
    <div v-show="sideShow" class="side card">侧边</div>
  </Transition>
</template>

<style scoped>
.side {
  --animate-duration: 0.3s;
  height: max-content;
  width: 20vw;
  min-width: 200px;
  height: 60vh;
  background-color: var(--background-color);
  position: sticky;
  top: 20vh;
  right: 2vw;
  border-radius: 2vmin;
  padding: 5%;
}
</style>
