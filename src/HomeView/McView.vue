<template>
  <div>
    <div v-for="item in music" :key="item.id">
      <div class="flex items-center justify-between mt-[10px]">
        <div class="text-[12px] ml-[1.5vw]">{{ item.title }}</div>
        <img
          :src="item.imgUrl"
          alt=""
          class="w-[11vw] h-[11vw] rounded-[5px] mr-[20px] mt-[10px]"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['music'],
};
</script>
