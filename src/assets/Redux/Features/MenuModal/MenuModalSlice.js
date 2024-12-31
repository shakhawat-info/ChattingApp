import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: false,
}

export const menuModalSlice = createSlice({
  name: 'menuModal',
  initialState,
  reducers: {
    toggle: (state) => {
        state.value = !state.value;
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggle }  = menuModalSlice.actions

export default menuModalSlice.reducer