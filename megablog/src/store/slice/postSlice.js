import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    post : []
}

const postSlice = createSlice({
    name : 'post',
    initialState,
    reducers : {
        addPosts : (state,action)=> {
            state.post = [...state.post ,...action.payload]
        }
    }
})


export const {  addPosts } = postSlice.actions;

export default postSlice.reducer