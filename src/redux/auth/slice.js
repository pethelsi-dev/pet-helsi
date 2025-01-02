import { createSlice } from "@reduxjs/toolkit";
// import { register, logIn, logOut, refreshUser } from "./operations";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    doctor: {
      name:null,
      email: null,
    },
    owner: {
      email: null,
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    // isDoctor: false,
    // isOwner: false,
  },
  //   extraReducers: builder =>
  //     builder
  //       .addCase(register.pending, state => {
  //         state.error = null;
  //         state.loading = true;
  //       })
  //       .addCase(register.fulfilled, (state, action) => {
  //         state.user = action.payload.user;
  //         state.token = action.payload.token;
  //         state.isLoggedIn = true;
  //       })
  //       .addCase(register.rejected, state => {
  //         state.error = true;
  //         state.loading = false;
  //       })
});

export default authSlice.reducer;
