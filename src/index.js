import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
// import App from './App.vue';
import WangyiView from './WangyiView.vue';
import Drawer from './components/Drawer.vue';
import { Swipe, SwipeItem,Vant } from 'vant';
import 'vant/lib/index.css';
import Switch from './HomeView/Switch.vue';
Vue.component('t-switch',Switch);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.component('Drawer', Drawer);
Vue.component('Icon', Icon);
const vm = new Vue({
  el: '#app',
  data:{
    swiper:null
  },
  render: (h) => h(WangyiView),
  // components:{App},
  // template:'<App/>',
});

