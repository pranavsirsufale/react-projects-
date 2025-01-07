import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/authSlice.js'
import postReducer from './slice/postSlice.js'


const store = configureStore({
    reducer : {
        auth : authReducer,
        post : postReducer
    }
})

export default store