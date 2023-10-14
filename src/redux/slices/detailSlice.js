import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "detail",
  initialState: {
    detail: [],
  },
  reducers: {
    setProductDetail(state, action) {
      state.detail = action.payload;
    },
    clearDetail(state) {
      state.detail = [];
    },
  },
});

export const { clearDetail, setProductDetail } = detailSlice.actions;

export default detailSlice.reducer;
