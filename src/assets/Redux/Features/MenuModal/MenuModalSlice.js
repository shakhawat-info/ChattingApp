import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
};

export const menuModalSlice = createSlice({
  name: "menuModal",
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = !state.value;
    },
    menuFalse: (state) => {
      state.value = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle, menuFalse } = menuModalSlice.actions;

export default menuModalSlice.reducer;
