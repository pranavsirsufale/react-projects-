import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slice/theme.js'
import genderReducer from './slice/gender.js'



export const store = configureStore({
    reducer : {
        themeReducer,
        genderReducer
    }
})