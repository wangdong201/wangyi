import SearchView from '../SearchView.vue';
import WangyiView from '../WangyiView.vue';
import SongSheet from '../SongSheet.vue';
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
  {
    path: '/SongSheet',
    component: SongSheet,
  },
  {
    path:'/song',
    component:SongSheet,
  }
];
