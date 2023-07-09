<template>
  <div class="overflow-hidden">
    <div
      class="w-[88.7vw] h-[7.6vw] mt-[3vw] mx-auto text-[2.1vw] flex items-center justify-between"
    >
      <router-link :to="{ path: '/WangyiView' }">
        <div>
          <Icon icon="uiw:left" width="20" height="20" />
        </div>
      </router-link>
      <router-view />
      <p class="text-[#6e6e6e]">游客登录</p>
    </div>
    <!-- 未登录 -->
    <div v-if="tert">
      <div class="w-[38.8vw] h-[7.5vw] mx-auto mt-[13.8vw]">
        <img src="./static/logo.fill.svg" alt="" />
      </div>
      <div class="w-[39.6vw] h-[39.6vw] mx-auto mt-[9.5vw]">
        <img :src="qrcode" alt="" />
      </div>
      <div
        class="w-[43.3vw] mx-auto whitespace-nowrap text-[1.2vw] mt-[10.8vw]"
      >
        使用
        <span class="text-[#2a64b8] whitespace-nowrap">网易云音乐APP</span>
        扫码登录
      </div>
    </div>
    <!-- 扫码成功 -->
    <div v-if="gent">
      <div class="w-[38.8vw] h-[25.5vw] mx-auto mt-[13.8vw]">
        <img src="./static/logo.fill.svg" alt="" />
      </div>
      <div class="w-[38.7vw] mx-auto">
        <img src="./static/05.png" alt="" />
      </div>
      <div
        class="w-[19.2vw] mx-auto whitespace-nowrap text-[5.2vw] mt-[10.8vw]"
      >
        扫描成功
      </div>
      <div class="w-[33.1vw] mx-auto whitespace-nowrap mt-[5.8vw]">
        请在手机上确认登录
      </div>
    </div>
    <!-- 二维码失效 -->
    <div v-if="roune">
      <div class="w-[38.8vw] h-[7.5vw] mx-auto mt-[13.8vw]">
        <img src="./static/logo.fill.svg" alt="" />
      </div>
      <div class="w-[39.6vw] h-[39.6vw] mx-auto mt-[9.5vw] relative">
        <img :src="qrcode" alt="" />
        <div
          class="w-[39.6vw] h-[39.6vw] bg-[#ccc] opacity-50 absolute bottom-0"
        ></div>
        <div
          class="w-[20.6vw] h-[7.7vw] rounded-[6vw] absolute bg-gradient-to-r from-[#fc5734] to-[#f31928] left-[25%] top-[40%] text-[1.2vw] text-center leading-[7.7vw] z-10"
        >
          点击刷新
        </div>
      </div>
      <div
        class="w-[43.3vw] mx-auto whitespace-nowrap text-[1.2vw] mt-[10.8vw]"
      >
        使用
        <span class="text-[#2a64b8] whitespace-nowrap">网易云音乐APP</span>
        扫码登录
      </div>
    </div>

    <div class="bottom-0 absolute">
      <img src="./static/04.png" alt="" />
    </div>
  </div>
</template>
<script>
import { getQrKey, getQrInfo, checkQrStatus } from '@/request';
import store from 'storejs';
export default {
  name: 'Login',
  data() {
    return {
      qrcode: '',
      tert: true,
      gent: false,
      roune: false,
    };
  },
  methods: {
    pollingCheck(key, interval = 1000) {
      const timer = setInterval(async () => {
        const res = await checkQrStatus(key);
        if (res.data.code === 800) {
          this.roune = true;
          this.tert = false;
          clearInterval(timer);
        } else if (res.data.code === 802) {
          this.tert = false;
          this.gent = true;
        } else if (res.data.code === 803) {
          this.$router.push('/WangyiView');
          clearInterval(timer);
          store.set('__m__cookie', res.data.cookie);
          const userData = await getUserDetail(user.data.account.id);
          store.set('__m__UserData', userData.data);
        }
      }, interval);

      this.$on('hook:beforeDestroy', () => clearInterval(timer));
    },
    nll() {
      this.tert = !this.tert;
      this.gent = !this.gent;
    },
    qce() {
      this.tert = !this.tert;
      this.gent = !this.gent;
    },
    cert() {
      this.roune = !roune;
    },
  },
  async created() {
    const res = await getQrKey().catch((err) => {
      console.log(err);
    });
    const qrInfo = await getQrInfo(res.data.data.unikey).catch((err) =>
      console.log(err)
    );
    this.qrcode = qrInfo.data.data.qrimg;
    this.pollingCheck(res.data.data.unikey);
  },
  //页面销毁前执行的函数
  beforeDestroy() {
    console.log('beforeDestroy');
  },
};
</script>
