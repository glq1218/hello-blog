<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
  <div class="dropdown">
    <div class="title">
      {{ title }}
      <div class="list">
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.title {
  height: 8vh;
  width: 8vw;
  border-radius: 1vmin;
  background-color: var(--primary-background-color);
  text-align: center;
  line-height: 8vh;
  cursor: pointer;
}

.title:hover .list {
  display: block;
}
.list {
  display: none;
  padding-top: 5px;
}
</style>
