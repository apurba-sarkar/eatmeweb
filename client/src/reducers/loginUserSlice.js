import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeUser: "",
};

const loginUserSlice = createSlice({
  name: "loginUser",
  initialState,
  reducers: {
    addLoginUser(state, action) {
      state.activeUser = action.payload;
    },
    logout(state, action) {
      state.activeUser = [];
    },
  },
});

export const { addLoginUser,logout } = loginUserSlice.actions;
export default loginUserSlice.reducer;
