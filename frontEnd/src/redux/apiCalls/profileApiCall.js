import request from '../../utils/request'
import { profileActions } from '../slices/profileSlice'
import { authActions } from '../slices/authSlice'
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


// Upload profile image
export function UploadProfileImage(newImage) {
    return async (dispatch, getState) => {
        try {
            const token = getState().auth.user.token;
            console.log('Token being sent:', token);  // Log the token

            const { data } = await request.post(`/api/users/profile-photo-upload`, newImage, {
                headers: {
                    token: `${token}`,
                    "Content-Type": "multipart/form-data"
                }
            })

            dispatch(profileActions.setProfileImage(data.profilePhoto))
            dispatch(authActions.setUserProfile(data.profilePhoto))
            toast.success(data.message)

            // Update user profile in localStorage
            const user = JSON.parse(localStorage.getItem("userInfo"))
            user.profilePhoto = data?.profilePhoto
            localStorage.setItem("userInfo", JSON.stringify(user))
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }
}

// Update profile
export function UpdateProfile(userID, profileData) {
    return async (dispatch, getState) => {
        try {
            const token = getState().auth.user.token;
            console.log(userID)
            const { data } = await request.put(`/api/users/${userID}`, profileData, {
                headers: {
                    token: `${token}`,
                }
            })
            dispatch(profileActions.updateProfile(data))
            dispatch(authActions.setUserUserName(data.userName))
            toast.success("Updated successfully")
            // Update userName profile in localStorage
            const user = JSON.parse(localStorage.getItem("userInfo"))
            user.userName = data?.userName
            localStorage.setItem("userInfo", JSON.stringify(user))
        } catch (e) {
            toast.error(e.response.data.message)
        }
    }
}
