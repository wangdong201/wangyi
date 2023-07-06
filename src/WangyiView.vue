<template>
  <div :class="{ dark: switchCheckStatus }">
    <div
      class="w-screen voerflow-hidden bg-[#F8F9FD] text-[#000] dark:bg-gray-900 dark:text-[#fff]"
    >
      <!-- 头部 -->
      <div
        class="fixed top-0 bg-[#fff] p-4 w-full z-[22] h-[14vw] voerflow-hidden dark:bg-gray-900"
      >
        <div class="flex justify-center items-center relative">
          <div @click="drawerVisible = !drawerVisible">
            <Icon icon="basil:menu-solid" width="35" height="35" />
          </div>
          <router-link :to="{ path: '/SearchView' }">
          <input
            type="text"   
            placeholder="男孩别哭"
            class="border rounded-[5vw] px-4 py-2 w-[75vw] text-center h-[8.7vw] dark:bg-[#2c2e35]"
          />
        </router-link>
        <router-view />
          <Icon icon="system-uicons:microphone" width="35" height="35" />
          <Icon
            icon="ei:search"
            width="30"
            height="30"
            class="absolute left-[15vw]"
          />
          <Icon
            icon="tabler:scan"
            width="25"
            class="absolute right-[15vw] text-[#ccc]"
          />
        </div>
      </div>
      <!-- 轮播 -->
      <div
        class="flex justify-center items-center overflow-hidden w-[91vw] mx-auto"
      >
        <van-swipe
          class="w-[91vw] my-swipe mt-[21vw] rounded-[3vw] overflow-hidden mx-auto"
          :autoplay="3000"
          indicator-color="white"
        >
          <van-swipe-item v-for="item in banners" :key="item.id">
            <img :src="item.pic" alt="" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 菜单 -->
      <div
        class="mt-[6vw] w-[89.5vw] mx-auto overflow-hidden scroll-wrapper"
        ref="scroll"
      >
        <Topview
          class="scroll-content w-[160vw]"
          ref="scrollContent"
          :menulist="menulist"
        />
      </div>
      <!-- 推荐歌单 -->
      <div class="mt-[6vw] w-[89.5vw] mx-auto overflow-hidden">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span>推荐歌单</span>
            <Icon icon="ph:caret-right-light" width="15" height="15" />
          </div>
          <div @click="drawerVisiblel = !drawerVisiblel,info='推荐歌单'" >
            <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
          </div>
        </div>
        <div class="scroll-wrapper" ref="scroll_1">
          <div class="w-[210vw] flex">
            <div class="w-[31vw] h-[31vw] mr-[2vw] mt-[3vw]">
              <div
                class="w-[31vw] h-[31vw] border-[1px] overflow-hidden relative rounded-[3vw]"
              >
                <div
                  class="absolute top-[4%] right-[8%] font-[800] text-[#fff] flex items-center z-30"
                >
                  <Icon
                    icon="ion:infinite-outline"
                    class="text-[#fff] w-[6vw] h-[6vw]"
                  />
                </div>
                <transition
                  name="abc"
                  v-for="(item, index) in resources"
                  :key="item.id"
                >
                  <div
                    v-if="visibleAA === index"
                    class="absolute top-0 left-0&quot;"
                  >
                    <img
                      :src="item.uiElement.image.imageUrl"
                      alt=""
                      class="w-[32vw] h-[32vw] rounded-[3vw]"
                    />
                  </div>
                </transition>
              </div>
              <p class="text-[1.2vw] text-[#3E4759] scroll-item line-clamp-2 dark:text-[#fff]">
                {{ resourceData }}
              </p>
            </div>

            <RecommendView
              :recommend="recommend"
              class="scroll-content flex overflow-hidden mt-[3vw] scroll-content w-[210vw] text-[1.2vw]"
              ref="scrollContent"
            >
            </RecommendView>
          </div>
        </div>
      </div>
      <!-- 新歌新碟/数字专辑 -->
      <div class="mt-[5vw] w-[89.5vw] mx-auto overflow-hidden">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span>新歌新碟/数字专辑</span>
            <Icon icon="ph:caret-right-light" width="15" height="15" />
          </div>
          <div @click="drawerVisiblel = !drawerVisiblel,info='新歌新碟'" >
            <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
          </div>
        </div>
        <div
          class="scroll-wrapper mt-[7vw] overflow-hidden h-[53vw]"
          ref="scroll_2"
        >
          <SongView class="flex w-[247vw] h-[50vw] flex-wrap" :song="song" />
        </div>
      </div>
      <!-- 排行榜 -->
      <div
        class="mt-[5vw] w-[89.5vw] mx-auto overflow-hidden bg-[#F8F9FD] rounded-[3vw] dark:bg-gray-900"
      >
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span>排行榜</span>
            <Icon icon="ph:caret-right-light" width="15" height="15" />
          </div>
          <div @click="drawerVisiblel = !drawerVisiblel,info='排行榜'" >
            <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
          </div>
        </div>
        <div class="overflow-hidden scroll-wrapper mt-[7vw]" ref="scroll_3">
          <RakingView class="flex flex-wrap w-[558vw]" :raking="raking" />
        </div>
      </div>
      <!-- 热门话题 -->
      <div class="mt-[7vw] w-[89.5vw] mx-auto overflow-hidden">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span>热门话题</span>
            <Icon icon="ph:caret-right-light" width="15" height="15" />
          </div>
          <div @click="drawerVisiblel = !drawerVisiblel,info='热门话题'" >
            <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
          </div>
        </div>
        <div class="overflow-hidden scroll-wrapper mt-[7vw]" ref="scroll_4">
          <ul class="w-[350vw] flex mb-[6.31vw] scroll-content">
            <li
              v-for="item in 5"
              :key="item.id"
              class="relative bg-[#AC9485] w-[68vw] h-[28vw] rounded-[3vw] py-[4vw] px-[3vw] mr-[2.83vw]"
            >
              <div class="flex items-center">
                <Icon
                  icon="uil:comment-chart-line"
                  color="white"
                  class="w-[5vw] h-[5vw] mr-[2vw]"
                />

                <h4 class="text-[4vw] text-[#fff]">音乐节</h4>
              </div>

              <p class="text-[2.6vw] text-[#D7D7D7]">182万热度</p>

              <p class="text-[2.6vw] text-[#fff] w-[40vw] mt-[2vw]">
                BMTH_official:什么是[全场大合唱]
              </p>
              <img
                src="https://p4.music.126.net/em_fXgUJDApoV_3_8HYkNg==/109951164362973668.jpg"
                alt=""
                class="w-[13.75vw] h-[13.75vw] rounded-[12px] absolute right-[2.9vw] bottom-[2.9vw]"
              />
            </li>
          </ul>
        </div>
      </div>
      <!-- 日历 -->
      <div class="mt-[7vw] w-[89.5vw] mx-auto overflow-hidden">
        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <span>音乐日历</span>
            <Icon icon="ph:caret-right-light" width="15" height="15" />
          </div>
          <div @click="drawerVisiblel = !drawerVisiblel,info='音乐日历'" >
            <Icon icon="solar:menu-dots-bold" color="#9097a2" :rotate="1" />
          </div>
        </div>
        <div class="dark:bg-[#27272F] rounded-[10px] w-[89.5vw] h-[35vw]">
          <McView class="ml-[8px]" :music="music" />
        </div>
      </div>
      <!-- 抽屉1 -->
      <Drawer :visible.sync="drawerVisible" direction="ltr">
        <template #header>
          <!-- 用户信息 -->
          <div
            class="overflow-hidden w-[76.6vw] mx-auto h-[10vw] flex items-center justify-between fixed bg-[#fff] dark:bg-gray-900"
          >
            <div class="flex items-center">
              <div class="rounded-[50%] w-[7.5vw] h-[7.5vw]">
                <img src="../tx.png" alt="" class="rounded-[50%] w-[7.5vw] h-[7.5vw]">
              </div>
              <router-link :to="{ path: '/Login' }">
              <p class="pl-[1vw] text-[1.23vw]">点击登录</p>
              </router-link>
              <router-view />
              <Icon icon="ph:caret-right-light" width="15" height="15" />
            </div>
            <div>
              <Icon icon="tabler:scan" width="35" class="text-[#000]" />
            </div>
          </div>
        </template>
        <div
          class="w-[100%] h-[431vw] bg-[#F5F5F5] dark:bg-gray-900 dark:text-[#fff] mt-[12vw] overflow-hidden"
        >
          <!-- vip卡 -->
          <div
            class="h-[29.1vw] w-[76.6vw] bg-gradient-to-r from-[#3C3A38] to-[#5B504C] rounded-[4vw] mt-[5vw] mx-auto"
          >
            <div class="h-[13vw] w-[68vw] my-[3vw] mx-auto pt-[3vw]">
              <div class="flex justify-between">
                <p
                  class="leading-[6.7vw] text-[#FDE4DD] font-bold text-[3.2vw]"
                >
                  黑胶VIP·壹
                </p>
                <div
                  class="w-[17.8vw] h-[6.7vw] rounded-[6vw] text-center border leading-[6.7vw] text-[#FDE4DD] border-[#FDE4DD] text-[1.2vw]"
                >
                  会员中心
                </div>
              </div>
              <div class="text-[#998783] text-[1.2vw]">黑胶有效期仅剩3天</div>
            </div>
            <div
              class="h-[10.8vw] w-[68vw] pt-[3vw] flex mx-auto justify-between border-t border-[#FDE4DD]"
            >
              <p class="text-[#998783] text-[1.2vw]">
                您的黑胶VIP即将到期,点击立即续费
              </p>
              <!-- <div class="w-[5.8vw] h-[5.8vw] bg-pink-400"></div> -->
            </div>
          </div>
          <!-- 我的消息 -->
          <div
            class="w-[76.6vw] h-[38.7vw] mx-auto mt-[3.7vw] bg-[#FFFFFF] rounded-[3vw] dark:bg-[#2c2c2c] dark:text-[#fff]"
          >
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] border-b mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="ion:mail-outline" width="28" />
                <span class="pl-[3.6vw]">我的消息</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] border-b mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="iconamoon:cloud-remove-light" width="28" />
                <span class="pl-[3.6vw]">云贝中心</span>
              </div>
              <div class="flex items-center">
                <span class="text-[#ccc] text-[1.2vw]">签到</span>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon
                  icon="streamline:interface-lighting-light-bulb-on-lighting-light-shine-incandescent-bulb-lights"
                  width="28"
                />
                <span class="pl-[3.6vw]">创作者中心</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
          </div>
          <!-- 音乐服务 -->
          <div
            class="w-[76.6vw] mx-auto mt-[3.7vw] bg-[#FFFFFF] rounded-[3vw] dark:bg-[#2c2c2c] dark:text-[#fff]"
          >
            <div class="w-[67.8vw] h-[10vw] border-b mx-auto">
              <span class="pl-[1.6vw] leading-[10vw] text-[#ccc]"
                >音乐服务</span
              >
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon
                  icon="streamline:religion-hexagram-star-jew-jewish-judaism-hexagram-culture-religion-david"
                  width="28"
                />
                <span class="pl-[3.6vw]">趣测</span>
              </div>
              <div class="flex items-center">
                <span class="text-[#ccc] text-[1.2vw]">点击查看今日运势</span>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="ion:ticket-outline" width="28" />
                <span class="pl-[3.6vw]">云村有票</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="fluent:cube-20-regular" width="28" />
                <span class="pl-[3.6vw]">多多西西口袋</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="icon-park-outline:shopping-bag" width="28" />
                <span class="pl-[3.6vw]">商城</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="ph:heartbeat" width="28" />
                <span class="pl-[3.6vw]">Beat专区</span>
              </div>
              <div class="flex items-center">
                <span class="text-[#ccc] text-[1.2vw]">顶尖制作邀你创作</span>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="tabler:bell-ringing-2" width="28" />
                <span class="pl-[3.6vw]">口袋彩铃</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="icon-park-outline:gamepad" width="28" />
                <span class="pl-[3.6vw]">游戏专区</span>
              </div>
              <div class="flex items-center">
                <span class="text-[#ccc] text-[1.2vw]">音乐浇灌治愈花园</span>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
          </div>
          <!-- 其他 -->
          <div
            class="w-[76.6vw] mx-auto mt-[3.7vw] bg-[#FFFFFF] rounded-[3vw] dark:bg-[#2c2c2c] dark:text-[#fff]"
          >
            <div class="w-[67.8vw] h-[10vw] border-b mx-auto">
              <span class="pl-[1.6vw] leading-[10vw] text-[#ccc]">其他</span>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="ph:nut-light" width="28" height="28" />
                <span class="pl-[3.6vw]">设置</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto "
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon
                  icon="fluent:weather-moon-16-regular"
                  width="28"
                  height="28"
                  :rotate="1"
                />
                <span class="pl-[3.6vw]">深色模式</span>
                <t-switch
                  :value="switchCheckStatus"
                  @input="(e) => (switchCheckStatus = e)"
                  class=" dark:bg-[#fc0f0f]"
                />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="mingcute:alarm-2-line" width="28" height="28" />
                <span class="pl-[3.6vw]">定时关闭</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon
                  icon="streamline:shopping-catergories-shirt-clothing-t-shirt-men-top"
                  width="28"
                  height="28"
                />
                <span class="pl-[3.6vw]">个性装扮</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="iconoir:headset-charge" width="28" height="28" />
                <span class="pl-[3.6vw]">边听边存</span>
              </div>
              <div class="flex items-center">
                <span class="text-[#ccc] text-[1.2vw]">未开启</span>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon
                  icon="icon-park-outline:radio-one"
                  width="28"
                  height="28"
                />
                <span class="pl-[3.6vw]">在线听歌免流量</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="ph:prohibit-light" width="28" height="28" />
                <span class="pl-[3.6vw]">音乐黑名单</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="icon-park-outline:protect" width="28" height="28" />
                <span class="pl-[3.6vw]">青少年模式</span>
              </div>
              <div class="flex items-center">
                <span class="text-[#ccc] text-[1.2vw]">未开启</span>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="pepicons-pencil:alarm" width="28" height="28" />
                <span class="pl-[3.6vw]">音乐闹钟</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
          </div>
          <!-- ---------------->
          <div
            class="w-[76.6vw] mx-auto mt-[3.7vw] bg-[#FFFFFF] rounded-[3vw] dark:bg-[#2c2c2c] dark:text-[#fff]"
          >
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="pepicons-pencil:file" width="28" />
                <span class="pl-[3.6vw]">我的订单</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="ion:ticket-outline" width="28" />
                <span class="pl-[3.6vw]">优惠券</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="ph:headset" width="28" />
                <span class="pl-[3.6vw]">我的客服</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="ri:share-circle-line" width="28" />
                <span class="pl-[3.6vw]">分享网易云音乐</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="ic:outline-file-open" width="28" />
                <span class="pl-[3.6vw]">个人信息收集与使用清单</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="icons8:share" width="28" />
                <span class="pl-[3.6vw]">个人信息第三方共享清单</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="carbon:ibm-cloud-key-protect" width="28" />
                <span class="pl-[3.6vw]">个人信息与隐私保护</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
            <div
              class="flex justify-between items-center w-[67.8vw] h-[12.3vw] mx-auto"
            >
              <div class="flex items-center h-[12.3vw]">
                <Icon icon="mdi:about-circle-outline" width="28" />
                <span class="pl-[3.6vw]">关于</span>
              </div>
              <div>
                <Icon icon="ph:caret-right-light" width="15" height="15" />
              </div>
            </div>
          </div>
          <div
            class="w-[76.6vw] h-[12.8vw] mx-auto mt-[3.7vw] bg-[#FFFFFF] rounded-[3vw] text-[#ff3a3a] dark:bg-[#2c2c2c] dark:text-[#ff3a3a]"
          >
            <p class="text-center leading-[12.8vw]">退出登录/关闭</p>
          </div>
        </div>
      </Drawer>
      <!-- 抽屉2 -->
      <Drawer :visible.sync="drawerVisiblel" direction="btt" width="100vw" :title="info">
        <div
          class="w-[100%] dark:bg-[#2C2C36] dark:text-[#E6E4E8] overflow-hidden"
        >
          <div class="w-[92vw] mx-auto">
            <div class="flex h-[12.1vw] items-center">
              <Icon icon="iconamoon:like-light" width="16" height="16" />
              <span class="pl-[2vw]">优先推荐</span>
            </div>
            <div class="flex h-[12.1vw] items-center">
              <Icon icon="ion:heart-dislike-outline" width="16" height="16" />
              <span class="pl-[2vw]">减少推荐</span>
            </div>
            <div class="flex h-[12.1vw] items-center">
              <Icon
                icon="icon-park-outline:more-three"
                width="16"
                height="16"
              />
              <span class="pl-[2vw]">更多内容</span>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  </div>
</template>

<script>
import BScroll from '@better-scroll/core';
import axios from 'axios';
import BannersView from './HomeView/BannersView.vue';
import Topview from './HomeView/Topview.vue';
import RecommendView from './HomeView/RecommendView.vue';
import SongView from './HomeView/SongView.vue';
import RakingView from './HomeView/RakingView.vue';
import McView from './HomeView/McView.vue';
import Drawer from './components/Drawer.vue';
export default {
  comments: {
    BannersView,
    Topview,
    RecommendView,
    SongView,
    RakingView,
    McView,
    Drawer,
  },
  data() {
    return {
      switchCheckStatus: false,
      drawerVisible: false,
      drawerVisiblel: false,
      visible: true,
      banners: [],
      recommend: [],
      menulist: [],
      song: [],
      raking: [],
      music: [],
      visibleAA: 0,
      resourceData: '',
      resources: [],
      info:''
    };
  },
  mounted() {
    this.animateItems();
    this.initSwiper();
    const refs = ['scroll', 'scroll_1', 'scroll_2', 'scroll_3', 'scroll_4'];
    refs.forEach((ref) => {
      this.init(this.$refs[ref]);
    });
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    songDetails(id) {
         console.log(id)  
         this.$router.push({ path: '/song', query: { id } });
    },
    animateItems() {
      setInterval(() => {
        this.visibleAA++;
        if (this.visibleAA === this.resources.length) {
          this.visibleAA = 0;
        }
        this.resourceData =
          this.resources[this.visibleAA].uiElement.mainTitle.title;
      }, 5000);
    },
    fn(e) {
      this.drawerVisible = e;
    },
    init(abc) {
      this.bs = new BScroll(abc, {
        scrollX: true,
        probeType: 3,
        click: true,
      });
    },
    toggleMenu(name) {
      this.activeMenuItem = name;
      this.fetchPlayLists(name);
    },
    initSwiper() {
      this.swiper = new Swiper('.mySwiper', {
        autoplay: true, // 自动播放
        disableOnInteraction: false, // 鼠标交互后不停止自动播放
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + '</span>';
          },
        },
      });
    },
  },
  created() {
    // 轮播
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
      )
      .then((res) => {
        this.banners = res.data.data.blocks[0].extInfo.banners;
      })
      .catch((err) => {
        console.log(err);
      });
    // 菜单
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/dragon/ball'
      )
      .then((res) => {
        this.menulist = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      });
    // 推荐歌单
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
      )
      .then((res) => {
        this.resources = res.data.data.blocks[1].creatives[0].resources;
        this.recommend = res.data.data.blocks[1].creatives.slice(1);
      });
    // 新歌新碟/数字专辑
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
      )
      .then((res) => {
        this.song = res.data.data.blocks[5].creatives;
        console.log(this.song);
      })
      .catch((err) => {
        console.log(err);
      });
    // 排行榜
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/homepage/block/page'
      )
      .then((res) => {
        this.raking = res.data.data.blocks[3].creatives;
      })
      .catch((err) => {
        console.log(err);
      });
    // 日历
    axios
      .get(
        'https://netease-cloud-music-c2c1ys55f-cc-0820.vercel.app/calendar?startTime=1606752000000&endTime=1609430399999'
      )
      .then((res) => {
        this.music = res.data.data.calendarEvents.slice(0, 2);
      });
  },
  components: {
    BannersView,
    Topview,
    RecommendView,
    SongView,
    RakingView,
    McView,
  },
};
</script>

<style>
.red-image {
  filter: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg'><filter id='colorize'><feColorMatrix type='matrix' values='1 0 0 0 0.698 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0'/></filter></svg>#colorize");
}
.abc-enter {
  opacity: 0;
  transform: translateY(100%) scale(0.7);
}
.abc-enter-active {
  transition: all ease-in-out 1s;
}
.abc-enter-to {
  opacity: 1;
  transform: translateY(0%) scale(1);
}

.abc-leave {
  transform: translateY(0) scale(1);
}
.abc-leave-active {
  transition: all ease-in-out 1s;
}
.abc-leave-to {
  transform: translateY(-100%) scale(0.7);
}
</style>
