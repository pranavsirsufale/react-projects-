import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    theme : true,
}

const themeSlice = createSlice({
    name : 'theme',
    initialState,
    reducers : {
        themeSwither : (state)=>{
            state.theme = !state.theme
        }
    }
}) 




export const { themeSwither} =themeSlice.actions 

export default themeSlice.reducer