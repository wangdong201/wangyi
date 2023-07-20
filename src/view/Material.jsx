import store from 'storejs';
import styled from 'styled-components-vue';
import { areaList } from '@vant/area-data';
import { getUpdate, getUserAccount, getUserDetail } from '../request';
import { comment } from 'postcss';
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
                    src={this.userDetail.avatarUrl}
                    alt=""
                    class="w-[11.481vw] h-[11.481vw] rounded-[50%]"
                  />
                </div>
                <div class="h-[12.111vw] flex border-b items-center justify-between">
                  <p>昵称</p>
                  <p class="whitespace-nowrap text-[2vw] text-[#999999]">
                    {this.userDetail.nickname}
                  </p>
                </div>
                <div
                  class="h-[12.111vw] flex border-b items-center justify-between"
                  onClick={this.getSex}
                >
                  <p>性别</p>
                  <p class="whitespace-nowrap text-[2vw] text-[#999999]">
                  {this.sexFn(this.userArr[0])}
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
                    {this.areaList.province_list[this.userDetail.province]}{' '}
                    {this.areaList.city_list[this.userDetail.city]}
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
              onConfirm={this.changeDate}
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
              onConfirm={this.changeArea}
              onCancel={() => (this.popupVisible = false)}
            />
          </van-popup>
          {/* 性别 */}
          <van-popup v-model={this.sexShow} class="w-[87vw] h-[27vw] rounded-[3vw] pl-[5.8vw] py-[4.2vw]">
            <van-picker show-toolbar columns={this.columns} default-index={this.userArr[0]} onConfirm={this.confirmSex}/>
          </van-popup>
        </div>
      </Wrapper>
    );
  },
  data() {
    return {
      user: [],
      sexShow: false, // 性别
      popupVisible: false, // 地区
      currentDateShow1: false, //日期
      areaList: Object.freeze(areaList), // 冻结
      area: [],
      minDate: new Date(1000, 0, 1),
      maxDate: new Date(3000, 12, 31),
      currentDate: new Date(2021, 0, 17),
      userEdiot: {},
      userArr: [],
      userDetail: {},
      areaList, // 默认省会数据
    };
  },
  async created() {
    const res1 = await getUserAccount(); // 用户登录数据
    const deatil = await getUserDetail(res1.data.profile.userId); // 用户登录数据传id获取详情
    this.userDetail = deatil.data.profile;
    this.userArr = [
      this.userDetail.gender,
      this.userDetail.birthday,
      this.userDetail.nickname,
      this.userDetail.province,
      this.userDetail.city,
      this.userDetail.signature,
    ];
    console.log(this.userDetail);
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
    async changeArea(e) {
      this.popupVisible = false;
      this.area = e;
      this.userDetail.province = Number(this.area[0].code);
      this.userDetail.city = Number(this.area[1].code);
      console.log(this.userDetail.province, this.userDetail.city);
      if (
        this.userArr[3] != this.userDetail.province &&
        this.userArr[4] != this.userDetail.city
      ) {
        this.userArr[3] = this.userDetail.province;
        this.userArr[4] = this.userDetail.city;
        await getUpdate(
          this.userArr[0],
          this.userArr[1],
          this.userArr[2],
          this.userArr[3],
          this.userArr[4],
          this.userArr[5]
        )
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    // 性别
    async confirmSex(e){
      if(e === '男'){
        this.userArr[0] = 1;
      }else{
        this.userArr[0] = 2;
      }
      await getUpdate(this.userArr[0], this.userArr[1], this.userArr[2], this.userArr[3], this.userArr[4], this.userArr[5]);
    },
    sexFn(sex) {
      if (sex === 1) {
        return '男';
      } else if (sex === 2) {
        return '女';
      } else {
        return '';
      }
    },
    async changeDate(e) {
      this.currentDateShow = false;
    },
  },
};
