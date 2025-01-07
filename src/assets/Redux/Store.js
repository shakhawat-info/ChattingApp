import { configureStore } from '@reduxjs/toolkit';
import menuModal from './Features/MenuModal/MenuModalSlice';
import  theme  from './Features/Theme/ThemeSlice';
import userinfo from './Features/User/UserSlice';
import  modalLogout  from './Features/Logout/LogoutSlice';






export const store = configureStore({
  reducer: {
    menuToggle: menuModal,
    themeToggle : theme,
    userInfo: userinfo,
    modalLogout: modalLogout,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
})