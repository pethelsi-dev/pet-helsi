import { createSlice } from "@reduxjs/toolkit";

const appSlise = createSlice({
  name: "app",
  initialState: {
    isOpenMenu: false,
    isShowNotification:false,
  },
  reducers: {
    setIsOpenMenu: (state, action) => {
      state.isOpenMenu = action.payload;
    },
    setShowNotification: (state, action) => {
      state.isShowNotification = action.payload;
    },
  },
});

export const { setIsOpenMenu,setShowNotification } = appSlise.actions;
export default appSlise.reducer;
