<template>
  <div class="w-screen h-screen">
    <!-- 声明式导航 -->
    <router-link :to="{ path: '/WangyiView' }"></router-link>
    <router-view />
    <Player v-if="showPlayer" class="fixed bottom-0 bg-[#fff]" />
  </div>
</template>
<script>
import store from './store';
import Player from '@/components/Player/Player.vue';
export default {
  components: { Player },
  computed: {
    showPlayer() {
      // 在这里根据你的逻辑判断是否在当前页面显示播放器组件
        //   return this.$route.path !== '/Playsong';
      if(this.$route.path === '/MusicPlayback'){
        return false;
      }
      return true;
    },
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
