import axios from "axios"

const service = axios.create({
    baseURL: '/dispatcherApi',
    timeout: 10000000000000
})

// 请求拦截器

service.interceptors.request.use(
    config => {
        return config
    },
    err => {
        return Promise.reject(err)
    }
)

// 响应拦截器
service.interceptors.response.use(
    response => {
        return response
    },
    err => {
        return err
    }
)