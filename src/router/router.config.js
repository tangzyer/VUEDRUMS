/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layouts/index'),
    redirect: '/home',
    meta: {
      title: '进入',
      keepAlive: true
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/home/about'),
        meta: { title: '关于我', keepAlive: false }
      }
    ]
  },
  {
    path: '/line',
    component: () => import('@/views/layouts/line'),
    meta: { title: '关于我', keepAlive: false }
  },
  {
    path: '/part3',
    component: () => import('@/views/layouts/Part3'),
    meta: { title: '关于我', keepAlive: false }
  },
  {
    path: '/part32',
    component: () => import('@/views/layouts/Part3_2'),
    meta: { title: '关于我', keepAlive: false }
  },
  {
    path: '/part33',
    component: () => import('@/views/layouts/Part3_3'),
    meta: { title: '关于我', keepAlive: false }
  },
  {
    path: '/part34',
    component: () => import('@/views/layouts/Part3_4'),
    meta: { title: '关于我', keepAlive: false }
  },
  {
    path: '/part35',
    component: () => import('@/views/layouts/Part3_5'),
    meta: { title: '关于我', keepAlive: false }
  },
  {
    path: '/part36',
    component: () => import('@/views/layouts/Part3_6'),
    meta: { title: '关于我', keepAlive: false }
  },
  {
    path: '/part37',
    component: () => import('@/views/layouts/Part3_7'),
    meta: { title: '关于我', keepAlive: false }
  },
  {
    path: '/answer',
    component: () => import('@/views/layouts/Answer'),
    meta: { title: '关于我', keepAlive: false }
  },
  {
    path: '/answer2',
    component: () => import('@/views/layouts/Answer2'),
    meta: { title: '关于我', keepAlive: false }
  },
  {
    path: '/video1',
    component: () => import('@/views/layouts/Video1'),
    meta: { title: '关于我', keepAlive: false }
  },
  {
    path: '/anima',
    component: () => import('@/views/layouts/Animate'),
    meta: { title: '关于我', keepAlive: false }
  },
  {
    path:'/part39',
    component:() => import('@/views/layouts/Part3_9'),
    meta: { title: '关于我', keepAlive: false }
  },
  {
    path:'/part4',
    component:() => import('@/views/layouts/Part4'),
    meta: { title: '关于我', keepAlive: false }
  }



]
