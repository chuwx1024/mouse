import{ defineStore, storeToRefs } from 'pinia'

export const testStore = defineStore('page1', {
    // data
    state: () => {
        return {
            count: 0,
            message: 'store信息'
        }
    },

    // 方法
    actions: {

    },

    // 计算属性
    getters: {
        
    }
})

