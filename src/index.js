import Vue from 'vue';
import './index.css';
import { Icon } from '@iconify/vue2';
// import indexView from './IndexView.vue';
import WangyiView from './WangyiView.vue';
import Drawer from './components/Drawer.vue';
Vue.component('Drawer', Drawer);
Vue.component('Icon', Icon);
// 页面打开请求自动发送
// 请求回来的数据还要渲染到页面上(数据驱动视图)
// 数据驱动视图变化的条件：数据必须是响应数据(data) + 数据必须通过模版语法绑定到模版中
// vue中this的指向问题:methods中的所有函数(不要箭头函数)的this指向vm(vue的实例)
const vm = new Vue({
  el: '#app',
  render: (h) => h(WangyiView),
});
// 以_开头的变量名属性名是私有变量或者私有属性,不希望其他人去使用
// 一般情况下:我们在实例化vue传递的配置项 a => $a
// el => $el
// data => $data
// afterInit => created
