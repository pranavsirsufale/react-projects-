import { configureStore } from "@reduxjs/toolkit";
import themeSlice from './slice/Theme'


const store = configureStore({
    reducer : {
        themeSlice
    }
})
