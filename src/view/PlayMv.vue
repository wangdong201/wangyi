<template>
  <div>
    <div class="w-screen h-[100vh] bg-[#000000] pt-[3vw]">
      <!-- 头部 -->
      <div
        class="text-[#fff] w-[90.463vw] mx-auto flex items-center justify-between"
      >
        <Icon
          icon="lucide:arrow-left"
          width="25"
          @click.native="$router.push('/Mv')"
        />
        <div class="flex w-[16.574vw] justify-between">
          <Icon icon="mdi-light:fullscreen" width="25" :rotate="2" />
          <Icon icon="ri:more-2-line" width="25" />
        </div>
      </div>
      <!-- 视频 -->
      <div
        class="w-[100%] h-[56.296vw] mt-[25vw] relative"
        @click="togglePlayPause"
      >
        <video
          ref="videoPlayer"
          :src="currentPlaybackVideoPath"
          loop
          autoplay
        ></video>
        <Icon
          icon="ph:play-fill"
          width="60"
          v-show="playbackStatus"
          class="absolute top-[40%] left-[45%] text-[#fff]"
        />
      </div>
      <!-- 头像 MV 歌曲名 点赞 评论 转发 收藏-->
      <div class="flex justify-between items-end">
        <div>
          <!-- 头像 MV 歌曲名 -->
          <div
            class="text-[2vw] pl-[3vw] text-[#fff] flex items-center w-[32vw] justify-between"
          >
            <div class="w-[8.9vw] h-[8.9vw] rounded-[50%]">
              <img
                :src="currentPlayingVideoData?.artists[0]?.img1v1Url"
                alt=""
                class="w-[8.9vw] h-[8.9vw] rounded-[50%]"
              />
            </div>
            <p>{{ currentPlayingVideoData?.artists[0]?.name }}</p>
            <div
              class="w-[6.852vw] h-[5.463vw] rounded-[3vw] bg-[#FE3C3A] flex items-center justify-center"
            >
              <Icon icon="carbon:add" width="20" />
            </div>
          </div>
          <div>
            <van-collapse v-model="activeNames">
              <van-collapse-item title="" name="1">
                <template #title>
                  <div class="line-clamp-2 text-[2vw] pl-[3vw] text-[#fff]">
                    <span
                      class="inline-block w-[8.519vw] h-[4.722vw] bg-[#333333] text-[#fff] text-center leading-[4.722vw] rounded-[3px] text-[2vw]"
                      >MV</span
                    >
                    {{ currentPlayingVideoData?.name }}
                  </div>
                </template>
                {{ currentPlayingVideoData?.desc }}
              </van-collapse-item>
            </van-collapse>
          </div>
        </div>
        <div
          class="w-[12.87vw] text-[#fff] text-[2vw] flex flex-col justify-between items-center"
        >
          <div class="mb-[4vw]">
            <Icon icon="bxs:like" width="25" />
            <span>{{
              dataTruncation(currentVideoInteractionData?.likedCount)
            }}</span>
          </div>
          <div class="mb-[4vw]">
            <Icon icon="icon-park-solid:message" width="25" />
            <span>{{
              dataTruncation(currentVideoInteractionData?.commentCount)
            }}</span>
          </div>
          <div class="mb-[4vw]">
            <Icon icon="majesticons:share" width="25" />
            <span>{{
              dataTruncation(currentVideoInteractionData?.shareCount)
            }}</span>
          </div>
          <div class="mb-[4vw]">
            <Icon icon="fluent:collections-20-filled" width="25" />
            <span>收藏</span>
          </div>
        </div>
      </div>
      <!-- 滚动歌名及唱片 -->
      <div
        class="h-[10.833vw] flex items-center text-[#fff] justify-between px-[3vw]"
      >
        <div class="flex items-center">
          <Icon icon="ph:music-note-fill" width="20" />
          <van-notice-bar
            scrollable
            :text="currentPlayingVideoData?.name"
            class="w-[34vw]"
            :speed="20"
          />
          <Icon icon="icon-park-outline:like" width="20" />
        </div>
        <div class="relative flex items-center justify-center">
          <img
            src="../static/01.png"
            alt=""
            class="w-[10vw] h-[10vw] rounded-[50%]"
          />
          <img
            :src="currentPlayingVideoData?.cover"
            alt=""
            class="w-[7vw] h-[7vw] rounded-[50%] absolute rotateAnimation"
          />
        </div>
      </div>
      <!-- 进度条 -->
      <vue-slider
        v-model="progress"
        :process="true"
        tooltip="none"
        :drag-on-click="true"
        :min="0"
        :max="100"
        :interval="0.1"
        :duration="0"
        class="videoProgressBar"
        @dragging="handleProgressChange"
      ></vue-slider>
      <div
        class="px-[3vw] text-[2vw] text-[#333333] flex items-center justify-between"
      >
        <p>发条评论结识有趣的人</p>
        <Icon icon="ci:expand" width="20" :rotate="1" />
      </div>
    </div>
  </div>
</template>
<script>
import VueSlider from 'vue-slider-component';
import 'vue-slider-component/theme/default.css';
import { featMvUrl, featMvDetail, featMvDetailInfo } from '../request';
import Plyr from 'plyr';
import 'plyr/dist/plyr.css';
export default {
  components: {
    VueSlider,
  },
  data() {
    return {
      border: false,
      activeNames: ['1'],
      playbackStatus: false, // 播放状态
      plyrOptions: {
        // 播放器实例规则
        controls: [],
      },
      activeNames: [1],
      currentPlaybackVideoPath: null, //当前播放视频路径
      currentPlayingVideoData: null, // 当前播放视频数据 作者信息等
      currentVideoInteractionData: null, //当前播放视频交互数据
      player: null, // 播放器实例
      progress: 0, // 进度
      touchTheProgressBar: false, // 触摸进度条
    };
  },
  async created() {
    // 视频
    const res1 = await featMvUrl(this.$route.params.id);
    this.currentPlaybackVideoPath = res1.data.data.url;
    console.log(this.currentPlaybackVideoPath);

    // 作者信息等
    const res2 = await featMvDetail(this.$route.params.id);
    this.currentPlayingVideoData = res2.data.data;
    console.log(this.currentPlayingVideoData);

    // 交互数据
    const res3 = await featMvDetailInfo(this.$route.params.id);
    this.currentVideoInteractionData = res3.data;
  },
  mounted() {
    this.initPlayer();
    this.$player.playOrPause();
  },
  beforeDestroy() {},
  methods: {
    dataTruncation(playVolume) {
      if (playVolume > 100000000) {
        return `${Math.floor(playVolume / 100000000)}亿`;
      } else if (playVolume > 10000) {
        return `${Math.floor(playVolume / 10000)}万`;
      } else {
        return playVolume?.toString();
      }
    },
    initPlayer() {
      this.player = new Plyr(this.$refs.videoPlayer, this.plyrOptions);
      // 监听 Plyr 播放器的时间更新事件
      this.player.on('timeupdate', this.handleTimeUpdate);
    },
    // 计算进度 获取 当前播放时间于总时长
    handleTimeUpdate(event) {
      // 根据 Plyr 播放器的当前时间更新进度条
      this.progress =
        (event.detail.plyr.currentTime / event.detail.plyr.duration) * 100;

      this.currentPlaybackDuration = this.formatTime(
        event.detail.plyr.currentTime
      ); //当前播放时长
      this.currentTotalPlaybackDuration = this.formatTime(
        event.detail.plyr.duration
      ); //当前播放总时长
    },
    handleProgressChange() {
      // 根据进度条的值计算视频的播放时间
      const currentTime = (this.progress / 100) * this.player.duration;

      // 更新 Plyr 播放器的当前时间
      this.player.currentTime = currentTime;

      // 切换为播放状态
      this.player.play();
      this.playbackStatus = false;
    },
    togglePlayPause() {
      if (this.player.playing) {
        this.player.pause();
        this.playbackStatus = true;
      } else {
        this.player.play();
        this.playbackStatus = false;
      }
    },
    // 将时间格式化为分钟和秒钟的形式（例如：01:30）
    formatTime(time) {
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      return `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`;
    },
  },
};
</script>
<style>
.van-cell__title,
.van-cell,
.van-collapse-item__wrapper,
.van-collapse-item__content {
  background-color: #000;
  width: 75.278vw;
}
.van-cell {
  padding: 0vw;
}
.van-collapse-item__content {
  height: 39.87vw;
  overflow-y: auto;
  padding: 0vw;
  padding-left: 3vw;
}
.van-icon {
  background-color: #000;
}
.van-hairline--top-bottom::after,
.van-cell::after {
  border: none;
}
.van-cell--clickable:active {
  background-color: #000;
}
.van-collapse-item__wrapper {
  overflow: hidden;
}
.van-notice-bar,
.van-notice-bar__wrap {
  background-color: #000;
}
.vue-slider-process {
  background-color: #fff;
}

.rotateAnimation {
  animation: rotate 5s linear infinite;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
