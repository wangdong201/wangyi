import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import router from './router';
import App from './App.vue';
import Drawer from './components/Drawer.vue';
import { Swipe, SwipeItem,Popup,Circle,Area,DatetimePicker   } from 'vant';
import 'vant/lib/index.css';
import Switch from './components/Switch.vue';
Vue.component('t-switch', Switch);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Circle).use(Popup).use(Area).use(DatetimePicker);
Vue.component('Drawer', Drawer);
Vue.component('Icon', Icon);
const vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
