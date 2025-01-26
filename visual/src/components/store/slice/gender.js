import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
    gender : {

    }, 
    phdProgrammeWiseGender: {

    }
}


export const genderSlice = createSlice({
    name : 'gender',
    initialState,
    reducers : {
        addPHDGenderData : (state,action) => {
            state.gender.phd = action.payload
        }, 
        addPhdProgrammeWiseGenderDistribution : (state,action) => {
            state.phdProgrammeWiseGender = action.payload
        }
    }
})

export const { addPHDGenderData , addPhdProgrammeWiseGenderDistribution } = genderSlice.actions

export default genderSlice.reducer