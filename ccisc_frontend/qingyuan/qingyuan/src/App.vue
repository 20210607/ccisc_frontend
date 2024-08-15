<template>
  <div id="app">
    <div class="navigation-container">
      <NavigationBar />
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import NavigationBar from '@/components/NavigationBar.vue';
</script>

<style scoped>
.navigation-container {
  width: 100%;
}
</style>
