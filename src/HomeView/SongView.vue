<template>
  <div >
          <div
            v-for="item in song"
            :key="item.id"
            class="flex mb-[3.5vw] w-[90vw] h-[14vw]"
          >
            <div>
              <img
                :src="item.album.picUrl"
                alt=""
                class="w-[15vw] h-[15vw] mr-[3vw] rounded-[3vw]"
              />
            </div>
            <div>
              <p class="w-[40vw] line-clamp-1 overflow-hidden text-[1.2vw]">
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
</template>

<script>
    export default {
  props: ['song'],
};
</script>