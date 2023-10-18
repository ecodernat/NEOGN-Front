import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  name: null,
  username: null,
  email: null,
  photo: null,
  address: null,
  wishlist: [],
  isDisable: false,
  isAdmin: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser(state, action) {
      const {
        id,
        name,
        username,
        email,
        photo,
        address,
        wishlist,
        isDisable,
        isAdmin,
      } = action.payload;
      return {
        ...state,
        ...(id ? { id } : {}),
        ...(name ? { name } : {}),
        ...(username ? { username } : {}),
        ...(email ? { email } : {}),
        ...(photo ? { photo } : {}),
        ...(address ? { address } : {}),
        ...(wishlist ? { wishlist } : []),
        ...(isDisable ? { isDisable } : {}),
        ...(isAdmin ? { isAdmin } : {}),
      };
    },
    addToWishlist(state, action) {
      const { id } = action.payload;
      if (!state.wishlist.find((product) => product.id === id)) {
        state.wishlist.push(action.payload);
      }
    },

    removeFromWishlist: (state, action) => {
      const { id } = action.payload;

      state.wishlist = state.wishlist.filter((product) => product.id !== id);
    },

    clearUser(state) {
      return {
        ...state,
        id: null,
        name: null,
        username: null,
        email: null,
        photo: null,
        address: null,
        wishlist: [],
        isDisable: false,
        isAdmin: false,
      };
    },
  },
});

export const { getUser, removeFromWishlist, addToWishlist, clearUser } =
  userSlice.actions;
export default userSlice.reducer;
