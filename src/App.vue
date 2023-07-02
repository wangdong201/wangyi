<template>

  </template>
  <script>
  export default {
    components: { WangyiView },
    data() {
      return {
        visibleView: 'WangyiView',
      };
    },
    beforeCreate() {
      window.onhashchange = () => {
        this.visibleView = location.hash.replace('#', '');
      };
    },
    created() {
      window.vm = this;
    },
  };
  </script>
  <style>
  @tailwind base;
  @tailwind utilities;
  @tailwind components;
  </style>
  