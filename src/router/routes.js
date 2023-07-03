import SearchView from '../SearchView.vue';
import WangyiView from '../WangyiView.vue';
export default [
  // 路径重定向
  {
    path: '/',
    redirect: '/WangyiView',
  },
  {
    path: '/WangyiView',
    component: WangyiView,
  },
  {
    path: '/SearchView',
    component: SearchView,
  },
];
