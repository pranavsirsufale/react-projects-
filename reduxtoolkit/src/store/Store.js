import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/Todo/TodoSlice'


//? Step 4 : configure Store using the reducer 
export const store = configureStore({
    reducer : todoReducer
})