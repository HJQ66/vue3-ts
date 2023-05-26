//常量路由
export const constantRouter = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout/index.vue'),
    meta: {
      title: '',
      hidden: false, //在菜单栏中是否隐藏
      icon: '', //菜单栏左侧的图标，支持element-plus里面的所有图标
    },
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/Home/index.vue'),
        meta: {
          title: '首页',
          hidden: false,
          icon: 'HomeFilled',
        },
      },
    ],
  },
  {
    path: '/screen',
    name: 'Screen',
    component: () => import('@/views/Screen/index.vue'),
    meta: {
      title: '数据大屏',
      icon: 'Monitor',
      hidden: false,
    },
  },
  {
    path: '/acl',
    name: 'Acl',
    component: () => import('@/layout/index.vue'),
    redirect: '/acl/user',
    meta: {
      icon: 'Lock',
      hidden: false,
      title: '权限管理',
    },
    children: [
      {
        path: '/acl/user',
        name: 'User',
        component: () => import('@/views/Acl/User/index.vue'),
        meta: {
          icon: 'User',
          title: '用户管理',
          hidden: false,
        },
      },
      {
        path: '/acl/role',
        name: 'Role',
        component: () => import('@/views/Acl/Role/index.vue'),
        meta: {
          icon: 'UserFilled',
          title: '角色管理',
          hidden: false,
        },
      },
    ],
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('@/layout/index.vue'),
    meta: {
      icon: 'Suitcase',
      title: '商品管理',
      hidden: false,
    },
    redirect: '/product/trademark',
    children: [
      {
        path: '/product/trademark',
        name: 'TradeMark',
        component: () => import('@/views/Product/TradeMark/index.vue'),
        meta: {
          title: '品牌管理',
          icon: 'GoodsFilled',
          hidden: false,
        },
      },
      {
        path: '/product/attr',
        name: 'Attr',
        component: () => import('@/views/Product/Attr/index.vue'),
        meta: {
          title: '属性管理',
          icon: 'BrushFilled',
          hidden: false,
        },
      },
      {
        path: '/product/spu',
        name: 'Spu',
        component: () => import('@/views/Product/Spu/index.vue'),
        meta: {
          title: 'Spu管理',
          icon: 'Present',
          hidden: false,
        },
      },
      {
        path: '/product/sku',
        name: 'Sku',
        component: () => import('@/views/Product/Sku/index.vue'),
        meta: {
          title: 'Sku管理',
          icon: 'Coin',
          hidden: false,
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
    meta: {
      title: '登录',
      hidden: true,
    },
  },
  {
    //匹配到不存在的路由
    path: '/:pathMatch(.*)',
    name: '404',
    component: () => import('@/views/404/index.vue'),
    meta: {
      title: '404',
      hidden: true,
      icon: 'WarnTriangleFilled',
    },
  },
]
