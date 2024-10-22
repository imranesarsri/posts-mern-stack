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
        } catch (e) {
            toast.error(e.response.data.message)
            console.log(e)
        }
    }
}