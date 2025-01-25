import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    gender : {

    }
}


export const genderSlice = createSlice({
    name : 'gender',
    initialState,
    reducers : {
        addGenderData : (state,action) => {

        }
    }
})

export const { addGenderData } = genderSlice.actions

export default genderSlice.reducer