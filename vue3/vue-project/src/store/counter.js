import { defineStore } from 'pinia'

import { ref, computed } from 'vue'
import axios from 'axios'

const apiUrl = 'http://geek.itheima.net/v1_0/channels'

export const useCounterStore = defineStore('counter',() => {
    const count = ref(0)

    // 方法
    const increment = () => {
        count.value++
    }

    // getter定义
    const doubleCount = computed(() => {
        return count.value * 2
    })

    // action
    const list = ref([])
    const getList = async () => {
        const res = await axios.get(apiUrl)
        console.log(res)
    }




    return {
        count,
        doubleCount,
        increment,
        getList

    }
})