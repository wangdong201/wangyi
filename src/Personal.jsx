import styled from 'styled-components-vue';
import { areaList } from '@vant/area-data';
import store from 'storejs';
import { getIPAddr, ip2Territory, fetchUserPlaylist } from './request';
const Wrapper = styled.div``;

export default {
  render() {
    return (
      <Wrapper>
        <div class="w-screen voerflow-hidden">
          {/* 头部 */}
          <div class="w-screen h-[75vw] relative">
            <div class="w-screen px-[4.5vw] h-[13vw] flex items-center justify-between fixed top-0 z-[10]">
              <Icon
                icon="ph:arrow-left"
                class="text-[7vw] text-[#fff]"
                nativeOnClick={() => this.$router.push('/WangyiView')}
              />
              <Icon
                icon="ri:more-2-line"
                class="dark:text-[#e9ebf2] text-[#fff] font-[800] text-[7vw]"
              />
            </div>
            <img
              src={this.userData.profile.backgroundUrl}
              alt=""
              class="w-[100vw] h-[74vw]"
            />
          </div>
          {/* 主要内容 */}
          <div class="bg-[#F1F1F1]  px-[4vw]">
            {/* 个人信息 */}
            <div class="mt-[-4vw] rounded-[15px] bg-[#fff] w-[92vw]  relative pt-[11vw] text-center pb-[3.8vw]">
              <img
                src={this.userData.profile.avatarUrl}
                alt=""
                class="w-[18.056vw] h-[18.056vw] rounded-[50%]  absolute top-[-9vw] left-1/2 translate-x-[-50%]"
              />
              <p>{this.userData.profile.nickname}</p>
              <div class="text-[#ccc] mt-[2vw] text-[1.2vw]">
                <span class="px-[2vw]">
                  {this.userData.profile.follows}
                  <span>关注</span>
                </span>
                <span class="px-[2vw]">
                  {this.userData.profile.followeds}
                  <span>粉丝</span>
                </span>
                <span class="px-[2vw]">
                  Lv·<span>{this.userData.level}</span>
                </span>
              </div>
              {/* 用户信息 */}
              <div class="text-[1.2vw] mt-[3.426vw] h-[6vw]">
                <span class="border h-[4.73vw] whitespace-nowrap rounded-[1vw] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] mr-[1.547vw]">
                  IP:{areaList.city_list[this.userData.profile.city]}
                </span>
                <span class="border h-[4.73vw] whitespace-nowrap rounded-[1vw] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] mr-[1.547vw]">
                  天秤座
                </span>
                <span class="border h-[4.73vw] whitespace-nowrap rounded-[1vw] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] mr-[1.547vw]">
                  村龄:{Math.floor(this.userData.createDays / 365)}
                </span>
              </div>
              {/* 编辑资料 */}
              <div class="flex justify-center mt-[3.056vw] items-center">
                <span class="text-[3.2vw] border h-[7.5vw] w-[21.204vw] text-center leading-[7.5vw] border-[#ccc] rounded-[4vw] mr-[1.974vw]" onClick={() => this.$router.push('/Material')}>
                  编辑资料
                </span>
                <div class="w-[7.5vw] h-[7.5vw] rounded-[50%] border border-[#ccc] flex items-center justify-center">
                  <Icon icon="formkit:down" width="15" height="15" />
                </div>
              </div>
            </div>

            <div>
              {/* 主页  动态  播客 */}
              <div class="flex text-[4.2vw] justify-center h-[14.344vw] items-center">
                <div class="w-[22.87vw] text-[#283347] text-center">主页</div>
                <div class="w-[22.87vw] text-[#8E95A0] text-center">动态</div>
                <div class="w-[22.87vw] text-[#8E95A0] text-center">播客</div>
              </div>

              <div>
                {/* 音乐品味 */}
                <div class="w-[92vw] h-[45.185vw] rounded-[4vw] bg-[#fff]">
                  <p class="pl-[4.63vw] pt-[5.37vw]">音乐品味</p>
                  <div class="flex">
                    <div class="w-[26.852vw] h-[29.074vw] border mt-[2.87vw] ml-[3.889vw] rounded-[2vw] bg-gradient-to-b from-[#FDF2F1] to-[#FEFEFB] flex flex-col justify-between">
                      <div class="text-[1.2vw] pl-[2.13vw] pt-[1.667vw]">
                        <p class="text-[#85878E] whitespace-nowrap ">
                          我的喜欢
                        </p>
                        <p class="text-[#515A6C] whitespace-nowrap ">
                          {this.myLove}首
                        </p>
                      </div>
                      <div class="flex items-center pl-[2.13vw] text-[#ccc]">
                        <Icon icon="wpf:like" width="10" height="10" />
                        <p class="text-[1.2vw]">喜欢的音乐</p>
                      </div>
                    </div>
                    <div class="w-[26.852vw] h-[29.074vw] border mt-[2.87vw] ml-[1.4vw] rounded-[2vw] bg-gradient-to-b from-[#FCF8E8] to-[#FEFEFB] flex flex-col justify-between">
                      <div class="text-[1.2vw] pl-[2.13vw] pt-[1.667vw]">
                        <p class="text-[#85878E] whitespace-nowrap ">
                          累计听歌
                        </p>
                        <p class="text-[#515A6C] whitespace-nowrap ">
                          {this.userData.listenSongs}首
                        </p>
                      </div>
                      <div class="flex items-center pl-[2.13vw] text-[#ccc]">
                        <Icon icon="ri:rhythm-line" width="10" height="10" />
                        <p class="text-[1.2vw]">听歌排行</p>
                        <Icon icon="majesticons:lock" width="15" height="15" />
                      </div>
                    </div>
                    <div class="w-[26.852vw] h-[29.074vw] border mt-[2.87vw] ml-[1.4vw] rounded-[2vw] bg-gradient-to-b from-[#F0F7FC] to-[#FEFEFB] flex flex-col justify-between">
                      <div class="text-[1.2vw] pl-[2.13vw] pt-[1.667vw]">
                        <p class="text-[#85878E] whitespace-nowrap ">
                          本周关键词
                        </p>
                        <p class="text-[#515A6C] ">属于你的音乐档案</p>
                      </div>
                      <div class="flex items-center pl-[2.13vw] text-[#ccc]">
                        <Icon
                          icon="ant-design:hourglass-filled"
                          width="15"
                          height="15"
                        />
                        <p class="text-[1.2vw]">黑胶时光机</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* 创建歌单 */}
                <div class=" w-[100%] bg-[#fff] rounded-[15px] px-[4vw] pb-[4vw] pt-[5vw] mb-[3.7vw] mt-[3.796vw]">
                  <p>
                    创建的歌单 <span>({this.create.length}个)</span>
                  </p>
                  <div>
                    <ul>
                      {this.create.map((item) => {
                        return (
                          <li class="flex mt-[2vw]">
                            <div class=" mr-[2.315vw]">
                              <img
                                src={item.coverImgUrl}
                                alt=""
                                class="w-[12vw] h-[12vw] rounded-[2vw]"
                              />
                            </div>
                            <div class="">
                              <p class=" whitespace-nowrap overflow-hidden">
                                {item.name}
                              </p>
                              <p class="text-[1.2vw] whitespace-nowrap overflow-hidden text-[#ccc]">
                                {item.trackCount}首,播放
                                {this.dataTruncation(item.playCount)}次
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                {/* 收藏的歌单 */}
                <div class=" w-[100%] bg-[#fff] rounded-[15px] px-[4vw] pb-[4vw] pt-[5vw] mb-[3.7vw] mt-[3.796vw]">
                  <p>
                    收藏的歌单 <span>({this.collect.length}个)</span>
                  </p>
                  <div>
                    <ul>
                      {this.collect.slice(0, 10).map((item) => {
                        return (
                          <li class="flex mt-[2vw]">
                            <div class=" mr-[2.315vw]">
                              <img
                                src={item.coverImgUrl}
                                alt=""
                                class="w-[12vw] h-[12vw] rounded-[2vw]"
                              />
                            </div>
                            <div class="overflow-hidden">
                              <p class=" whitespace-nowrap overflow-hidden">
                                {item.name}
                              </p>
                              <p class="text-[1.2vw] whitespace-nowrap overflow-hidden text-[#ccc]">
                                {item.trackCount}首,播放
                                {this.dataTruncation(item.playCount)}万次
                              </p>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div class="flex h-[9.722vw] border-t mt-[2.5vw] items-center justify-center text-[1.22vw] text-[#ccc]">
                    <span>查看全部</span>
                    <Icon icon="uiw:right" width="15" height="15" />
                  </div>
                </div>
                {/* 基本信息 */}
                <div class="w-[92vw] h-[50vw] bg-[#fff]  rounded-[15px]">
                  <div class="h-[15vw] flex items-center justify-between mx-[3.8vw]">
                    <span class="whitespace-nowrap ">基本信息</span>
                    <span class="text-[1.2vw] text-[#ccc] whitespace-nowrap ">
                      领取村民证
                    </span>
                  </div>
                  <div class="h-[25vw] text-[1.2vw] text-[#666] mx-[3.8vw] flex flex-col justify-between">
                    <div>
                      村龄:{Math.floor(this.userData.createDays / 365)}年 (
                      {this.TimestampConversion(this.userData.createTime)}注册)
                    </div>
                    <div>性别:{this.userData.profile.gender ? '男' : '女'}</div>
                    <div>
                      年龄:{this.birthday(this.userData.profile.birthday)}后
                      巨蟹座
                    </div>
                  </div>
                  <div class="flex h-[9.722vw] border-t mt-[2.5vw] items-center justify-center text-[1.22vw] text-[#ccc]">
                    <span>查看全部</span>
                    <Icon icon="uiw:right" width="15" height="15" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  },
  data() {
    return {
      ip: '', //ip地址
      user: [],
      userData: [],
      collect: [],
      create: [],
      myLove: '',
      areaList,
    };
  },
  methods: {
    //出生
    birthday(timeStamp) {
      const date = new Date(timeStamp);
      const year = date.getFullYear();
      return ('' + (year - (year % 5))).split('').splice(2, 4).join('');
    },
    //时间
    TimestampConversion(timeStamp) {
      const date = new Date(timeStamp);
      const year = date.getFullYear();
      const month = date.getMonth() + 1; // 注意月份从 0 开始，需要加 1
      return `${year}年${month}月`;
    },
    dataTruncation(playVolume) {
      if (playVolume > 100000000) {
        return `${Math.floor(playVolume / 100000000)}亿`;
      } else if (playVolume > 100000) {
        return `${Math.floor(playVolume / 10000)}万`;
      } else {
        return playVolume;
      }
    },
  },
  async created() {
    this.user = store.get('_cookieMusic');
    console.log(this.user);
    this.userData = store.get('__m__UserData');
    console.log(this.userData);

    const res4 = await fetchUserPlaylist(this.userData.profile.userId);
    //收藏的歌单
    this.collect = res4.data.playlist.filter((item) => item.subscribed);
    //创建的歌单
    this.create = res4.data.playlist.filter((item) => !item.subscribed);
    //我喜欢的歌曲
    this.myLove = res4.data.playlist[0].trackCount;
    this.create = this.create.slice(1, this.create.length);
    this.ip = getIPAddr().then((res) => {
      ip2Territory(res.data.ip).then((res) => (this.ip = res.data));
    }); //ip
  },
};
