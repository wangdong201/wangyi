// 所有的请求都定义在这个位置
import axios from 'axios';
const http = axios.create({
  baseURL: 'https://netease-cloud-music-api-five-roan-88.vercel.app',
});

export const rankingDetail = () => http.get('/search/hot/detail');
