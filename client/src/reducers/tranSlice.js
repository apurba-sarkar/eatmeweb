import { createSlice } from "@reduxjs/toolkit";

const tranlist = [
  {
    key: 1,
    oderid: "179624",
    itemc: 1,
    price: 400,
    type: "add",
    date: "10-03-24",
  },
  {
    key: 2,
    oderid: "170651",
    itemc: 4,
    price: 451,
    type: "pay",
    date: "10-03-24",
  },
  {
    key: 3,
    oderid: "179624",
    itemc: 1,
    price: 122,
    type: "pay",
    date: "11-04-24",
  },
  {
    key: 4,
    oderid: "178388",
    itemc: 5,
    price: 745,
    type: "pay",
    date: "18-06-24",
  },
  {
    key: 5,
    oderid: "178388",
    itemc: 7,
    price: 500,
    type: "add",
    date: "22-07-24",
  },

  {
    key: 6,
    oderid: "178388",
    itemc: 6,
    price: 1000,
    type: "add",
    date: "27-08-24",
  },
  {
    key: 7,
    oderid: "178388",
    itemc: 7,
    price: 745,
    type: "pay",
    date: "28-08-24",
  },
];

const initialState = {
  alltran: [...tranlist],
};

const tranSlice = createSlice({
  name: "tran",
  initialState,
  reducers: {
    addTran(state, action) {
      state.tranlist = [...state.tranlist, action.payload];
    },
  },
});

export const { addTran } = tranSlice.actions;
export default tranSlice.reducer;
