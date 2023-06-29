<template>
  <div>
    <div
      class="swiper-slide rounded-[3vw]"
      v-for="item in banners"
      :key="item.id"
    >
      <img :src="item.pic" alt="" class="rounded-[3vw] w-[90vw]" />
    </div>
  </div>
</template>
<script>
export default {
  props: ['banners'],
};
</script>
