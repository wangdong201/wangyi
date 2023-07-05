<template>
  <div class="w-screen">
    <div class="bg-[#597BA0] w-[100%] h-[300vw]">
      <div class="w-[92.6vw] mx-auto pt-[4vw]">
        <div class="flex justify-between text-[#fff]">
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
        <!-- ----------- -->
        <div class="h-[27.8vw] mt-[7.5vw] flex justify-between text-[#fff]">
          <div class="w-[25.7vw] h-[25.7vw]">
            <img
              :src="songList.coverImgUrl"
              alt=""
              class="w-[25.7vw] h-[25.7vw] rounded-[3vw]"
            />
          </div>
          <div class="w-[63.5vw] h-[25.7vw]">
            <div class="flex h-[8.3vw] items-center justify-between">
              <p class="line-clamp-1 text-[2vw] overflow-hidden">
                {{ songList.name }}
              </p>
              <div
                class="w-[5vw] h-[5vw] rounded-[50%] bg-[#6280A1] text-center text-[#fff] flex items-center justify-center"
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
                class="h-[5.3vw] w-[11.3vw] bg-[#6283A6] rounded-[6vw] flex items-center justify-center"
              >
                <Icon icon="ic:round-add" width="20" height="20" />
                <span class="whitespace-nowrap">关注</span>
              </div>
            </div>
            <div
              class="text-[1.2vw] flex h-[4.1vw] w-[10vw] items-center mt-[4.4vw] bg-[#7D9BB7] rounded-[1vw] justify-center"
            >
              <p class="whitespace-nowrap">9.1分</p>
              <Icon icon="ic:round-greater-than" width="20" height="20" />
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
              class="h-[10.2vw] w-[29.1vw] rounded-[6vw] bg-[#7D9BB7] flex items-center justify-center"
            >
              <Icon icon="majesticons:share" width="20" height="20" />
              <span class="whitespace-nowrap overflow-hidden">{{
                songList.shareCount
              }}</span>
            </div>
            <div
              class="h-[10.2vw] w-[29.1vw] rounded-[6vw] bg-[#7D9BB7] flex items-center justify-center"
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
      <div class="bg-[#fff] rounded-[5vw] mt-[5vw]">
        <div class="w-[92.7vw] mx-auto">
          <div class="h-[10.2vw] flex items-center justify-between">
            <div
              class="flex w-[26.7vw] items-center justify-between text-[1.2vw]"
            >
              <div
                class="w-[5.4vw] h-[5.4vw] rounded-[50%] bg-[#ff4937] flex items-center justify-center text-[#fff]"
              >
                <Icon icon="basil:play-solid" width="15" height="15" />
              </div>
              <p class="whitespace-nowrap">播放全部</p>
              <p class="whitespace-nowrap">(111)</p>
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
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <div class="w-[7.8vw]">
                  <p>{{ index + 1 }}</p>
                </div>
                <div class="w-[56.5vw]">
                  <div class="flex">
                    <p class="whitespace-nowrap">
                    {{ item.name }}
                  </p>
                  <span class="whitespace-nowrap overflow-hidden text-[#ccc]">{{ item.alia }}</span>
                  </div>
                  <div class="flex">
                    <p class="whitespace-nowrap overflow-hidden text-[#ccc]">
                      {{ item.ar[0].name }} - 
                    </p>
                    <span class="whitespace-nowrap overflow-hidden text-[#ccc]">{{ item.al.name }}</span>
                  </div>
                </div>
              </div>
              <div class="flex w-[15.3vw] justify-between">
                <span class=""
                  ><Icon
                    icon="gg:play-button-r"
                    color="#b2b2b2"
                    width="20"
                    height="20"
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
</template>

<script>
import { songDetails, songInfo } from './request';

export default {
  data() {
    return {
      songList: [],
      songList1: [],
    };
  },
  async created() {
    songDetails(this.$route.query.id).then((res) => {
      console.log(res);
      this.songList = res.data.playlist;
      console.log(this.songList);
    });
    songInfo(this.$route.query.id).then((res) => {
      console.log(res);
      this.songList1 = res.data.songs;
      console.log(this.songList1);
    });
  },
};
</script>
