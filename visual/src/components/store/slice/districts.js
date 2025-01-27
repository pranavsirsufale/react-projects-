import { createSlice  } from "@reduxjs/toolkit";



const initialState = {
    phdDistricts : {

    }
}


const districtsSlice = createSlice({
    name : 'districts',
    initialState,
    reducers : {
        addPHDDistricts : (state, action) => {
            console.log(action.payload)
            state.phdDistricts = action.payload
        }
    }
})

export const { addPHDDistricts } = districtsSlice.actions;

export default districtsSlice.reducer