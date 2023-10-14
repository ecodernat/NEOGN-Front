import { createSlice } from "@reduxjs/toolkit";

const myOrdersSlice = createSlice({
  name: "myOrders",
  initialState: {
    myOrders: [],
  },
  reducers: {
    getOrders(state, action) {
      state.myOrders = action.payload;
    },
    clearOrders(state) {
      state.myOrders = [];
    },
  },
});

export const { getOrders, clearOrders } = myOrdersSlice.actions;

export default myOrdersSlice.reducer;