//通过vue-router实现模板路由配置
import { createRouter, createWebHashHistory } from 'vue-router'
//导入常量路由
import constantRouter from './constantRouter'

//创建路由
const router = createRouter({
  //路由模式，哈希模式
  history: createWebHashHistory(),
  //路由表
  routes: constantRouter,
})

export default router
