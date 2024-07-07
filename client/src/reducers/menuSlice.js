import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../data";
import axios from "axios";
export const fetchData = createAsyncThunk("menu/fetchData", async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );
  return response.data;
});

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
        console.log(state.status);
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";

        state.user = action.payload;
        console.log(state.user);
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
        console.log(state.error);
      });
  },
});

export const { nonveg, veg, all } = menuSlice.actions;
export default menuSlice.reducer;
