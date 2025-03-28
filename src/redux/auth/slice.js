import { createSlice } from "@reduxjs/toolkit";
import { fetchSignup,
  //  signIn, signOut, refreshUser
   } from "./operations";

const initialState={
  user: {
    name: null,
    email: null
  },
  token: null,
  isLoggedIn: true,
  isRefreshing: false,
  isLoading: false,
  isError: false,
  userType: 'owner', // умолчанию
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserType(state, action) {
      state.userType = action.payload;
    },
    setToken(state, action) {
      state.token = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSignup.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchSignup.fulfilled, (state, action) => { 
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.userType = action.payload.userType;
      })
      .addCase(fetchSignup.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload || true;
      })
      // .addCase(signIn.pending, (state) => {
      //   state.isLoading = true;
      //   state.isError = false;
      // })
      // .addCase(signIn.fulfilled, (state, action) => {
      //   state.user = action.payload.user;
      //   state.token = action.payload.token;
      //   state.isLoggedIn = true;
      //   state.isLoading = false;
      //   state.userType = action.payload.userType;
      // })
      // .addCase(signIn.rejected, (state, action) => {
      //   state.isLoading = false;
      //   state.isError = action.payload || true;
      // })
      //  .addCase(signOut.fulfilled, (state) => {
      //   state.user = { name: null, email: null };
      //   state.token = null;
      //   state.isLoggedIn = false;
      //   state.userType = "owner"; 
      //  })
      //  .addCase(refreshUser.pending, (state) => {
      //    state.isRefreshing = true;
      //    state.isError = false;
      // })
      // .addCase(refreshUser.fulfilled, (state, action) => {
      //   state.token = action.payload.accessToken;  // 🟢 Записываем accessToken???проверить док-ю апи
      //   state.user = action.payload.user;
      //   state.isLoggedIn = true;
      //   state.isRefreshing = false;
      //   state.userType = action.payload.userType; 
      // })
      // .addCase(refreshUser.rejected, (state, action) => {
      //   state.isRefreshing = false;
      //   state.isLoggedIn = false;
      //   state.isError = action.payload || true;
      // });
  },
});

export const { setUserType, setToken } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;