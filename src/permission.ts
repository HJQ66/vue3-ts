//路由守卫
import router from '@/router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
//在ts里面引入store之前需要引入大仓库
import pinia from '@/store'
//引入store
import { useUserStore } from '@/store/module/user'
const userStore = useUserStore(pinia)

//路由前置守卫
router.beforeEach(async (to, from, next) => {
  Nprogress.start()
  const token = userStore.token
  //from是从哪个路由来
  //to是去哪个路由
  if (token) {
    //如果登录成功，用户去登录页面，就跳转到首页
    if (to.path === '/login') {
      next('/')
    } else {
      //否则进入除登录意外的页面，则需要请求用户信息 (请求是异步的，需要加上await)
      await userStore.getUserInfo()
      next()
    }
  } else {
    //没有登录，用户去登录页放行
    if (to.path === '/login') {
      next()
    } else {
      //如果没有登录，用户去非登录页面，则跳转到登录页
      next({ path: '/login', query: { redirect: to.path } })
    }
  }
})

//路由后置守卫
router.afterEach((to, from) => {
  Nprogress.done()
})
