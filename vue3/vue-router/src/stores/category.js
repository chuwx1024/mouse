import { defineStore } from 'pinia'
import {ref} from 'vue'
import { getCategoryAPI } from '@/apis/layout.js'

export const category = defineStore('category', () => {

    const categoryList = ref([])
    const  getList = async () => {
        const res = await getCategoryAPI()
        categoryList.value = res.result
    }
    

    return {categoryList, getList}
})