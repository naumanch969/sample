import axios from 'axios'
import { baseURL } from '../../constant.js'
import Cookie from 'js-cookie'

const API = axios.create({ baseURL })

API.interceptors.request.use((req) => {
    const profile = Cookie.get('profile')
    if (profile) {
        const user = JSON.parse(profile)
        req.headers.authtoken = user.token
    }
    return req
})

export const register = (userData) => API.post(`/user/register`, userData)
export const login = (userData) => API.put(`/user/login`, userData)

export const getUsers = () => API.get(`/user/all`)
export const getUser = (userId) => API.get(`/user/get/get/${userId}`)
export const updateUser = (userId, userData) => API.put(`/user/update/update/${userId}`, userData)
export const deleteUser = (userId) => API.delete(`/user/delete/delete/${userId}`)