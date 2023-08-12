import request from '@/utils/request'
import { type FormState } from '@/api/types/login.ts'


export const login = (data:FormState) => {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}