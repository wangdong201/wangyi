<template>
  <div class="relative">
    <div :style="`background-image:url(${$player._currentTrack?.al?.picUrl})`" class="blur fixed top-0 left-0 right-0 bottom-0 z-[1]"></div>
    <div class="w-screen h-screen overflow-hidden z-[4] absolute">
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
          <span class="mr-[1vw] whitespace-nowrap overflow-hidden">{{ this.$player._currentTrack.ar[0].name }}</span>
          <span class="h-[4.188vw] w-[7.863vw] bg-[#555D5A] rounded-[3px] inline-block leading-[4.188vw] whitespace-nowrap">关注</span>
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
      <div class="mt-[35vw] w-[89.829vw] mx-auto relative " v-if="!lyricsSwitching" @click="lyricsSwitching = !lyricsSwitching">
        <img src='../static/01.png' alt="" class="w-[71vw] h-[71vw] mx-auto" />
        <img
          :src="this.$player._currentTrack?.al?.picUrl"
          alt=""
          class="w-[45vw] h-[45vw] absolute top-[50%] left-1/2 rounded-[50%] border-[3px] border-[#000] rotateAnimation1"
          :class="{ 'paused-animation': !this?.$player?._playing }"
        />
        <div class="absolute w-[21.63vw] h-[35.043vw] top-[-20vw] left-[50%] translate-x-[-50%] rotated" ref="pointer" :style="!$player._playing ? `transform:rotate(-40deg)`:`transform:rotate(0deg)`">
          <img src="../static/needle-ab.png" alt="" class="w-[21.63vw] h-[35.043vw]" :class="{ 'paused-animation': !this?.$player?._playing }">
        </div>
      </div>
      <!-- 歌词 -->
      <div class="w-[100vw] h-[105vw] flex items-center flex-wrap px-[6vw] justify-center overflow-hidden relative internalShadow" v-if="lyricsSwitching" @click="lyricsSwitching = !lyricsSwitching">
        <div class="absolute top-0 transition-all duration-1000" :style="{ top: -$player.lineHieght + 'vw'}">
          <div v-for="(line, index) in $player.lyricLines" :key="index" class="text-[hsla(0,0%,88.2%,.8)] line-clamp-2 w-[100%] h-[12vw] px-[4vw] flex justify-center text-center" :style="{color:index ===  $player.lineIndex? '#000' : 'hsla(0,0%,88.2%,.7)'}">{{ line.txt }}</div>
        </div>
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
        <span>{{ songTime($player._progress) }}</span>
        <vue-slider v-model="$player.progress" :duration="0" :process="true" tooltip="none" :drag-on-click="true" :min="0" :max="$player._duration" :interval="0.1" class="flex-1 mx-[3vw]"/>
        <span>{{ songTime($player._duration) }}</span>
      </div>
      <!-- 播放组件 -->
      <div
        class="h-[16.752vw] w-[81.88vw] mx-auto flex items-center justify-between text-[#fff] mt-[6.154vw]"
      >
        <Icon icon="ps:random" width="20" height="20" />
        <Icon icon="fluent:previous-32-filled" width="20" height="20" @click.native="PreviousSong()"/>
        <div class="w-[12vw] h-[12vw] rounded-[50%]  flex items-center justify-center border-[3px]">
          <Icon :icon="`${$player._playing?'carbon:pause-filled':'ph:play-fill'}`" width="30" @click.native="playFn"/>
        </div>
        <Icon
          icon="fluent:previous-32-filled"
          width="20"
          height="20"
          :rotate="2"
          @click.native="NextSong()"
        />
        <Icon icon="foundation:indent-more" width="20" height="20" @click.native="showPopup" />
      </div>
    </div>
    
    <!-- <div class="fixed bgColor z-[2] top-0 left-0 right-0 bottom-0"></div> -->
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
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import store from 'storejs';
import {lyricText} from '../request';
import Lyric from 'lyric-parser';
export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      value:0,
      music: [],
      isRotating: false,
      show: false,
      lyricsSwitching:false,
    };
  },
  methods: {
    fn(index, id) {
      console.log(123)
      if (this.$player._currentTrack.id === id) {
        this.playSingle(this.music[index + 1].id);
      }
      this.music.splice(index, 1);
      store.set('cookie_music', this.music);
    },
      //点击替换
      playSingle(id) {
        
      this.$player.replacePlaylist(this.$player.list.map((data) => data), '', '', id);
      store.set('songInfoMusic', this.$player.list);
    },
    showPopup() {
      this.show = true;
    },
    //下
    NextSong() {
      // this.$refs.pointer.style = 'transform:rotate(-45deg)';
      setTimeout(()=>{
        // this.$player.playOrPause();
        this.$player._nextTrackCallback();
      },200)
    },
    //上
    PreviousSong() {
      setTimeout(()=>{
        if (this.$player.list.indexOf(this.$player._currentTrack.id) === 0) {
          this.playSingle(this.$player.list[this.$player.list.length - 1]);
        } else {
          this.playSingle(this.$player.list[this.$player.list.indexOf(this.$player._currentTrack.id) - 1]);
        }
      },200)
    },
    songTime(time) {
      const minutes = Math.floor(time / 60);
      return `${String(minutes).padStart(2, '0')}:${String(
          Math.floor(time % 60)
      ).padStart(2, '0')}`;
    },
    playFn() {
      this.$player.playOrPause();
    },
  },
  created() {
    this.music = store.get('songInfoMusic');
  },
};
</script>
<style scoped>
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

.rotated {
  transition: all .5s;
  transform-origin: left top;
}
.blur {
filter: blur(10px);
}

.bgColor {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
