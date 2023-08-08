import { defineStore } from 'pinia'
import { ref} from 'vue'
import constantRoutes from '@/router/constantRoutes/index.js'

export const useCounterStore = defineStore('router', () => {
  const permissRouters = ref<any>([])
  const sidebarData = ref<any>([])
  const staticRouters = ref<any>([])

  const forFilter = (router: any) => {
    return router.filter((item:any) => {
      if(item.children) {
        item.children = forFilter(item.children)
      }
      return item.hidden !==true
    }) 
  }

  const getAllSidebar = (arr:any) => {
    const temp = JSON.parse(JSON.stringify(arr))
    return forFilter(temp)
  }

  
  staticRouters.value = getAllSidebar(constantRoutes)

  sidebarData.value = [...staticRouters.value, ...permissRouters.value]


  return {
    sidebarData,
    permissRouters
  }




}, { persist: true})