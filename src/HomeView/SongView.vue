<template>
  <div>
    <div v-for="item in song" :key="item.id" class="flex mb-[3.5vw] h-[15vw]">
      <div v-for="item in item.resources" :key="item.id" class="flex w-[80vw]">
        <img
          :src="item.uiElement.image.imageUrl"
          alt=""
          class="w-[15vw] h-[15vw] mr-[3vw] rounded-[3vw]"
        />
        <div class="flex flex-col justify-between">
          <p class="w-[40vw] line-clamp-1 overflow-hidden text-[1.2vw]">
            {{ item.uiElement.mainTitle.title }}
          </p>
          <p class="w-[40vw] line-clamp-1 overflow-hidden text-[1.2vw]">
            {{ item.uiElement.subTitle.title }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['song'],
};
</script>
