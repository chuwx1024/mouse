import axios from "axios";
import { getToken } from "@/utils/handleCookie.ts";


const service = axios.create({
    baseURL: '/dispatcherApi',
    timeout: 10000000
})

service.interceptors.request.use(config => {

    // 给接口统一添加token
    config.headers['Token'] = getToken() || ''
    
    

    return config
},  err => {

    return Promise.reject(err)
})

service.interceptors.response.use( response => {

    return response

}, err => {
    return Promise.reject(err)
})

export default service