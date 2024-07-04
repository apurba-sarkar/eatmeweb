import { createSlice } from "@reduxjs/toolkit";

const couponlist = [
  {
    cid: "EATME100",
    discount: 100,
  },
  {
    cid: "EATME80",
    discount: 80,
  },
  {
    cid: "EATME50",
    discount: 50,
  },
];

const initialState = {
  allCoupons: [...couponlist],
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    removeCoupon(state, action) {
      state.allCoupons = state.allCoupons.filter(
        (coupon) => coupon.cid != action.payload
      );
      
    },
  },
});

export const { removeCoupon } = couponSlice.actions;
export default couponSlice.reducer;
