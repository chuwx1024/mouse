import httpInstance from "@/utils/http";

export const getBannerAPI = (params = {}) => {

    const { distributionSite = '1'} = params
    return httpInstance({
        url: 'home/banner',
        params: {
            distributionSite 
        }
    })
}

// 获取产品列表

export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}

// 获取面包屑数据

export const getTopCatergoryAPI  = (id) => {
    return httpInstance({
        url: '/category',
        params: {
            id
        }
    })
}


// 获取subCategory


export const getCategoryFilterAPI = (id) => {
    return httpInstance({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

/**
 * 
 * @param {
 *  category: 1003000
 * }
 * @returns 
 */


// 获取基础列表数据渲染
export const getSubCategoryAPI = (data) => {
    return httpInstance({
        url: '/category/goods/temporary',
        method: "post",
        data
    })
}

// 获取商品详情页接口

export const getDetail = (id) => {
    return httpInstance({
        url: '/goods',
        params: {
            id
        }
    })
}


// 获取热点接口


export const fetchHotGoodsAPI = ({ id, type, limit}) => {
    return httpInstance({
        url: '/goods/hot',
        params: {
            id,
            type,
            limit
        }
    })
}


// 登录用户

export const loginAPI = ({account, password}) => {
    return httpInstance({
        url: '/login',
        method: 'POST',
        data: {
            account,
            password
        }
    })
}
