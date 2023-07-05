// 所有的请求都定义在这个位置
import axios from 'axios';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});

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
export const songDetails = (params) => http.get(`/playlist/detail?id=${params}`);
//歌单列表
export const songInfo = (params) => http.get(`/playlist/track/all?id=${params}`);

