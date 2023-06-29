<template>
    <ul
          
        >
          <li v-for="item in recommend" :key="item.id" class="mr-[3vw]">
            <div class="w-[32vw] h-[32vw]">
              <img
                :src="item.picUrl"
                alt=""
                class="w-[32vw] h-[32vw] rounded-[3vw]"
              />
            </div>
            <p
              class="text-base line-clamp-2 text-ellipsis overflow-hidden w-[32vw]"
            >
              {{ item.name }}
            </p>
          </li>
        </ul>
</template>

<script>
export default{
  props: ['recommend'],
}
</script>