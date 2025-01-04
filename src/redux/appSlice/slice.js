import { createSlice } from "@reduxjs/toolkit";

const appSlise = createSlice({
  name: "app",
  initialState: {
    isOpenMenu: false,
  },
  reducers: {
    setIsOpenMenu: (state, action) => {
      state.isOpenMenu = action.payload;
    },
  },
});

export const { setIsOpenMenu } = appSlise.actions;
export default appSlise.reducer;
