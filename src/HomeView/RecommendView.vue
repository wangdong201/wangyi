<template>
  <ul>
    <li v-for="item in recommend" :key="item.id" class="mr-[3vw]">
      <div class="w-[32vw] h-[32vw] relative">
        <img
          :src="item.uiElement.image.imageUrl"
          alt=""
          class="w-[32vw] h-[32vw] rounded-[3vw]"
        />
        <Icon
          icon="bi:play-fill"
          width="40"
          class="absolute right-0 bottom-0 text-[#FEFFFF]"
        />
        <div class="flex items-center absolute top-0 right-[2vw]">
          <Icon
          icon="bi:play-fill"
          width="20"
          class="text-[#FEFFFF]"
        />
        <p class="text-[1vw] text-[#fff]">15.8亿</p>
        </div>
      </div>
      <p class="line-clamp-2 text-ellipsis overflow-hidden w-[32vw]">
        {{ item.uiElement.mainTitle.title }}
      </p>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['recommend'],
};
</script>
