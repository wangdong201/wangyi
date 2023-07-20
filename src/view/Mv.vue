<template>
  <div>
    <div class="w-screen overflow-hidden">
      <!-- 头部 -->
      <div
        class="w-[91.709vw] h-[6.838vw] mx-auto flex items-center mt-[6.325vw]"
      >
        <router-link :to="{ path: '/WangyiView' }">
          <div class="w-[34.359vw]">
            <Icon icon="uiw:left" width="25" height="25" />
          </div>
        </router-link>
        <div>
          <p>Mv排行榜</p>
        </div>
      </div>
      <!-- 排行 -->
      <van-tabs class="mt-[7.009vw]" @click="tab">
        <van-tab v-for="(item, index) in tabs" :title="item">
          <div class="flex pl-[4.103vw] mt-[5.726vw] items-center">
            <p>最近更新:今天</p>
            <Icon
              icon="mdi:warning-circle-outline"
              width="20"
              height="20"
              :rotate="2"
              class="text-[#ccc]"
            />
          </div>
          <div
            class="w-[91.795vw] mx-auto mt-[6.838vw]"
            v-for="(item, index) in OndataList"
          >
            <div
              class="w-[91.795vw] h-[51.538vw] relative"
              @click="$router.push(`/PlayMv/${item.id}`)"
            >
              <img
                :src="item.cover"
                alt=""
                class="w-[91.795vw] h-[51.538vw] rounded-[3vw]"
              />
              <div
                class="absolute text-[#fff] top-[1.5vw] right-[3vw] flex items-center"
              >
                <Icon icon="basil:play-outline" width="15" />
                <p class="whitespace-nowrap">
                  {{ dataTruncation(item.playCount) }}
                </p>
              </div>
            </div>
            <div class="h-[9.402vw] mt-[2.65vw] flex items-center">
              <div
                class="h-[9.402vw] w-[8.889vw] text-center leading-[9.402vw] text-red-500"
              >
                {{ Num(item.lastRank) }}
              </div>
              <div class="w-[75vw] overflow-hidden">
                <p
                  class="whitespace-nowrap overflow-ellipsis overflow-hidden pl-[2vw]"
                >
                  {{ item.name }}
                </p>
                <p>
                  - <span class="text-[2vw]">{{ item.artistName }}</span>
                </p>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import { Mv } from '../request';
export default {
  data() {
    return {
      OndataList: [],
      //   active: 0,
      tabs: ['内地', '港台', '欧美', '韩国', '日本'],
      initial: '内地',
    };
  },
  methods: {
    Num(num) {
      if (num < 10) {
        num = '0' + num;
      }
      return num;
    },
    dataTruncation(playVolume) {
      if (playVolume > 100000000) {
        return `${Math.floor(playVolume / 100000000)}亿`;
      } else if (playVolume > 100000) {
        return `${Math.floor(playVolume / 10000)}万`;
      } else {
        return playVolume.toString();
      }
    },
    tab(name, title) {
      this.initial = title;
    },
  },
  async created() {
    const res = await Mv(this.initial);
    this.OndataList = res.data.data;
    console.log(this.OndataList);
  },
  watch: {
    initial(value) {
      this.initial = value;
      Mv(value).then((res) => {
        console.log(res);
        this.OndataList = res.data.data;
      });
    },
  },
};
</script>
