import request from '../../utils/request'
import { profileActions } from '../slices/profileSlice'
import { toast } from 'react-toastify'

// Get user profile
export function getUserProfile(userID) {
    return async (dispatch) => {
        try {
            const { data } = await request.get(`/api/users/${userID}`)
            dispatch(profileActions.setProfile(data))
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }
}
