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
            const { auth } = getState(); // Destructure auth from state
            const token = auth.user.token;

            const { data } = await request.put('/api/users/profile-photo-upload', newImage, {
                headers: {
                    token, // No need for template literals here
                    'Content-Type': 'multipart/form-data'
                }
            });

            // Update profile image in the state
            dispatch(profileActions.setProfileImage(data.profilePhoto));
            dispatch(authActions.setUserProfile(data.profilePhoto));
            toast.success(data.message);

            // Update user profile in localStorage, ensuring it exists
            const user = JSON.parse(localStorage.getItem('userInfo'));
            if (user) {
                user.profilePhoto = data.profilePhoto;
                localStorage.setItem('userInfo', JSON.stringify(user));
            }

        } catch (e) {
            // Gracefully handle any missing error message
            const errorMessage = e.response?.data?.message || 'Failed to upload profile image';
            toast.error(errorMessage);
        }
    };
}



export function UploadBackgroundProfileImage(newBackgroundImage) {
    return async (dispatch, getState) => {
        try {
            const token = getState().auth.user.token;

            const { data } = await request.put(`/api/users/profile-background-image-upload`, newBackgroundImage, {
                headers: {
                    token: `${token}`,
                    "Content-Type": "multipart/form-data"
                }
            });

            // Update the profile background image
            dispatch(profileActions.setBackgoundProfileImage(data.backgroundImage)); // Access backgroundImage directly

            // Display the success message
            toast.success(data.message); // Message should be directly in 'data'

        } catch (e) {
            toast.error(e.response?.data?.message || "An error occurred");
        }
    };
}


// Update profile
export function UpdateProfile(userID, profileData) {
    return async (dispatch, getState) => {
        try {
            const token = getState().auth.user.token;

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
