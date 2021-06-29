import axios from 'axios'
import { Loading } from 'element-ui'
import { BASE_URL } from '@/config'
import { confirm } from '@/base/confirm'
import store from '@/store'

//请求实例
export const requestWithoutLoading = baseInstance()
export const request = baseInstance();
mixinLoading(request.interceptors)


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
// 混入loading拦截器的函数
let loading
let loadingCount = 0
function minxinLoading(interceptors){
  interceptors.request.usr(config => {
    if(!loading){
      loading = Loading.service({
        traget: 'body',
        background: 'transparent',
        text: '载入中'
      })
      store.commit('global/setAxiosLoading', true)
    }
    loadingCount++
    return config
  })
  interceptors.response.use(res => {
    loadingCount--
    if(loadingCount === 0) {
      loading.close()
      loading = null
      store.commit('global/setAxiosLoading', false)
    }
    return res
  }, err => {
    loadingCount--
    if(loadingCount === 0) {
      loading.close()
      loading = null
      store.commit('global/setAxiosLoading', false)
    }
    return err
  })
}