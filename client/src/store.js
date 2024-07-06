import { configureStore } from "@reduxjs/toolkit";
import dishReducer from "./reducers/dishSlice";
import menuReducer from "./reducers/menuSlice";
import userReducer from "./reducers/userSlice";
import loginUserReducer from "./reducers/loginUserSlice";
import couponReducer from "./reducers/couponSlice";
import tranReducer from "./reducers/tranSlice";
import orderReducer from "./reducers/orderSlice";
import authReducer from "./reducers/authSlice"
import { applyMiddleware } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk";
// const applyMiddleware = redux.applyMiddleware;

const store = configureStore(
  {
    reducer: {
      dish: dishReducer,
      menu: menuReducer,
      user: userReducer,
      loginUser: loginUserReducer,
      coupon: couponReducer,
      tran: tranReducer,
      order: orderReducer,
      auth:authReducer
    },
  },
// middleware:()
);
export default store;
