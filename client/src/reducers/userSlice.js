import { createSlice } from "@reduxjs/toolkit";

const userlist = [
  {
    fullname: "apurba sarkar",
    pincode: "743230",
    mobile: "9807653873",
    email: "apurba@gmail.com",
    password: "12345",
    address:"kolkata"
  },
  {
    fullname: "apurba sarkar",
    pincode: "743230",
    mobile: "9807653873",
    email: "apurba@gmail.coma",
    password: "123456",
    address:"ranaghat"
  },
];
const initialState = {
  alluser: [...userlist],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.alluser = [...state.alluser, action.payload];
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
