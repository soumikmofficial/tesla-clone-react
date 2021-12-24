import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: { isSidebarOpen: false },
  reducers: {
    openSidebar: (state) => {
      console.log("menu clicked");
      return { ...state, isSidebarOpen: true };
    },
    closeSidebar: (state) => {
      return { ...state, isSidebarOpen: false };
    },
  },
});
export const { openSidebar, closeSidebar } = appSlice.actions;

export default appSlice.reducer;
