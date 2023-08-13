import { createRouter, createWebHistory } from 'vue-router'
import modules from './constantRoutes/index.ts'
import { getToken } from '@/utils/handleCookie.ts'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    ...modules
   
  ]
})

const routerWhiteList = ['/login']
router.beforeEach((to, from, next) => {

  const token = getToken()
  if (token) {
    if (to.path === '/login') {
      next('/')
    }  else {
      next()
    }
  } else {
    if (routerWhiteList.includes(to.path)) {
      next()
    } else {
      next({ name: 'Login'})
    }
  }

})




export default router
