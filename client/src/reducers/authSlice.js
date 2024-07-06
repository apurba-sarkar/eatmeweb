// reducers/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;
    },
    logoutA: (state) => {
      state.isAuthenticated = false;
    },
  },
});

export const { login, logoutA } = authSlice.actions;

export default authSlice.reducer;
