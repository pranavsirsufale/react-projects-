import { configureStore } from "@reduxjs/toolkit";
import authSlice from './slice/authSlice.js'
import postSlice from './slice/postSlice.js'


const store = configureStore({
    reducer : {
        auth : authSlice,
        post : postSlice
    }
})

export default store