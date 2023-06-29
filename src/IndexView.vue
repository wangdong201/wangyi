<template>
  <div class="w-screen h-screen overflow-hidden">
    <div class="mt-[4vw] flex justify-center relative">
      <Icon icon="material-symbols:arrow-back-ios-new" width="20" height="20" class="absolute left-[2vw]"/>
      <span>歌单广场</span>
    </div>
    <ul class="flex mt-[4vw] relative w-[90vw] overflow-hidden group">
      <li
        :key="item.id"
        v-for="item in menu"
        v-on:click="toggleMenu(item.name)"
        class="mx-4 cursor-pointer focus:border-red-500 text-base  whitespace-nowrap "
        v-bind:class="{ active: item.name === activeMenuItem }"
      >
        {{ item.name }}
      </li>
      <Icon
        icon="uiw:appstore-o"
        color="#999"
        width="20"
        height="20"
        class="absolute right-[0vw] top-[0vw]"
        background="#fff"
      />
    </ul>
    <ul class="flex flex-wrap justify-around">
      <li v-for="item in playlists" class="w-[30vw] mt-[4vw]" :key="item.id">
        <div class="w-[30vw] h-[30vw] rounded overflow-hidden">
          <img :src="item.coverImgUrl" class="w-[30vw] h-[30vw]" alt="" />
        </div>
        <p class="text-base line-clamp-2 text-ellipsis overflow-hidden">
          {{ item.name }}
        </p>
      </li>
    </ul>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      menu: [],
      activeMenuItem: '',
      playlists: [],
    };
  },
  methods: {
    toggleMenu(name) {
      this.activeMenuItem = name;
      this.fetchPlayLists(name);
    },
    fetchPlayLists(cat) {
      axios
        .get(
          'https://netease-cloud-music-api-five-roan-88.vercel.app/top/playlist',
          {
            params: { cat },
          }
        )
        .then((res) => {
          this.playlists = res.data.playlists;
          console.log(res.data.playlists);
        });
    },
  },
  created() {
    axios
      .get(
        'https://netease-cloud-music-api-five-roan-88.vercel.app/playlist/hot'
      )
      .then((res) => {
        this.menu = res.data.tags;
        return (this.activeMenuItem = this.menu[0].name);
      })
      .then((cat) => this.fetchPlayLists(cat))
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style>
.active:hover{
  border-bottom: 2px solid red;
}
</style>
