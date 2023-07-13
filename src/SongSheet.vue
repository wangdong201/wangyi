<template>
  <div :class="{ dark: switchCheckStatus }">
    <div class="w-screen">
      <div
        class="fixed z-40 bg-[#597BA0] top-0 w-screen h-[9.5vw] dark:bg-[#30595F] dark:text-[#fff]"
      >
        <div
          class="flex justify-between text-[#fff] w-[92.6vw] bg-[#597BA0] mx-auto dark:bg-[#30595F] dark:text-[#fff] h-[9.5vw] items-center"
        >
          <div class="flex w-[21.4vw] justify-between">
            <router-link :to="{ path: '/WangyiView' }">
              <Icon icon="mdi:arrow-left" width="20" height="20" />
            </router-link>
            <router-view />
            <p class="text-[2.5vw] whitespace-no-wrap">歌单</p>
          </div>
          <div class="flex justify-between w-[16.3vw]">
            <Icon icon="material-symbols:search" width="20" height="20" />
            <Icon icon="ri:more-2-line" width="20" height="20" />
          </div>
        </div>
      </div>
      <div class="bg-[#597BA0] dark:bg-[#30595F] dark:text-[#fff]">
        <div class="w-[92.6vw] mx-auto">
          <!-- ----------- -->
          <div v-if="terent">
            <div class="h-[27.8vw] mt-[9.5vw] flex justify-between text-[#fff]">
              <div class="w-[25.7vw] h-[25.7vw] relative">
                <img
                  :src="songList.coverImgUrl"
                  alt=""
                  class="w-[25.7vw] h-[25.7vw] rounded-[3vw]"
                />
                <div
                  class="absolute top-[1.5vw] right-[1vw] flex items-center text-[1.2vw]"
                >
                  <Icon icon="basil:play-solid" width="15" height="15" />
                  {{
                    songList.playCount > 10000
                      ? Math.floor(songList.playCount / 10000) + '万'
                      : songList.playCount
                  }}
                </div>
                <div
                  class="absolute w-[20.6vw] h-[1.5vw] bg-[#fff] bg-opacity-30 rounded-tl-[2vw] rounded-tr-[2vw] top-[-1.5vw] left-[3vw]"
                ></div>
              </div>
              <div class="w-[63.5vw] h-[25.7vw]">
                <div class="flex h-[8.3vw] items-center justify-between">
                  <p class="line-clamp-1 text-[2vw] overflow-hidden">
                    {{ songList.name }}
                  </p>
                  <div
                    class="w-[5vw] h-[5vw] rounded-[50%] bg-[#6280A1] text-center text-[#fff] flex items-center justify-center dark:bg-[#5A797E]"
                    @click="lb"
                  >
                    <Icon
                      icon="ic:round-greater-than"
                      width="20"
                      height="20"
                      :rotate="1"
                    />
                  </div>
                </div>
                <div class="h-[6.6vw] text-[1.2vw] flex items-center">
                  <div class="w-[6.6vw] h-[6.6vw] rounded-[50%] mr-[3vw]">
                    <img
                      :src="songList.creator.avatarUrl"
                      alt=""
                      class="w-[6.6vw] h-[6.6vw] rounded-[50%]"
                    />
                  </div>
                  <p class="mr-[2.5vw] whitespace-nowrap text-[#ccc]">
                    {{ songList.creator.nickname }}
                  </p>
                  <div
                    class="h-[5.3vw] w-[14.3vw] bg-[#6283A6] rounded-[6vw] flex items-center justify-center dark:bg-[#5A797E]"
                  >
                    <Icon icon="ic:round-add" width="20" height="20" />
                    <span class="whitespace-nowrap">关注</span>
                  </div>
                </div>
                <div
                  class="text-[1.2vw] flex h-[4.1vw] w-[10vw] items-center mt-[4.4vw] bg-[#7D9BB7] rounded-[1vw] justify-center dark:bg-[#5A797E]"
                >
                  <p class="whitespace-nowrap">9.1分</p>
                  <Icon icon="ic:round-greater-than" width="20" height="20" />
                </div>
              </div>
            </div>
          </div>
          <div v-if="display" class="dark:bg-[#30595F] dark:text-[#fff]">
            <p
              class="flex pl-[4vw] pr-[4vw] mt-[9vw]"
              style="justify-content: space-between"
            >
              <span class="text-[2vw] text-[#aba59d]"
                >喜欢这个歌单的用户也听了</span
              >
              <span
                class="w-[5vw] h-[5vw] rounded-[50%] pr-[0.2vw] bg-[#6283A6] flex dark:bg-[#5A797E]"
                @click="lb1"
                style="align-items: center; justify-content: center"
              >
                <Icon icon="ep:arrow-up" class="text-[#fff] text-[3.5vw]" />
              </span>
            </p>
            <div class="overflow-auto lunbo pl-[2vw] pr-[2vw] mt-[3vw]">
              <div
                class="flex"
                :style="`width:${music?.length * 25 + 25}vw`"
                style="justify-content: space-around"
              >
                <div v-for="item in music" :key="item.tom" class="w-[28vw]">
                  <img
                    :src="item.coverImgUrl"
                    alt=""
                    class="w-[28vw] h-[28vw] rounded-[4vw]"
                  />
                  <p class="line-clamp-2 text-[#fff] text-[2vw] mt-[2vw]">
                    {{ item.name }}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="mt-[3.1vw] h-[21.4vw] overflow-hidden">
            <div class="flex items-center text-[#ccc]">
              <p class="whitespace-nowrap overflow-hidden text-[1.2vw]">
                {{ songList.description }}
              </p>
              <Icon icon="ic:round-greater-than" width="20" height="20" />
            </div>
            <div class="mt-[4.5vw] flex justify-between text-[#fff]">
              <div
                class="h-[10.2vw] w-[29.1vw] rounded-[6vw] bg-[#7D9BB7] flex items-center justify-center dark:bg-[#648388]"
              >
                <Icon icon="majesticons:share" width="20" height="20" />
                <span class="whitespace-nowrap overflow-hidden">{{
                  songList.shareCount
                }}</span>
              </div>
              <div
                class="h-[10.2vw] w-[29.1vw] rounded-[6vw] bg-[#7D9BB7] flex items-center justify-center dark:bg-[#648388]"
              >
                <Icon icon="ant-design:message-filled" width="20" height="20" />
                <span class="whitespace-nowrap overflow-hidden">{{
                  songList.commentCount
                }}</span>
              </div>
              <div
                class="h-[10.2vw] w-[29.1vw] rounded-[6vw] bg-[#ff2756] flex items-center justify-center"
              >
                <Icon
                  icon="fluent:briefcase-medical-24-filled"
                  width="20"
                  height="20"
                />
                <span class="whitespace-nowrap overflow-hidden">{{
                  songList.subscribedCount
                }}</span>
              </div>
            </div>
          </div>
        </div>
        <div
          class="bg-[#fff] rounded-[5vw] mt-[5vw] dark:bg-[#4D727B] dark:text-[#fff]"
        >
          <div class="w-[92.7vw] mx-auto">
            <div
              class="h-[10.2vw] flex items-center justify-between sticky dark:bg-[#4D727B] dark:text-[#fff]"
            >
              <div
                class="flex w-[26.7vw] items-center justify-between text-[1.2vw]"
              >
                <div
                  class="w-[5.4vw] h-[5.4vw] rounded-[50%] bg-[#ff4937] flex items-center justify-center text-[#fff]"
                >
                  <Icon
                    @click.native="playAll"
                    icon="basil:play-solid"
                    width="15"
                    height="15"
                  />
                </div>
                <p class="whitespace-nowrap">播放全部</p>
                <p class="whitespace-nowrap">
                  ({{ data.data?.songs?.length }})
                </p>
              </div>
              <div class="flex w-[14.8vw] h-[5.4vw] justify-between">
                <Icon icon="clarity:download-line" width="20" height="20" />
                <Icon icon="foundation:indent-more" width="20" height="20" />
              </div>
            </div>
            <!-- ------------ -->
            <div
              class="text-[1.2vw] h-[14.6vw]"
              v-for="(item, index) in songList1"
              :key="item.id"
            >
              <div
                class="flex justify-between items-center"
                @click="playAdd(item)"
              >
                <div class="flex items-center">
                  <div class="w-[7.8vw]">
                    <p>{{ index + 1 }}</p>
                  </div>
                  <div class="w-[56.5vw]">
                    <div class="flex">
                      <p class="whitespace-nowrap overflow-hidden">
                        {{ item.al.name }}
                      </p>
                    </div>
                    <div class="flex">
                      <p class="whitespace-nowrap overflow-hidden text-[#ccc]">
                        {{ item.ar[0].name }} -
                      </p>
                      <span
                        class="whitespace-nowrap overflow-hidden text-[#ccc]"
                        >{{ item.al.name }}</span
                      >
                    </div>
                  </div>
                </div>
                <div class="flex w-[15.3vw] justify-between">
                  <span class="">
                    <Icon
                      icon="bi:play-btn"
                      width="20"
                      height="20"
                      color="#b2b2b2"
                  /></span>
                  <span
                    ><Icon
                      icon="formkit:reorder"
                      color="#b2b2b2"
                      width="20"
                      height="20"
                  /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from 'storejs';
import {
  songDetails,
  songInfo,
  playlistTrackAll,
  musicSlider,
} from './request';

export default {
  data() {
    return {
      songList: [],
      songList1: [],
      data: [],
      music: [],
      terent: true,
      display: false,
      switchCheckStatus: null,
    };
  },
  async created() {
    this.data = await playlistTrackAll(
      this.$route.query.id.replace(':id=', '')
    ); 
    songDetails(this.$route.query.id).then((res) => {
      this.songList = res.data.playlist;
      
      
    });
    songInfo(this.$route.query.id).then((res) => {
      this.songList1 = res.data.songs;
      store.set('songInfoMusic', this.data.data.songs);
      console.log(this.songList1);
    });

    musicSlider(this.$route.query.id).then((res) => {
      this.music = res.data.playlists;
    });
    //全局变黑
    this.switchCheckStatus = store.get('switch');
  },
  methods: {
    playAll() {
      window.$player.replacePlaylist(
        this.songList1.map((song) => song.id),
        '',
        ''
      );
    },
    playAdd(item) {
      window.$player.replacePlaylist(
        this.songList1.map((song) => song.id),
        '',
        '',
        item.id
      );
    },
    lb() {
      this.terent = !this.terent;
      this.display = !this.display;
    },
    lb1() {
      this.terent = !this.terent;
      this.display = !this.display;
    },
  },
};
</script>
<style>
.sticky {
  position: sticky;
  top: 9.2vw;
  background: #fff;
}

.lunbo::-webkit-scrollbar {
  height: 0px;
  width: 20px;
}
</style>
