<template>
  <div class="w-screen h-screen overflow-hidden">
    <div class="w-screen h-screen overflow-hidden bg-[#21282B]">
      <!-- 头部 -->
      <div
        class="w-[89.829vw] mx-auto text-[#fff] h-[10.256vw] flex items-center justify-between"
      >
        <div>
          <Icon
            icon="ep:arrow-up"
            width="20"
            height="20"
            :rotate="2"
            @click.native="$router.go(-1)"
          />
        </div>
        <div class="text-[2vw] w-[63.504vw] text-center">
          <p class="whitespace-nowrap overflow-hidden">
            {{ $player._currentTrack.name }}
          </p>
          <span></span>
          <span>关注</span>
        </div>
        <div>
          <Icon
            icon="ri:share-circle-line"
            width="20"
            height="20"
            class="text-[#fff]"
          />
        </div>
      </div>
      <!--播放器部分-->
      <div class="mt-[35vw] w-[89.829vw] mx-auto relative">
        <img src="./static/01.png" alt="" class="w-[71vw] h-[71vw] mx-auto" />
        <img
          :src="this.$player._currentTrack?.al?.picUrl"
          alt=""
          class="w-[45vw] h-[45vw] absolute top-[50%] left-1/2 rounded-[50%] border-[3px] border-[#000] rotateAnimation1"
        />
      </div>
      <!-- 喜欢,下载部分 -->
      <div
        class="h-[7.009vw] w-[78.12vw] mx-auto flex text-[#fff] items-center justify-between mt-[18.12vw]"
      >
        <Icon icon="icon-park-outline:like" width="20" height="20" />
        <Icon
          icon="streamline:interface-download-circle-arrow-circle-down-download-internet-network-server-upload"
          width="20"
          height="20"
        />
        <Icon icon="iconoir:emoji-sing-right-note" width="20" height="20" />
        <Icon icon="bx:message-detail" width="20" height="20" />
        <Icon icon="ri:more-2-line" width="20" height="20" />
      </div>
      <!-- 进度条 -->
      <div
        class="w-[91.026vw] mx-auto flex items-center justify-between text-[2vw] mt-[10vw] text-[#fff]"
      >
        <span>00:00</span>
        <div class="w-[67.444vw]">
          <vue-slider v-model="value" :process="false"></vue-slider>
        </div>
        <span>04:16</span>
      </div>
      <!-- 播放组件 -->
      <div
        class="h-[16.752vw] w-[81.88vw] mx-auto flex items-center justify-between text-[#fff] mt-[6.154vw]"
      >
        <Icon icon="ps:random" width="20" height="20" />
        <Icon icon="fluent:previous-32-filled" width="20" height="20" />
        <Icon :icon= "`${$player._playing ? 'carbon:pause-filled' : 'ph:play-fill'}`" width="50" height="50" @click.native="playFn"/>
        <Icon
          icon="fluent:previous-32-filled"
          width="20"
          height="20"
          :rotate="2"
        />
        <Icon icon="foundation:indent-more" width="20" height="20" />
      </div>
    </div>
  </div>
</template>
<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import store from 'storejs';
export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value: 0,
      music: [],
    };
  },
  methods: {
    playFn() {
      this.$player.playOrPause();
    },
  },
  created() {
    this.music = store.get('songInfoMusic');
    console.log(this.music);
  },
};
</script>
<style>
.rotateAnimation1 {
  animation: rotate 10s linear infinite;
}
@keyframes rotate {
  from {
    transform: translateX(-50%) translateY(-50%) rotate(0deg);
  }
  to {
    transform: translateX(-50%) translateY(-50%) rotate(360deg);
  }
}
.paused-animation {
  animation-play-state: paused;
}

</style>
