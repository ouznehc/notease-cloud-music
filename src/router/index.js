import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const Discovery = () => import('@/view/discovery')
const Songs = () => import('@/view/songs')
const Playlists = () => import('@/view/playlists')
const Mvs = () => import('@/view/mvs')


//需要显示在侧边栏菜单的页面
export const menuRoutes = [
  {
    path: '/discovery',
    name: 'discovery', 
    component: Discovery,
    meta: { 
      title: '发现音乐',
      icon: 'music',
     }
  },
  {
    path: '/playlists',
    name: 'playlists',
    component: Playlists,
    meta: { 
      title: '推荐歌单',
      icon: 'playlist-menu'
    }
  },
  {
    path: '/songs',
    name: 'songs',
    component: Songs,
    meta: { 
      title: '最新音乐',
      icon: 'yinyue'
     }
  },
  {
    path: '/mvs',
    name: 'mvs',
    component: Mvs,
    meta: { 
      title: '最新MV',
      icon: 'mv'
     }
  }
]

const routes = [
  {
    path: '/',
    name: 'Home',
    redirect: 'discovery'
  },
  ...menuRoutes
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
