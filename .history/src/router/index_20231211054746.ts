/*
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-05 20:50:59
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2023-11-30 22:01:33
 * @FilePath: \hopeEnroll\hope_enroll\src\router\index.ts
 * @Description: 路由配置
 */
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  { path: '/', redirect: '/main' },
  {
    path: '/login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/main',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '', // 空路径，即默认显示的子路由
        component: () => import('../views/main/Body.vue')
      },
      {
        path:'/main/project',
        component: () => import('../views/main/Body.vue')
      },
      {
        path:'/main/in',
        component: () => import('../views/Introduction.vue')
      },
      {
        path:'/main/option',
        component: () => import('../views/Option.vue')
      }
    ]
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach((to, from, next) => {
  // if (to.path == '/login') {
  //   // 如果路径是 /login 则正常执行
  //   next()
  // } else {
  //   // 如果不是 /login，判断是否有 token
  //   if (!localStorage.getItem('token')) {
  //     // 如果没有，则跳至登录页面
  //     next({ path: '/login' })
  //   } else {
  //     // 否则继续执行
  // }
  // }
// })


export default router
