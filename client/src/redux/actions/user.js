import Cookies from "js-cookie"
import { start, end, error, registerReducer, loginReducer, getUsersReducer, getUserReducer, updateUserReducer, deleteUserReducer } from '../reducers/user'
import * as api from '../api/index'

export const register = (userData, navigate) => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.register(userData)
        dispatch(registerReducer(data.result))
        navigate('/auth/login')
    } catch (err) {
        dispatch(error(err.message))
    }
    dispatch(end())
}
export const login = (userData, navigate) => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.login(userData)
        dispatch(loginReducer(data.result))
        Cookies.set('profile', data.token)
        navigate('/')
    } catch (err) {
        dispatch(error(err.message))
    }
    dispatch(end())
}
export const getUsers = (userIds) => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.getCertainUsers(userIds)
        dispatch(getUsersReducer(data.result))
    } catch (err) {
        dispatch(error(err.message))
    }
    dispatch(end())
}
export const getUser = () => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.getUser()
        dispatch(getUserReducer(data.result))
    } catch (err) {
        dispatch(error(err.message))
    }
    dispatch(end())
}
export const updateUser = () => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.updateUser()
        dispatch(updateUserReducer(data.result))
    } catch (err) {
        dispatch(error(err.message))
    }
    dispatch(end())
}
export const deleteUser = () => async (dispatch) => {
    dispatch(start())
    try {
        const { data } = await api.deleteUser()
        dispatch(deleteUserReducer(data.result))
    } catch (err) {
        dispatch(error(err.message))
    }
    dispatch(end())
}