import axios from 'axios'
import {Loading} from 'element-ui'
import { BASE_URL } from '@/config'

// 通用的 axios 实例
function baseInstance(){
  const instance = axios.create({
    baseURL: BASE_URL
  })
  instance.interceptors.response.use((res) => {
    return res.data;
  } , (err) => {
    confirm(e.message, "出错啦！");
    throw err;
  })
}