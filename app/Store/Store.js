import { configureStore } from '@reduxjs/toolkit';
import sidebarReducer from './Features/Sidebar/SidebarSlice';

const store = configureStore({
  reducer: {
    sidebar: sidebarReducer,
  },
});

export default store;