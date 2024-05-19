/*
 * @Author: sunsan 2390864551@qq.com
 * @Date: 2023-11-05 20:50:59
 * @LastEditors: Fleurxxx 984209872@qq.com
 * @LastEditTime: 2024-03-04 22:56:03
 * @FilePath: \hopeEnroll\hope_enroll\src\router\index.ts
 * @Description: 路由配置
 */
import { localGet } from "@/utils";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  { path: "/", redirect: "/main" },
  {
    path: "/login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/main",
    component: () => import("../views/Home.vue"),
    children: [
      {
        path: "", // 空路径，即默认显示的子路由
        component: () => import("../views/main/Body.vue"),
        redirect: "/main/arithmetic",
        children: [
          {
            path: "/main/in",
            component: () => import("../views/Introduction.vue"),
          },
          {
            path: "/main/arithmetic",
            component: () => import("../views/Arithmetic.vue"),
          },
        ],
      },
      {
        path: "/main/option",
        component: () => import("../views/Option.vue"),
      },
      {
        path: "/main/answer",
        component: () => import("../views/Answer.vue"),
      },
      {
        path: "/main/finish",
        component: () => import("../views/Finish.vue"),
      },
    ],
  },
];



const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});


 router.beforeEach((to, from, next) => {
    if (to.path == "/main/arithmetic") {
      // 如果路径是 /login 则正常执行
      next();
    } else {
      // 如果不是 /login，判断是否有 token
      if (!sessionStorage.getItem('token')) {
        // 如果没有，则跳至登录页面
        next({ path: "/main/arithmetic" });
      } else {
        // 否则继续执行
      next()
      }
    }
 });

export default router;
