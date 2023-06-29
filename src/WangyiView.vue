<template>
  <div
    class="w-screen voerflow-hidden bg-gradient-to-b from-purple-100 to-whit"
  >
    <!-- 头部 -->
    <div class="flex justify-center pt-[3vw] items-center relative">
      <Icon icon="basil:menu-solid" width="35" height="35" />
      <input
        type="text"
        placeholder="男孩别哭"
        class="border w-3/4 rounded-[3vw] h-[10vw] text-center bg-gradient-to-r from-red-100 via-blue-100 bg-opacity-20"
      />
      <Icon icon="system-uicons:microphone" width="35" height="35" />
      <Icon
        icon="ei:search"
        width="35"
        height="35"
        class="absolute right-[70vw]"
      />
    </div>
    <!-- 轮播 -->
    <div
      class="swiper-container overflow-hidden mt-[6vw] w-[89.5vw] mx-auto rounded-[3vw]"
    >
      <BannersView class="swiper-wrapper rounded-[3vw]" :banners="banners" />
    </div>
    <!-- 菜单 -->
    <div
      class="mt-[6vw] w-[89.5vw] mx-auto overflow-hidden scroll-wrapper"
      ref="scroll"
    >
      <Topview
        class="scroll-content w-[160vw]"
        ref="scrollContent"
        :menulist="menulist"
      />
    </div>
    <!-- 推荐歌单 -->
    <div class="mt-[6vw] w-[89.5vw] mx-auto overflow-hidden">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span>推荐歌单</span>
          <Icon icon="ph:caret-right-light" width="15" height="15" />
        </div>
        <div>
          <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
        </div>
      </div>
      <div class="scroll-wrapper" ref="scroll_1">
        <RecommendView
          class="flex overflow-hidden mt-[3vw] scroll-content w-[210vw]"
          ref="scrollContent"
          :recommend="recommend"
        />
      </div>
    </div>
    <!-- 新歌新碟/数字专辑 -->
    <div class="mt-[7vw] w-[89.5vw] mx-auto overflow-hidden">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span>新歌新碟/数字专辑</span>
          <Icon icon="ph:caret-right-light" width="15" height="15" />
        </div>
        <div>
          <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
        </div>
      </div>
      <div class="scroll-wrapper mt-[7vw] overflow-hidden" ref="scroll_2">
        <SongView class="flex w-[300vw] h-[50vw] flex-wrap" :song="song" />
      </div>
    </div>
    <!-- 排行榜 -->
    <div class="mt-[7vw] w-[89.5vw] mx-auto overflow-hidden">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <span>排行榜</span>
          <Icon icon="ph:caret-right-light" width="15" height="15" />
        </div>
        <div>
          <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
        </div>
      </div>
      <div class="overflow-hidden scroll-wrapper mt-[7vw]" ref="scroll_3">
        <RakingView class="flex flex-wrap w-[560vw]" :raking="raking" />
      </div>
    </div>
    <!-- 日历 -->
    <div class="mt-[7vw] w-[89.5vw] mx-auto overflow-hidden">
      <div class="flex items-center justify-between">
        <div class="flex items-center">
          <h1>音乐日历</h1>
          <Icon icon="mingcute:right-line" color="#4f5a6e" />
        </div>
        <div class="mr-[4vw]">
          <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
        </div>
      </div>
      <div class="bg-[#f0f0f0] rounded-[10px] w-[89.5vw] h-[35vw]">
        <McView class="ml-[8px]" :music="music" />
      </div>
    </div>
    <!-- 抽屉 -->
    <button
      @click="drawerVisible = !drawerVisible"
      @自定义事件="(e) => (drawerVisible = e)"
    >
      drawerVisibleToggle
    </button>
    <Drawer :visible.sync="drawerVisible" direction="ltr">
      <!-- <template #header>
        <div class="flex justify-between items-center">
          <p>推荐歌单</p>
          <Icon icon="clarity:times-line" />
        </div>
      </template> -->
      <h1>1234</h1>
      <h1>1234</h1>
      <h1>1234</h1>
      <h1>1234</h1>
    </Drawer>
  </div>
</template>

<script>
import Swiper from 'swiper';
import BScroll from '@better-scroll/core';
import 'swiper/swiper-bundle.css';
import axios from 'axios';
import BannersView from './HomeView/BannersView.vue';
import Topview from './HomeView/Topview.vue';
import RecommendView from './HomeView/RecommendView.vue';
import SongView from './HomeView/SongView.vue';
import RakingView from './HomeView/RakingView.vue';
import McView from './HomeView/McView.vue';
import Drawer from './components/Drawer.vue';
export default {
  comments: {
    BannersView,
    Topview,
    RecommendView,
    SongView,
    RakingView,
    McView,
    Drawer,
  },
  data() {
    return {
      drawerVisible: true,
      visible: true,
      menu: [],
      banners: [],
      activeMenuItem: '',
      recommend: [],
      menulist: [],
      song: [],
      raking: [],
      music: [],
    };
  },
  mounted() {
    new Swiper('.swiper-container', {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    });
    this.init(this.$refs.scroll);
    this.init(this.$refs.scroll_1);
    this.init(this.$refs.scroll_2);
    this.init(this.$refs.scroll_3);
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    fn(e) {
      this.drawerVisible = e;
    },
    init(abc) {
      this.bs = new BScroll(abc, {
        scrollX: true,
        probeType: 3,
        click: true,
      });
    },
    toggleMenu(name) {
      this.activeMenuItem = name;
      this.fetchPlayLists(name);
    },
    fetchPlayLists(cat) {
      // 推荐歌单
      axios
        .get(
          'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/personalized?limit=6',
          {
            params: {
              cat: cat,
            },
          }
        )
        .then((res) => {
          this.$data.recommend = res.data.result;
        });
      // 菜单
      axios
        .get(
          'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball'
        )
        .then((res) => {
          this.menulist = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
      // 新歌新碟/数字专辑
      axios
        .get(
          'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/top/song'
        )
        .then((res) => {
          this.song = res.data.data;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      // 排行榜
      axios
        .get(
          'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
        )
        .then((res) => {
          this.raking = res.data.data.blocks[3].creatives;
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      // 日历
      axios
        .get(
          'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/calendar?startTime=1606752000000&endTime=1609430399999'
        )
        .then((res) => {
          this.music = res.data.data.calendarEvents.slice(0, 2);
          console.log(this.music);
        });
    },
  },
  created() {
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
      )
      .then((res) => {
        this.banners = res.data.data.blocks[0].extInfo.banners;
      })
      .then((cat) => this.fetchPlayLists(cat))
      .catch((err) => {
        console.log(err);
      });
  },
  components: {
    BannersView,
    Topview,
    RecommendView,
    SongView,
    RakingView,
    McView,
  },
};
</script>

<style>
.red-image {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}
* {
  margin: 0;
  padding: 0;
}
</style>
