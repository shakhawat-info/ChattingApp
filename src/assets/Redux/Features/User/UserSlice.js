import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: localStorage.getItem("userinfo")
    ? JSON.parse(localStorage.getItem("userinfo"))
    : null,
};

export const userSlice = createSlice({
  name: "userinfo",
  initialState,
  reducers: {
    userinfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { userinfo } = userSlice.actions;

export default userSlice.reducer;
