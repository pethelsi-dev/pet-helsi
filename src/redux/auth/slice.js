import { createSlice } from "@reduxjs/toolkit";
import { signUp, signIn, signOut, refreshUser } from "./operations";

const initialState={
  user: {
    name: null,
    email: null
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  isError: false,
  userType: 'owner', // умолчанию
  modal: {
    isOpen: false,
    type: null, // Тип модалки, например, "registration", "forgot-password", "confirm-code"
    email: "", // Например, для модалки восстановления пароля
    code: "", // Код подтверждения
    error: null, // Ошибка, если есть
  },
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
    openModal(state, action) {
      state.modal.isOpen = true;
      state.modal.type = action.payload.type;
      state.modal.email = action.payload.email || '';
      state.modal.code = action.payload.code || '';
      state.modal.error = null;
    },
    closeModal(state) {
      state.modal.isOpen = false;
      state.modal.type = null;
      state.modal.email = '';
      state.modal.code = '';
      state.modal.error = null;
    },
    setModalError(state, action) {
      state.modal.error = action.payload;
    },
    setCode(state, action) {
      state.modal.code = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUp.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(signUp.fulfilled, (state, action) => { 
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.userType = action.payload.userType;
      })
      .addCase(signUp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload || true;
      })
      .addCase(signIn.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.userType = action.payload.userType;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = action.payload || true;
      })
       .addCase(signOut.fulfilled, (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.userType = "owner"; 
       })
       .addCase(refreshUser.pending, (state) => {
         state.isRefreshing = true;
         state.isError = false;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.token = action.payload.accessToken;  // 🟢 Записываем accessToken???проверить док-ю апи
        state.user = action.payload.user;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.userType = action.payload.userType; 
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = false;
        state.isError = action.payload || true;
      });
  },
});

export const { setUserType, setToken, openModal, closeModal, setModalError, setCode } = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;
