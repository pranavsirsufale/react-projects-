import { configureStore } from "@reduxjs/toolkit";
import themeReducer from './slice/theme.js'
import genderReducer from './slice/gender.js'
import districtsReducer from './slice/districts.js'



export const store = configureStore({
    reducer : {
        themeReducer,
        genderReducer,
        districtsReducer
    }
})