// 所有的请求都定义在这个位置
import axios from 'axios';
import store from 'storejs';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});

//添加请求拦截器
// http.interceptors.request.use(function (config) {
//   const cookie = store.get('__m__cookie') ?? '';
//   config.params = config || {};
//   config.params.cookie = cookie;
//   // console.log(config);
//   return config;
// });

// 榜单
export async function fetchSeachList() {
  const res = await http.get('/toplist/detail');
  const playlist = await Promise.all(
    res.data.list.map(({ id }) =>
      http.get('playlist/detail', { params: { id } })
    )
  );
  return playlist.map((item) => item.data.playlist);
}

// 头
export const songDetails = (params) =>
  http.get(`/playlist/detail?id=${params}`);
//歌单列表详情
export const songInfo = (params) =>
  http.get(`/playlist/track/all?id=${params}`);

export const playlistTrackAll = (id) =>
  http.get('/playlist/track/all', { params: { id } });

export const musicSlider = (params) => http.get(`relatedaylist?id=${params}`);

//扫码登录
export const getQrKey = () => http.get('/login/qr/key');

export const getQrInfo = (key, qrimg = 1) =>
  http.get('/login/qr/create', { params: { key, qrimg } });

export const checkQrStatus = (key) =>
  http.get('/login/qr/check', { params: { key, timestamp: Date.now() } });

export const getUserAccount = () => http.get('/user/account');

//用户详情
export const getUserDetail = (uid) =>
  http.get('/user/detail', { params: { uid } });
