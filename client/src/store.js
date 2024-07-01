import { configureStore } from "@reduxjs/toolkit";
import dishReducer from "./reducers/dishSlice";
import menuReducer from "./reducers/menuSlice";

const store = configureStore({
  reducer: {
    dish: dishReducer,
    menu: menuReducer,
  },
});
export default store;
