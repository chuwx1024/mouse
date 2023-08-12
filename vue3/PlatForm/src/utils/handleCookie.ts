import Cookie from 'js-cookie'

const tokenKey = 'TOKEN'

export const getToken = () => {
    return Cookie.get(tokenKey)
}

export const setToken = (token:string) => {
    return Cookie.set(tokenKey, token)
}

export const removeToken = () => {
    return Cookie.removeToken(tokenKey)
}