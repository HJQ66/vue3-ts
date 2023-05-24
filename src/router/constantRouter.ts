//常量路由
export default [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/Home/index.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login/index.vue'),
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    //匹配到不存在的路由
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/404/index.vue'),
  },
]
