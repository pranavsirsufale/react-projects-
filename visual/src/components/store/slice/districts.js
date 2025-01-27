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
            state.phdDistricts = action.payload
        }
    }
})

export const { addPHDDistricts } = districtsSlice.actions;

export default districtsSlice.reducer