import { configureStore } from '@reduxjs/toolkit';
import menuModal from './Features/MenuModal/MenuModalSlice';
import  theme  from './Features/Theme/ThemeSlice';



export const store = configureStore({
  reducer: {
    menuToggle: menuModal,
    themeToggle : theme,
  },
})