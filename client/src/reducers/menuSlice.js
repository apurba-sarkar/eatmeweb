import { createSlice } from "@reduxjs/toolkit";
import data from "../data";

const initialState = {
  allmenu: data,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    nonveg(state, action) {
      state.allmenu = data;
      state.allmenu = state.allmenu.filter((dish) => dish.type == "nonveg");
    },
    veg(state, action) {
      state.allmenu = data;
      state.allmenu = state.allmenu.filter((dish) => dish.type != "nonveg");
    },
    all(state, action) {
      state.allmenu = data;
      //   state.allmenu = state.allmenu.filter((dish) => dish.type != "nonveg");
    },
  },
});

export const { nonveg, veg, all } = menuSlice.actions;
export default menuSlice.reducer;
