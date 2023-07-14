import SearchView from '../SearchView.vue';
import WangyiView from '../view/WangyiView.vue';
import SongSheet from '../SongSheet.vue';
// import Login from '../Login.vue';
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
  // {
  //   path: '/song',
  //   component: SongSheet,
  // },
  {
    path: '/Login',
    component: () => import('../Login.vue'),
  },
  {
    path: '/Personal',
    component: () => import('../Personal'),
  },
  {
    path: '/Material',
    component: () => import('../Material'),
  },
  {
    path: '/MusicPlayback',
    component: () => import('../MusicPlayback.vue'),
  },
  {
    path: '/Player',
    component: () => import('../components/Player'),
  },
];
