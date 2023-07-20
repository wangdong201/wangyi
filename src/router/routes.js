import SearchView from '../view/SearchView.vue';
import WangyiView from '../view/WangyiView.vue';
import SongSheet from '../view/SongSheet.vue';
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
    component: () => import('../view/Login.vue'),
  },
  {
    path: '/Personal',
    component: () => import('../view/Personal'),
  },
  {
    path: '/Material',
    component: () => import('../view/Material'),
  },
  {
    path: '/MusicPlayback',
    component: () => import('../view/MusicPlayback.vue'),
  },
  {
    path: '/Player',
    component: () => import('../components/Player'),
  },
  {
    path: '/Mv',
    component: () => import('../view/Mv.vue'),
  },
  {
    path: '/PlayMv/:id',
    component: () => import('../view/PlayMv.vue'),
  },
];
