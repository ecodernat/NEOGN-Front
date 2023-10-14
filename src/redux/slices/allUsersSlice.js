import { createSlice } from "@reduxjs/toolkit";

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState: {
    users: [],
  },
  reducers: {
    getUsers(state, action) {
      state.users = action.payload;
    },
  },
});

export const { getUsers } = allUsersSlice.actions;

export default allUsersSlice.reducer;
