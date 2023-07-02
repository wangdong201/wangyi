<template>
  <div>
    <div
      v-for="item in raking"
      :key="item.id"
      class="w-[90vw] h-[54vw] rounded-[3vw] mr-[3vw] opacity-0.4 bg-[#FFFFFF] shadow-md dark:bg-[#25272e] dark:text-[#e9e9e9]"
    >
     <div class="m-[2vw]">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <p>{{ item.uiElement.mainTitle.title }}</p>
          <Icon icon="iconamoon:arrow-right-2-thin" width="20" height="20" />
        </div>
        <span class="text-[#ccc]">{{
          item.uiElement.mainTitle.titleDesc
        }}</span>
      </div>
      <div>
        <div
          v-for="(item1, indexs) in 3"
          :key="item.id"
          class="flex items-center mt-[2vw]"
        >
          <img
            :src="item.resources[indexs].uiElement.image.imageUrl"
            alt=""
            class="w-[12vw] h-[12vw] rounded-[3vw]"
          />
          <div class="w-[12vw] h-[12vw] text-center leading-[12vw] text-[red]">
            {{ indexs + 1 }}
          </div>
          <div class="text-[1.2vw] w-[52vw]">
            <p class="line-clamp-1 overflow-hidden">
              {{ item.resources[indexs].resourceExtInfo?.songData.album.name }}
            </p>
            <p class="line-clamp-1 overflow-hidden">
              {{ item.resources[indexs].resourceExtInfo?.artists[0].name }}
            </p>
          </div>
          <p class="text-[1.2vw] text-[red]">
            {{ item.resources[indexs].uiElement.labelText.text }}
          </p>
        </div>
      </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['raking'],
};
</script>
