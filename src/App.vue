<template>
  <div class="w-screen h-screen">
    <!-- 声明式导航 -->
    <router-link :to="{ path: '/WangyiView' }"></router-link>
    <!-- <router-link to="/IndexView">go to index</router-link> -->
    <router-view />
  </div>
</template>
<script>
export default {
  created() {
 
  },
};
</script>
<style>
@tailwind base;
@tailwind utilities;
@tailwind components;
</style>
