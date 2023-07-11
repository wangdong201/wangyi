<template>
  <div class="w-screen h-screen">
    <!-- 声明式导航 -->
    <router-link :to="{ path: '/WangyiView' }"></router-link>
    <router-view />
    <Player class="fixed bottom-0 bg-[#fff]" />
  </div>
</template>
<script>
import store from './store';
import Player from '@/components/Player/Player.vue';
export default {
  components: { Player },
  computed: {
    darkMode() {
      return store.state.darkMode;
    },
  },
  created() {},
};
</script>
<style>
@tailwind base;
@tailwind utilities;
@tailwind components;
</style>
