import { createSlice } from "@reduxjs/toolkit"


const authSlice = createSlice({

    name: "auth",
    initialState: {
        user:
            localStorage.getItem('userInfo') ?
                JSON.parse(localStorage.getItem('userInfo')) :
                null
    },
    reducers: {
        login(state, action) {
            state.user = action.payload
        },
        regester(state, action) {
            state.user = action.payload
        },
        signOut(state) {
            state.user = null
        },
        setUserProfile(state, action) {
            state.user.profilePhoto = action.payload
        },
        setUserUserName(state, action) {
            state.user.userName = action.payload
        }
    }
})
const authReducer = authSlice.reducer
const authActions = authSlice.actions


export {
    authReducer,
    authActions
}