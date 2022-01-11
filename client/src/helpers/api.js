import axios from 'axios'
import { getToken } from './auth'

export const login = async (data) => {
    console.log('login funciton')
    return makeAxiosRequest('/auth/login/', data)
}
export const register = async (data) => {
    return makeAxiosRequest('register', data)
}


const makeAxiosRequest = async (url, data) => {
    const config = getAxiosRequestConfig(url, data)
    const response = await axios(config)
    console.log(response)
    return response.data
}

export const getAxiosRequestConfig = (requestUrl, data, method = 'post') => {
    const config = {
        method,
        url: `localhost:8000/api/${requestUrl}/`,
        headers: {
            Authorization: `Bearer ${getToken()}`,
            'Content-Type': 'application/json',
        },
        data,
    }
    return config
}