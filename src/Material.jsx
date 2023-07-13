import store from 'storejs';
import styled from 'styled-components-vue';
import { areaList } from '@vant/area-data';
import {} from './request';
const Wrapper = styled.div``;
export default {
  render() {
    return (
      <Wrapper>
        <div class="w-screen voerflow-hidden">
          <div class="bg-[#F5F5F5] w-screen">
            {/* 头部 */}
            <div class="bg-[#fff]">
              <div class="w-[91.296vw] h-[13.556vw] bg-[#FFFFFF] mx-auto flex items-center">
                <Icon
                  icon="ph:arrow-left-light"
                  width="25"
                  height="25"
                  nativeOnClick={() => this.$router.push('/WangyiView')}
                />
                <p class="pl-[4.722vw]">我的资料</p>
              </div>
            </div>
            {/* 头像板块 */}
            <div class="bg-[#fff] mt-[2.13vw]">
              <div class="w-[91.296vw] h-[55.093vw] bg-[#FFFFFF] mx-auto ">
                <div class="h-[16.111vw] flex border-b items-center justify-between">
                  <p>头像</p>
                  <img
                    src={this.userData.profile.avatarUrl}
                    alt=""
                    class="w-[11.481vw] h-[11.481vw] rounded-[50%]"
                  />
                </div>
                <div class="h-[12.111vw] flex border-b items-center justify-between">
                  <p>昵称</p>
                  <p class="whitespace-nowrap text-[2vw] text-[#999999]">
                    {this.userData.profile.nickname}
                  </p>
                </div>
                <div
                  class="h-[12.111vw] flex border-b items-center justify-between"
                  onClick={this.getSex}
                >
                  <p>性别</p>
                  <p class="whitespace-nowrap text-[2vw] text-[#999999]">
                    沃尔玛购物袋
                  </p>
                </div>
                <div class="h-[12.111vw] flex items-center justify-between">
                  <p>二维码</p>
                  <Icon
                    icon="ph:qr-code-light"
                    width="20"
                    height="20"
                    class=" text-[#999999]"
                  />
                </div>
              </div>
            </div>
            {/* 生日板块 */}
            <div class="bg-[#fff] mt-[2.13vw]">
              <div class="w-[91.296vw] h-[62.963vw] bg-[#FFFFFF] mx-auto ">
                <div
                  class="h-[12.111vw] flex border-b items-center justify-between"
                  onClick={this.getDay}
                >
                  <p>生日</p>
                  <p class="whitespace-nowrap text-[2vw] text-[#999999]">
                    2099-9-2
                  </p>
                </div>
                <div
                  class="h-[12.111vw] flex border-b items-center justify-between"
                  onClick={this.getArea}
                >
                  <p>地区</p>
                  <p class="whitespace-nowrap text-[2vw] text-[#999999]">
                    湖北省 武汉市
                  </p>
                </div>
                <div class="h-[12.111vw] flex border-b items-center justify-between">
                  <p>大学</p>
                  <p class="whitespace-nowrap text-[2vw] text-[#999999]">
                    未填写
                  </p>
                </div>
                <div class="h-[12.111vw] flex border-b items-center justify-between">
                  <p>音乐标签</p>
                  <p class="whitespace-nowrap text-[2vw] text-[#999999]">
                    选择标签
                  </p>
                </div>
                <div class="h-[12.111vw] flex items-center justify-between">
                  <p>简介</p>
                  <p class="whitespace-nowrap text-[2vw] text-[#999999]">
                    还没有简介
                  </p>
                </div>
              </div>
            </div>
            {/* 个人主页设置板块 */}
            <div class="bg-[#fff] mt-[2.13vw]">
              <div class="w-[91.296vw] h-[25.741vw] bg-[#FFFFFF] mx-auto ">
                <div class="h-[12.111vw] flex border-b items-center">
                  <p class="whitespace-nowrap">个人主页隐私设置</p>
                </div>
                <div class="h-[12.111vw] flex items-center">
                  <p class="whitespace-nowrap">主页模块顺序设置</p>
                </div>
              </div>
            </div>
            <div class="bg-[#fff] mt-[2.13vw]">
              <div class="w-[91.296vw] h-[18.741vw] bg-[#FFFFFF] mx-auto ">
                <p class="whitespace-nowrap pt-[3.611vw]">个人主页隐私设置</p>
              </div>
            </div>
          </div>
          {/* 日期 */}
          <van-popup
            v-model={this.currentDateShow1}
            position="bottom"
            style={{ height: '40%' }}
          >
            <van-datetime-picker
              type="date"
              title="选择年月日"
              min-date={this.minDate}
              max-date={this.maxDate}
              onConfirm={this.confirm}
              onCancel={() => (this.currentDateShow = false)}
            />
          </van-popup>
          {/* 地区 */}
          <van-popup
            v-model={this.popupVisible}
            position="bottom"
            style={{ height: '40%' }}
          >
            <van-area
              columns-num="2"
              confirm-button-text="完成"
              cancel-button-text="取消"
              area-list={areaList}
              onConfirm={this.confirm}
              onCancel={() => (this.popupVisible = false)}
            />
          </van-popup>
          <van-popup
            v-model={this.sexShow}
            class="w-[87vw] h-[27vw] rounded-[3vw] pl-[5.8vw] py-[4.2vw]"
          >
            <ul class="" onClick={this.getSex}>
              <li class="h-[9vw] leading-[9vw]">男</li>
              <li class="h-[9vw] leading-[9vw]">女</li>
            </ul>
          </van-popup>
        </div>
      </Wrapper>
    );
  },
  data() {
    return {
      user: [],
      userData: [],
      sexShow: false, // 性别
      popupVisible: false, // 地区
      currentDateShow1: false, //日期
      areaList: Object.freeze(areaList), // 冻结
      area: [],
      minDate: new Date(1000, 0, 1),
      maxDate: new Date(3000, 12, 31),
      currentDate: new Date(2021, 0, 17),
    };
  },
  async created() {
    this.user = store.get('_cookieMusic');
    console.log(this.user);
    this.userData = store.get('__m__UserData');
    console.log(this.userData);
  },
  methods: {
    getDay() {
      this.currentDateShow1 = !this.currentDateShow1;
    },
    getSex() {
      this.sexShow = !this.sexShow;
    },
    getArea() {
      this.popupVisible = !this.popupVisible;
    },
    // 地区
    confirm(e) {
      this.popupVisible = false;
      this.currentDateShow = false;
      console.log(e);
      this.area = e;
      this.date = e;
      console.log(this.area);
    },
  },
};
