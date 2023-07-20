<template>
  <div :class="{ dark: switchCheckStatus }">
    <div
      class="w-screen bg-[#F8F9FD] text-[#000] mt-0 overflow-hidden dark:bg-[#1A1A22] dark:text-[#fff]"
    >
      <div
        class="w-[92.3vw] mx-auto bg-[#F8F9FD] overflow-hidden dark:bg-[#1A1A22]"
      >
        <!-- 搜索栏 -->
        <div
          class="flex justify-center items-center pt-[3vw] w-[92.3vw] mx-auto relative"
        >
          <div class="mr-[3vw]">
            <router-link :to="{ path: '/WangyiView' }">
              <Icon
                icon="tabler:arrow-up"
                width="38"
                :rotate="3"
                class="pl-[2vw]"
              />
            </router-link>
            <router-view />
          </div>
          <input
            v-model="valuedata"
            :placeholder="placeholder"
            type="text"
            class="text-[1.2vw] border rounded-[5vw] px-4 py-2 w-[72.2vw] h-[8.7vw] pl-[10vw] dark:bg-[#313138]"
          />
          <p class="ml-[3vw] text-[1.6vw] whitespace-nowrap">搜索</p>
          <Icon
            icon="ei:search"
            width="28"
            height="28"
            class="absolute left-[15vw]"
          />
        </div>
        <div v-if="valuedata.length === 0">
          <div
            class="flex w-[92.3vw] mx-auto h-[14.2vw] mt-[3vw] justify-around items-center text-center text-[#676e79]"
          >
            <div>
              <Icon
                icon="icon-park-solid:people"
                width="30"
                height="30"
                class="text-[#fd3b46]"
              />
              <span>歌手</span>
            </div>
            <div>
              <Icon
                icon="mdi:book-music"
                width="30"
                height="30"
                class="text-[#fd3b46]"
              />
              <span>曲风</span>
            </div>
            <div>
              <Icon
                icon="solar:music-note-3-bold"
                width="30"
                height="30"
                class="text-[#fd3b46]"
              />
              <span>专区</span>
            </div>
            <div>
              <Icon
                icon="fa:microphone"
                width="30"
                height="30"
                class="text-[#fd3b46]"
              />
              <span>识曲</span>
            </div>
          </div>
          <!-- 猜你喜欢 -->
          <div class="w-[92.3vw] mx-auto mt-[4.3vw]">
            <div class="flex justify-between">
              <p class="text-[1.4vw]">猜你喜欢</p>
              <div>
                <Icon icon="mdi-light:refresh" width="25" :rotate="1" />
              </div>
            </div>
            <div class="flex mt-[2.778vw] text-[1.2vw]">
              <div
                class="bg-[#fff] rounded-[5vw] mr-[1.556vw] h-[6.947vw] w-[17.5vw] text-center leading-[6.947vw] whitespace-nowrap dark:bg-[#313139]"
              >
                郁可唯
              </div>
              <div
                class="bg-[#fff] rounded-[5vw] mr-[1.556vw] h-[6.947vw] w-[13.426vw] text-center leading-[6.947vw] whitespace-nowrap dark:bg-[#313139]"
              >
                王卓
              </div>
              <div
                class="bg-[#fff] rounded-[5vw] mr-[1.556vw] h-[6.947vw] w-[20.463vw] text-center leading-[6.947vw] whitespace-nowrap dark:bg-[#313139]"
              >
                男孩别哭
              </div>
              <div
                class="bg-[#fff] rounded-[5vw] mr-[1.556vw] h-[6.947vw] w-[23.796vw] text-center leading-[6.947vw] whitespace-nowrap dark:bg-[#313139]"
              >
                我要找到你
              </div>
            </div>
          </div>
          <!-- 排行榜 -->
          <div class="voerflow-hidden flex">
            <van-swipe :loop="false" :width="300" class="rotationChart">
              <van-swipe-item
                v-for="item in list"
                :key="item.id"
                class="w-[64.074vw] bg-[#fff] h-[200vw] rounded-[4vw] mt-[5.093vw] mr-[2vw] dark:bg-[#313139]"
              >
                <div class="w-[60.193vw] mx-auto h-[196vw]">
                  <div class="h-[12.87vw] flex items-center border-b">
                    <div class="h-[12.87vw] mr-[3.611vw]">
                      <span
                        class="text-[#283349] text-[1.2vw] leading-[12.87vw] dark:text-[#fff]"
                        >{{ item.name }}</span
                      >
                    </div>
                    <div
                      class="flex w-[12.87vw] h-[5.556vw] rounded-[5vw] bg-[#f1f4f4] items-center justify-center dark:bg-[#3A3A42]"
                    >
                      <Icon
                        icon="ion:play"
                        width="12"
                        height="12"
                        class="text-[#3c465a] dark:text-[#fff]"
                      />
                      <span class="text-[1.2vw] whitespace-nowrap">播放</span>
                    </div>
                  </div>
                  <div>
                    <ul
                      class=""
                      v-for="(item1, index) in item.tracks.slice(0, 20)"
                      :key="index.id"
                    >
                      <li
                        class="h-[9.167vw] flex text-[1.2vw] leading-[9.176vw]"
                      >
                        <p
                          :style="{ color: index < 3 ? 'red' : '#7E8590' }"
                          class="mr-[4vw]"
                        >
                          {{ index + 1 }}
                        </p>
                        <p class="truncate">{{ item1.name }}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
        <div v-else class="bg-[#F8F9FD]">
          
          <div
            v-for="item in search"
            class="h-[12vw] ml-[3.6vw] flex items-center"
          >
            <Icon
              class="text-[#000] dark:text-[#e9e9e9]"
              color="#6f778f"
              height="4.3vw"
              icon="tabler:search"
              width="4.3vw"
            />
            <div
              class="dark:border-[#282a31] dark:text-[#e7e7e8] border-b-[2px] text-[3.5vw] w-[93vw] h-[12vw] leading-[12vw] ml-[1.8vw]"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {
  fetchSeachList,
  fetchSearchDefault,
  fetchSearchResult,
} from '../request';
import store from 'storejs';
import _ from 'lodash';
export default {
  components: { fetchSeachList },
  data() {
    return {
      switchCheckStatus: null,
      list: [],
      placeholder: '', //默认搜索
      valuedata: '',
      search: [], //搜索数据
    };
  },
  watch: {
    valuedata: _.debounce(async function (keywords) {
      if (this.valuedata.length !== 0) {
        const res = await fetchSearchResult({ keywords: keywords });
        this.search = res.data.result.songs.slice(0, 30);
        console.log(this.search);
      }
    }, 100),
  },
  async created() {
    const res = await fetchSeachList();
    this.list = (await fetchSeachList()).slice(0, 10);
    console.log(this.list[0].name);
    console.log(res);
    console.log(this.list);
    this.switchCheckStatus = store.get('switch');
    const res1 = await fetchSearchDefault();
    this.placeholder = res1.data.data.showKeyword; //默认搜索
  },
};
</script>

<style>
.rotationChart .van-swipe__indicators {
  display: none;
}
</style>
