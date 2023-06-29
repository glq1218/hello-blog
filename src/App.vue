<script setup lang="ts">
import TheHeader from './components/TheHeader.vue'
import TheSide from './components/TheSide.vue'
</script>

<template>
  <div class="common-layout">
    <div class="header-layout">
      <TheHeader></TheHeader>
    </div>
    <div class="main-layout">
      <div class="content-layout">
        <RouterView></RouterView>
      </div>
      <div class="side-layout">
        <TheSide></TheSide>
      </div>
    </div>
  </div>
</template>

<style scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
  background-color: var(--primary-background-color);
  color: var(--primary-text-color);
  overflow-y: scroll;
  overflow-x: hidden;
}
.common-layout::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

.common-layout::-webkit-scrollbar-thumb {
  background: var(--background-color);
  border-radius: 2px;
}

.common-layout::-webkit-scrollbar-thumb:hover {
  background: var(--text-color);
}

.header-layout {
  height: 10vh;
  position: sticky;
  top: 0;
}

.main-layout {
  display: flex;
  justify-content: space-evenly;
}

.content-layout {
  width: 50vw;
}

.side-layout {
  width: 20vw;
}
</style>
