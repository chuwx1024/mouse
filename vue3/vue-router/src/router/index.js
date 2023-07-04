import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/Layout/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      redirect: '/homePage/product',
      component: HomePage,
      children: [
        {
          path: '/homePage/product',
          name: '/homePage/product',
          component: () => import('@/views/Home/index.vue')
        },
        {
          path:'/homePage/product/:id',
          name: '/homePage/product/Id',
          component: () => import('@/views/Category/index.vue')
        },
        {
          path: '/category/sub/:id',
          name: 'subCategory',
          component: () => import('@/views/SubCategory/index.vue')
        },
        {
          path: '/detail/:id',
          component: () => import('@/views/Detail/index.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginPage',
      component: () => import('@/views/Login/index.vue')
    }
  ],
  scrollBehavior () {
    return {
      top: 0  // 路由跳转后滚动条回到顶部
    }
  }
})

export default router
