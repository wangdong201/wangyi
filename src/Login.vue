<template>
  <div class=" overflow-hidden">
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
    <div class="w-[38.8vw] h-[7.5vw] mx-auto mt-[13.8vw]">
      <img src="./static/logo.fill.svg" alt="">
    </div>
    <div class="w-[39.6vw] h-[39.6vw] mx-auto mt-[9.5vw]">
      <img :src="qrcode" alt="" />
    </div>
    <div class="w-[43.3vw] mx-auto whitespace-nowrap text-[1.2vw] mt-[10.8vw]">
      使用
      <span class="text-[#2a64b8] whitespace-nowrap">网易云音乐APP</span>
      扫码登录
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
    };
  },
  methods: {
    pollingCheck(key, interval = 1000) {
      const timer = setInterval(async () => {
        const res = await checkQrStatus(key);
        if (res.data.code === 800) {
          alert('此二维码已过期,请刷新后重试!');
          clearInterval(timer);
        } else if (res.data.code === 803) {
          clearInterval(timer);
          console.log(res.data.cookie);
          store.set('__m__cookie', res.data.cookie);
        }
      }, interval);
      this.$on('hook:beforeDestroy', () => {
        clearInterval(timer);
      });
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
};
</script>