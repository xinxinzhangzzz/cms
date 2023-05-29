import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    redirect: "/main"
  },
  {
    path: "/login",
    component: () => import("@/views/login/index.vue")
  },
  {
    path: "/main",
    component: () => import("@/views/main/index.vue")
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound', 
    component: () => import("@/views/NotFound/404.vue"),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
