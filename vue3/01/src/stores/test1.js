import { defineStore } from 'pinia'
import { storeToRefs } from 'pinia'

// test 相当于id
export const testStore = defineStore('test', {
    // state 相当于data数据
    state: () => {
        return {
            
        }

    },

    // 项目与methods
    actions: {

    },

    // 相当于computed
    getters: {

    }
})