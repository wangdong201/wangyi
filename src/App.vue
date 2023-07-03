<template>
   <div class="w-screen h-screen">
    <!-- 声明式导航 -->
    <router-link :to="{ path: '/WangyiView' }"></router-link>
    <!-- <router-link to="/IndexView">go to index</router-link> -->
    <router-view />
   </div>
  </template>
  <script>
  // export default {
  //   components: { },
  //   data() {
  //     return {
  //       visibleView: 'WangyiView',
  //     };
  //   },
  //   beforeCreate() {
  //     window.onhashchange = () => {
  //       this.visibleView = location.hash.replace('#', '');
  //     };
  //   },
  //   created() {
  //     window.vm = this;
  //   },
  // };
  </script>
  <style>
  @tailwind base;
  @tailwind utilities;
  @tailwind components;
  </style>
  