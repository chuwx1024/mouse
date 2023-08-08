import { createRouter, createWebHistory } from 'vue-router'
import modules from './constantRoutes/index.ts'

console.log(modules)

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...modules
   
  ]
})




export default router
