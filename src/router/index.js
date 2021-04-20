import Vue from 'vue'
import VueRouter from 'vue-router'

//文件懒加载
const Found = () => import('views/found/Found')
const Podcast = () => import('views/podcast/Podcast')
const Profile = () => import('views/profile/Profile')
const KSong = () => import('views/kSong/KSong')
const Cloud = () => import('views/cloud/Cloud')

//安装插件
Vue.use(VueRouter)
const routes = [
  {
    path: '',
    redirect: '/Found'
  },
  {
    path: '/Found',
    component: Found
  },
  {
    path: '/Podcast',
    component: Podcast
  },
  {
    path: '/Profile',
    component: Profile
  },
  {
    path: '/KSong',
    component: KSong
  },
  {
    path: '/Cloud',
    component: Cloud
  }
]
//创建router
const router = new VueRouter({
  routes,
  mode: 'history'
});
export default router