import styled from 'styled-components-vue';
import store from 'storejs';
import { getUserAccount } from './request';
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
              src={this.user.backgroundUrl}
              alt=""
              class="w-[100vw] h-[74vw]"
            />
          </div>
          {/* 主要内容 */}
          <div class="bg-[#F1F1F1]  px-[4vw]">
            {/* 个人信息 */}
            <div class="mt-[-4vw] rounded-[15px] bg-[#fff] w-[92vw]  relative pt-[11vw] text-center pb-[3.8vw]">
              <img
                src={this.user.avatarUrl}
                alt=""
                class="w-[18.056vw] h-[18.056vw] rounded-[50%]  absolute top-[-9vw] left-1/2 translate-x-[-50%]"
              />
              <p>{this.user.nickname}</p>
              <div class="text-[#ccc] mt-[2vw] text-[1.2vw]">
                <span class="px-[2vw]">
                  9<span>关注</span>
                </span>
                <span class="px-[2vw]">
                  1<span>粉丝</span>
                </span>
                <span class="px-[2vw]">
                  Lv·<span>8</span>
                </span>
              </div>
              {/* 用户信息 */}
              <div class="text-[1.2vw] mt-[3.426vw] h-[6vw]">
                <span class="border h-[4.73vw] whitespace-nowrap rounded-[1vw] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] mr-[1.547vw]">
                  IP:湖北
                </span>
                <span class="border h-[4.73vw] whitespace-nowrap rounded-[1vw] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] mr-[1.547vw]">
                  天秤座
                </span>
                <span class="border h-[4.73vw] whitespace-nowrap rounded-[1vw] pl-[1.5vw] pr-[1.9vw] pb-[1vw] pt-[0.8vw] mr-[1.547vw]">
                  村龄:5年
                </span>
              </div>
              {/* 编辑资料 */}
              <div class="flex justify-center mt-[3.056vw] items-center">
                <span class="text-[3.2vw] border h-[7.5vw] w-[21.204vw] text-center leading-[7.5vw] border-[#ccc] rounded-[4vw] mr-[1.974vw]">
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
                        <p class="text-[#515A6C] whitespace-nowrap ">111首</p>
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
                        <p class="text-[#515A6C] whitespace-nowrap ">111首</p>
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
                          我的喜欢
                        </p>
                        <p class="text-[#515A6C] whitespace-nowrap ">111首</p>
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
                    创建的歌单 <span>(8个)</span>
                  </p>
                  <div>
                    <ul>
                      <li class="flex">
                        <div class=" mr-[2.315vw]">
                          <img
                            src=""
                            alt=""
                            class="w-[12vw] h-[12vw] rounded-[2vw]"
                          />
                        </div>
                        <div class="">
                          <p class=" whitespace-nowrap overflow-hidden">
                            毛不易
                          </p>
                          <p class="text-[1.2vw] whitespace-nowrap overflow-hidden text-[#ccc]">
                            15首,播放一次
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* 收藏的歌单 */}
                <div class=" w-[100%] bg-[#fff] rounded-[15px] px-[4vw] pb-[4vw] pt-[5vw] mb-[3.7vw] mt-[3.796vw]">
                  <p>
                    收藏的歌单 <span>(8个)</span>
                  </p>
                  <div>
                    <ul>
                      <li class="flex">
                        <div class=" mr-[2.315vw]">
                          <img
                            src=""
                            alt=""
                            class="w-[12vw] h-[12vw] rounded-[2vw]"
                          />
                        </div>
                        <div class="">
                          <p class=" whitespace-nowrap overflow-hidden">
                            好听到窒息的音乐
                          </p>
                          <p class="text-[1.2vw] whitespace-nowrap overflow-hidden text-[#ccc]">
                            15首,播放21.3万次
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="flex h-[9.722vw] border-t mt-[2.5vw] items-center justify-center text-[1.22vw] text-[#ccc]">
                    <span>查看全部</span>
                    <Icon icon="uiw:right" width="15" height="15" />
                  </div>
                </div>
                  {/* 基本信息 */}
                  <div class='w-[92vw] h-[50vw] bg-[#fff]  rounded-[15px]'>
                    <div class='h-[15vw] flex items-center justify-between mx-[3.8vw]'>
                      <span class="whitespace-nowrap ">基本信息</span>
                      <span class="text-[1.2vw] text-[#ccc] whitespace-nowrap ">领取村民证</span>
                    </div>
                    <div class="h-[25vw] text-[1.2vw] text-[#666] mx-[3.8vw] flex flex-col justify-between">
                      <div>村龄:5年(2017年09月注册)</div>
                      <div>性别:男</div>
                      <div>年龄:30后  天秤座</div>
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
      user: [],
      userData: [],
    };
  },
  async created() {
    const resUser = await getUserAccount();
    store.set('_cookieMusic', resUser.data.profile);
    this.user = store.get('_cookieMusic');
    this.userData = store.get('__m__UserData');
    console.log(this.user);
  },
};
