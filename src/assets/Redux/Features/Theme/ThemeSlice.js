import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: false,
  }

export const ThemeSlice = createSlice({
    name: 'theme',
    initialState: initialState,
    reducers: {
        theme: (state)=>{
            state.value = !state.value;
        }
    }
})


export const { theme } = ThemeSlice.actions;
export default ThemeSlice.reducer;