<template>
  <div>
    <div
      class="w-screen px-[4.5vw] bg-[#F9F9FA] h-[12.5vw] border-b-[1px] border-[#F5F8FA] flex items-center"
    >
      <router-link :to="{ path: '/MusicPlayback' }">
        <div
          class="w-[10vw] h-[10vw] relative flex items-center justify-center rotateAnimation"
          :class="{ 'paused-animation': !this?.$player?._playing }"
        >
          <img
            src="/static/01.png"
            alt=""
            class="absolute top-0 left-0 z-[1]"
          />
          <img
            class="w-[7vw] h-[7vw] rounded-[50%] "
            :src="this.$player._currentTrack?.al?.picUrl"
            alt=""
           
          />
        </div>
      </router-link>
      <div
        class="text-[3vw] w-[60vw] text-ellipsis overflow-hidden whitespace-nowrap ml-[2vw]"
      >
        <span class="text-[#3E485E]">{{
          this.$player._currentTrack.name
        }}</span>
        <span
          class="text-[#7B8591]"
          v-if="Array.isArray(this.$player._currentTrack?.ar)"
          >-{{ this.$player._currentTrack.ar[0].name }}</span
        >
      </div>
      <div class="w-[5.6vw] h-[5.6vw] relative ml-[2.2vw]">
        <van-circle
          v-model="currentRate"
          :rate="0"
          :speed="100"
          size="5.6vw"
          :stroke-width="120"
          color="#475165"
          layer-color="#C7CBD2"
        />
        <Icon
          :icon="`${$player._playing ? 'carbon:pause-filled' : 'ph:play-fill'}`"
          width="11px"
          class="top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] absolute text-[#000]"
          @click.native="playFn"
        />
      </div>
      <!-- 播放列表 -->
      <div @click="showPopup">
        <Icon
          icon="foundation:indent-more"
          width="20"
          height="20"
          class="text-[6vw] text-[#3b4152] ml-[4.5vw]"
        />
      </div>
    </div>
    <!-- 播放列表内容 -->
    <van-popup
      v-model="show"
      position="bottom"
      round
      :style="{ height: '60%' }"
    >
      <div class="mt-[5.47vw] pl-[4.701vw]">
        当前播放
        <span class="text-[2vw] text-[##ACACAC]">({{ music.length }})</span>
      </div>
      <div class="h-[15.068vw] border-b flex items-center justify-between">
        <div class="flex px-[4.701vw]">
          <Icon
            icon="icon-park-outline:loop-once"
            width="20"
            height="20"
            class="text-[#ACACAC]"
          />
          <span class="text-[2vw] text-[#ACACAC] pl-[2vw]">列表循环</span>
        </div>
        <div
          class="text-[#ACACAC] flex w-[31.026vw] px-[4.701vw] justify-between"
        >
          <Icon
            icon="streamline:interface-download-button-1-arrow-button-down-download-internet-network-server-upload"
            width="20"
            height="20"
          />
          <Icon icon="icon-park-outline:add" width="20" height="20" />
          <Icon icon="uiw:delete" width="20" height="20" />
        </div>
      </div>
      <div class="flex h-[13.504vw] border-b items-center justify-between">
        <div class="pl-[4.701vw] text-[2vw]">
          <p class="whitespace-nowrap">根据当前列表在下方推荐你喜欢的歌曲</p>
        </div>
        <div class="px-[4.701vw]">
          <div class="w-[7.35vw] h-[4.4vw] bg-[#E54F42] rounded-[4vw] relative">
            <div
              class="h-[4.359vw] w-[4.017vw] rounded-[50%] bg-[#FDFEFF] absolute right-[0vw]"
            ></div>
          </div>
        </div>
      </div>
      <div
        v-for="item in music"
        class="h-[13.504vw] flex items-center justify-between pl-[4.701vw]"
      >
        <div class="text-[2vw]">
          <span>{{ item.name }}-</span>
          <span class="text-[#ACACAC]">{{ item.ar[0].name }}</span>
        </div>
        <div class="px-[4.701vw] text-[#ACACAC]">
          <Icon
            icon="fluent-mdl2:status-circle-error-x"
            width="20"
            height="20"
          />
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import store from 'storejs';
export default {
  data() {
    return {
      currentRate: 0,
      show: false,
      music: [],
      isRotating: false, // 控制旋转状态
    };
  },
  methods: {
    playFn() {
      this.$player.playOrPause();
    },
    showPopup() {
      this.show = true;
    },
  },
  created() {
    this.music = store.get('songInfoMusic');
  },
};
</script>
<style>
.rotateAnimation {
  animation: rotate 5s linear infinite;
}
.paused-animation {
  animation-play-state: paused;
}

@keyframes rotate  {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

</style>
