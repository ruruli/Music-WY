<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar />
  </div>
</template>

<script>
import MainTabBar from 'components/content/MainTabBar.vue';
export default {
  name: "app",
  components: {
    MainTabBar,
    MainTabBar,
  },
};
</script>
    MainTabBar

<style></style>
