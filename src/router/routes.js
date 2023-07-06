import SearchView from '../SearchView.vue';
import WangyiView from '../WangyiView.vue';
import SongSheet from '../SongSheet.vue';
// import Login from '../Login.vue';
export default [
  // 路径重定向
  {
    path: '/',
    redirect: '/Login',
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
  },
  {
    path:'/Login',
    component:()=> import('../Login.vue'),
  },
];
