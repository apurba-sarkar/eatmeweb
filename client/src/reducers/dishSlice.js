import { createSlice } from "@reduxjs/toolkit";

const sample = [
  { id: 19, item: "waffles", price: 90 },
  { id: 20, item: "crepes", price: 100 },
];
const initialState = {
  allDishes: [...sample],
};

const dishSlice = createSlice({
  name: "addDish",
  initialState,
  reducers: {
    addDish(state, action) {
      state.allDishes = [...state.allDishes, action.payload];
    },
    removeDish(state, action) {
      state.allDishes = state.allDishes.filter(
        (dish) => dish.id != action.payload
      );
      console.log("dish removed")
    },
  },
});

export const { addDish,removeDish } = dishSlice.actions;
export default dishSlice.reducer;
