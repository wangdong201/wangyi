// 所有的请求都定义在这个位置
import axios from 'axios';
import store from 'storejs';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});

// 添加请求拦截器
http.interceptors.request.use(function (config) {
  const cookie = store.get('__m__cookie') ?? '';
  config.params = config.params || {};
  config.params.cookie = cookie;
  return config;
});
export const fetchPlaylistHot = () => http.get('/playlist/hot');
export const fetchPlaylist = (cat) =>
  http.get('/top/playlist', { params: { cat } });

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

// 获取默认搜索关键词
export const fetchSearchDefault = () => http.get('/search/default');
export const fetchSearchResult = (params) =>
  http.get('/cloudsearch', { params });

//歌单列表详情
export const songInfo = (params) =>
  http.get(`/playlist/track/all?id=${params}`);

export const playlistTrackAll = (id) =>
  http.get('/playlist/track/all', { params: { id } });

export const musicSlider = (params) =>
  http.get(`related/playlist?id=${params}`);

//扫码登录
export const getQrKey = () => http.get('/login/qr/key');

export const getQrInfo = (key, qrimg = 1) =>
  http.get('/login/qr/create', { params: { key, qrimg } });

export const checkQrStatus = (key) =>
  http.get('/login/qr/check', { params: { key, timestamp: Date.now() } });

//用户详情
export const getUserDetail = (uid) =>
  http.get('/user/detail', { params: { uid } });

export const getUserAccount = () => http.get('/user/account');

//ip
export const getIPAddr = () => axios.get('https://api.ipify.org?format=json');
export const ip2Territory = (ip) =>
  axios.get(`http://ip-api.com/json/${ip}?lang=zh-CN`);

// 收藏歌单
export const fetchUserPlaylist = (uid) =>
  http.get('/user/playlist', { params: { uid } });

export const myComment = (id) => http.get(`/comment/music?id=${id}`);

// 播放
export const getMP3 = (id) =>
  http.get('/song/url/v1', { params: { id, level: 'standard' } });
export const getTrackDetail = (id) =>
  http.get('/song/detail', { params: { ids: id } });

export const getUpdate = (
  gender,
  birthday,
  nickname,
  province,
  city,
  signature
) =>
  http.get('/user/update', {
    params: { gender, birthday, nickname, province, city, signature },
  });

// mv
export const Mv = (area) =>
  http.get('/top/mv', { params: { limit: 50, area } });

//歌词
export const lyricText = (id) => http.get('/lyric', { params: { id } });

// MV视频
export const featMvUrl = (id) => http.get('/mv/url', { params: { id } });

// MV视频信息
export const featMvDetail = (mvid) => http.get('/mv/detail', { params: { mvid } });

// MV点赞转发评论数
export const featMvDetailInfo = (mvid) => http.get('/mv/detail/info', { params: { mvid } });