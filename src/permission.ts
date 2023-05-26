//路由守卫
import router from '@/router'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

//路由前置守卫
router.beforeEach((to, from, next) => {
  Nprogress.start()
  next()
})

//路由后置守卫
router.afterEach((to, from) => {
  Nprogress.done()
})
