import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import router from './router';
import App from './App.vue';
import Drawer from './components/Drawer.vue';
import { Swipe, SwipeItem,Popup,Circle,Area,DatetimePicker,Tab, Tabs,Picker,NoticeBar, Collapse, CollapseItem } from 'vant';
import 'vant/lib/index.css';
import Switch from './components/Switch.vue';
import Player from './components/Player';
Vue.use(Player)
Vue.component('t-switch', Switch);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Circle).use(Popup).use(Area).use(DatetimePicker).use(Tab).use(Tabs).use(Picker).use(NoticeBar).use(Collapse).use(CollapseItem);
Vue.component('Drawer', Drawer);
Vue.component('Icon', Icon);
const vm = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
