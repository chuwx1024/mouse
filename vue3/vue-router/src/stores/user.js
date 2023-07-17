import { defineStore } from 'pinia'
import { ref } from 'vue'
import { loginAPI } from '@/apis/banner'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'


export const useUserStore = defineStore('user', () => {
    const router = useRouter()
    const userInfo = ref({})

    // 登录信息持久化
    const getUserInfo = async ({ account, password}) => {
        const { code, result} = await loginAPI({ account, password})
        if (code === '1') {


            userInfo.value = result

            ElMessage({ type: 'success', message: '登录成功' })
            router.push({ path: '/'})
        }
        
    }

    // 退出清除用户信息 
    const clearUserInfo = () => {
        userInfo.value = {}
    }

    
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }



}, {
    persist: true
})