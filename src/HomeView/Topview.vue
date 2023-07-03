<template>
  <div>
  <div >
    <ul class="flex overflow-hidden w-[160vw] h-[18vw]">
      <li
        v-for="item in menulist"
        :key="item.id"
        class="w-[13vw] h-[13vw] mr-[3vw]"
      >
        <div class="w-[13vw] h-[13vw] relative">
          <img :src="item.iconUrl" alt="" class="red-image" />
        </div>
        <p class="text-[1.2vw] text-center">{{ item.name }}</p>
      </li>
      <span class="absolute left-[4.5vw] top-[4.5vw] text-[#fff]">{{ new Date().getDate() }}</span>
    </ul>
  </div>
</div>
</template>

<script>
export default {
  props: ['menulist'],
};
</script>
