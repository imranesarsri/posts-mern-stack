import { createSlice } from "@reduxjs/toolkit"


const profileSlice = createSlice({

    name: "profile",
    initialState: {
        profile: null
    },
    reducers: {
        setProfile(state, action) {
            state.profile = action.payload
        },
        setProfileImage(state, action) {
            state.profile.profileImage = action.payload
        },
        updateProfile(state, action) {
            state.profile = action.payload
        }
    }
})
const profileReducer = profileSlice.reducer
const profileActions = profileSlice.actions


export {
    profileReducer,
    profileActions
}