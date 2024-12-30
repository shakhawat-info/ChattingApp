import { configureStore } from '@reduxjs/toolkit';
import menuModal from '../Redux/Features/MenuModal/MenuModalSlice';



export const store = configureStore({
  reducer: {
    menuToggle: menuModal,
  },
})