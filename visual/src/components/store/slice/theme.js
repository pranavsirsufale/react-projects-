import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: JSON.parse(localStorage.getItem("dark")) === false ? false : true,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    themeSwither: (state) => {
      localStorage.setItem("dark", !state.theme);
      state.theme = !state.theme;
    },
  },
});

export const { themeSwither } = themeSlice.actions;

export default themeSlice.reducer;