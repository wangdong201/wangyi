<template>
   <div>
          <div
            v-for="item in raking"
            :key="item.id"
            class="w-[90vw] h-[56vw] bg-[#ebebeb] rounded-[3vw] mr-[3vw]"
          >
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <p>{{ item.uiElement.mainTitle.title }}</p>
                <Icon
                  icon="iconamoon:arrow-right-2-thin"
                  width="40"
                  height="40"
                />
              </div>
              <span class="text-gray-100">{{
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
                <div class="w-[12vw] h-[12vw] text-center leading-[12vw]">
                  {{ indexs + 1 }}
                </div>
                <div class="text-[1.2vw] w-[52vw]">
                  <p class="line-clamp-1 overflow-hidden">
                    {{
                      item.resources[indexs].resourceExtInfo?.songData.album
                        .name
                    }}
                  </p>
                  <p class="line-clamp-1 overflow-hidden">
                    {{
                      item.resources[indexs].resourceExtInfo?.artists[0].name
                    }}
                  </p>
                </div>
                <p class="text-[1.2vw]">
                  {{ item.resources[indexs].uiElement.labelText.text }}
                </p>
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