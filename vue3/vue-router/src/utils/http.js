import axios from "axios";
import 'element-plus/theme-chalk/el-message.css'
import { ElMessage } from 'element-plus'
import { useUserStore } from "@/stores/user";



const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

httpInstance.interceptors.request.use( config => {
    const useStore = useUserStore()
    const token = useStore.userInfo.token
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config

}, err => Promise.reject(err))

httpInstance.interceptors.response.use( res => res.data, err => {

    if (err.code === 'ERR_BAD_REQUEST') {
        ElMessage({ type: 'error', message: err.message })
    }
    return Promise.reject(err)
})
export default httpInstance