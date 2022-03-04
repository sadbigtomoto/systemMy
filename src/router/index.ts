import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
const loginComponent = () => import('@/views/login/login.vue')
const mainComponent = () => import('@/views/main/main.vue')
import localCache from '@/utils/cache'
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/main'
  },
  {
    path: '/login',
    name: 'login',
    component: loginComponent
  },
  {
    path: '/main',
    name: 'main',
    component: mainComponent
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/views/not-found/not-found.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

router.beforeEach((to) => {
  if (to.path !== '/login') {
    const id = localCache.getCache('id')
    if (!id) {
      return '/login'
    }
  }
})

export default router
