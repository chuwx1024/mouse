import httpInstance from "@/utils/http";

export const getList = () => {
    return httpInstance({
        url: 'home/category/head'
    })
}