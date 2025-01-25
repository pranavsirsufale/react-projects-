import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    gender : {

    }
}


export const genderSlice = createSlice({
    name : 'gender',
    initialState,
    reducers : {
        addPHDGenderData : (state,action) => {
            state.gender.phd = action.payload
        }
    }
})

export const { addPHDGenderData } = genderSlice.actions

export default genderSlice.reducer