<template>
  <div class="w-screen">
    <div class="bg-[#9e8e56] w-[100%] h-[300vw]">
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
                <img src="../tx.png" alt="" class="w-[25.7vw] h-[25.7vw] rounded-[3vw]">
            </div>
            <div class="w-[63.5vw] h-[25.7vw]">
                <div class="flex h-[8.3vw] items-center justify-between">
                    <p class="line-clamp-2 text-[2vw] ">古风小调 | 待暖风回首,再遇故人</p>
                    <div class="w-[5vw] h-[5vw] rounded-[50%] bg-[#a19361] text-center text-[#fff] flex items-center justify-center">
                        <Icon icon="ic:round-greater-than" width="20" height="20" :rotate="1" />
                    </div>
                </div>
                <div class="h-[6.6vw] w-[31.9vw] text-[1.2vw] flex items-center">
                    <div class="w-[6.6vw] h-[6.6vw] rounded-[50%] mr-[2.5vw]">
                        <img src="../tx.png" alt="" class="w-[6.6vw] h-[6.6vw] rounded-[50%]">
                    </div>
                    <p class="mr-[2.5vw] whitespace-nowrap text-[#ccc]">织秋裤</p>
                    <div class="h-[5.3vw] w-[11.3vw] bg-[#a39561] rounded-[6vw] flex items-center justify-center">
                        <Icon icon="ic:round-add" width="20" height="20" />
                        <span class="whitespace-nowrap">关注</span>
                    </div>
                </div>
                <div class="text-[1.2vw] flex h-[4.1vw] w-[10vw] items-center mt-[4.4vw] bg-[#ae9f71] rounded-[1vw] justify-center">
                    <p class="whitespace-nowrap">9.1分</p>
                    <Icon icon="ic:round-greater-than" width="20" height="20" />
                </div>
            </div>
        </div>
        <div class="mt-[3.1vw] h-[19.4vw] overflow-hidden">
            <div class="flex items-center text-[#ccc]">
                <p class="whitespace-nowrap overflow-hidden text-[1.2vw] ">
                    一直觉得中国式浪漫是无法超越的   那些经典诗词传承千年  听歌赏诗句  我见青山多妩媚,料青山见我应如是
                </p>
                <Icon icon="ic:round-greater-than" width="20" height="20" />
            </div>
            <div class="mt-[4.5vw] flex justify-between text-[#fff]">
                <div class="h-[10.2vw] w-[29.1vw] rounded-[6vw] bg-[#b9ac7f] flex items-center justify-center">
                    <Icon icon="majesticons:share" width="20" height="20" />
                    <span class="whitespace-nowrap overflow-hidden">24</span>
                </div>
                <div class="h-[10.2vw] w-[29.1vw] rounded-[6vw] bg-[#b9ac7f] flex items-center justify-center">
                    <Icon icon="ant-design:message-filled" width="20" height="20" />
                    <span class="whitespace-nowrap overflow-hidden">9</span>
                </div>
                <div class="h-[10.2vw] w-[29.1vw] rounded-[6vw] bg-[#ff2756] flex items-center justify-center">
                    <Icon icon="fluent:briefcase-medical-24-filled" width="20" height="20" />
                    <span class="whitespace-nowrap overflow-hidden">1160</span>
                </div>
            </div>
        </div>
      </div>
      <div class="h-[100vw] bg-[#fff] rounded-[5vw] mt-[5vw]">
        
      </div>
    </div>
  </div>
</template>
