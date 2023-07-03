import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
import router from './router';
import App from './App.vue';
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
  router,
  components:{App},
  template:'<App/>',
});

