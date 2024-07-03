import { configureStore } from "@reduxjs/toolkit";
import dishReducer from "./reducers/dishSlice";
import menuReducer from "./reducers/menuSlice";
import userReducer from "./reducers/userSlice"
const store = configureStore({
  reducer: {
    dish: dishReducer,
    menu: menuReducer,
    user: userReducer,
  }
});
export default store;
