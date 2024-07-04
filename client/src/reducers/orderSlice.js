import { createSlice } from "@reduxjs/toolkit";

const orderlist = [
  {
    oderid: "170651",
    date: "19-05-24",
    itemc: 4,
    price: 451,
  },
  {
    oderid: "179624",
    date: "20-06-23",
    itemc: 1,
    price: 122,
  },
  {
    oderid: "178388",
    date: "23-09-24",
    itemc: 5,
    price: 745,
  },
  {
    oderid: "178388",
    date: "23-09-24",
    itemc: 2,
    price: 465,
  },
  {
    oderid: "178388",
    date: "23-09-24",
    itemc: 6,
    price: 235,
  },
  {
    oderid: "178388",
    date: "26-10-24",
    itemc: 4,
    price: 745,
  },
  {
    oderid: "178300",
    date: "23-09-24",
    itemc: 8,
    price: 1045,
  },
  {
    oderid: "178323",
    date: "23-09-24",
    itemc: 3,
    price: 673,
  },
];

const initialState = {
  allorder: [...orderlist],
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrder(state, action) {
      state.allorder = [...state.order.allorder, ...action.payload];
    },
  },
});

export const { addOrder } = orderSlice.actions;
export default orderSlice.reducer;
