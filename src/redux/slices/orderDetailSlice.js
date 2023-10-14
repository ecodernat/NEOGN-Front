import { createSlice } from "@reduxjs/toolkit";

const orderDetailSlice = createSlice({
  name: "orderDetail",
  initialState: {
    orderDetail: [],
  },
  reducers: {
    getOrderDetail(state, action) {
      state.orderDetail = action.payload;
    },
    clearOrderDetail(state) {
      state.orderDetail = [];
    },
  },
});

export const { getOrderDetail, clearOrderDetail } = orderDetailSlice.actions;

export default orderDetailSlice.reducer;