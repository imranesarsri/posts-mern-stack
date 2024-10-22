import request from '../../utils/request'
import { authActions } from '../slices/authSlice'
import { toast } from 'react-toastify'

// Login user
export function loginUser(user) {
    return async (dispatch) => {
        try {
            const { data } = await request.post('/api/auth/login', user)
            dispatch(authActions.login(data))
            localStorage.setItem("userInfo", JSON.stringify(data))
            toast.success('Login successful!')
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }
}

// Login user
export function regesterUser(user) {
    return async (dispatch) => {
        try {
            const { data } = await request.post('/api/auth/register', user)
            dispatch(authActions.regester(data))
            localStorage.setItem("userInfo", JSON.stringify(data))
            toast.success('regester successful!')
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }
}

// Sign out user
export function signOutUser() {
    return (dispatch) => {
        dispatch(authActions.signOut())
        localStorage.removeItem("userInfo")
        console.log('signOutUser')
    }
}