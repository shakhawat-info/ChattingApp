import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    value: false,
}

export const LogoutSlice = createSlice({
  name: "LogoutModal ",
  initialState: initialState,
  reducers: {
    modalLogout: (state)=>{
      state.value = !state.value
    }
  }
})

export const { modalLogout }  = LogoutSlice.actions

export default LogoutSlice.reducer