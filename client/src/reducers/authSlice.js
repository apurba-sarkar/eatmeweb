// reducers/authSlice.js
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isAuthenticated: localStorage.getItem("loginInBrowser")
  },
  reducers: {
    login: (state) => {
      localStorage.setItem("loginInBrowser",true)
      state.isAuthenticated = localStorage.getItem("loginInBrowser")
    },
    logoutA: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem("loginInBrowser",false)

    },
  },
});

export const { login, logoutA } = authSlice.actions;

export default authSlice.reducer;
