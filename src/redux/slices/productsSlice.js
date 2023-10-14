import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState:{
    products:[],
  },
  reducers: {
    getProducts(state, action) {
      state.products = action.payload;
    },
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    removeProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.SKU !== action.payload
      );
    },
    filterProducts(state,action){
      state.products = action.payload;
    },
    updateProduct(state, action) {
      const { SKU, ...updatedProduct } = action.payload;
      const index = state.products.findIndex((product) => product.SKU === SKU);
      if (index !== -1) {
        state.products[index] = { ...state.products[index], ...updatedProduct };
      }
    },
  },
});

export const { getProducts, addProduct, filterProducts, removeProduct, updateProduct } =
  productSlice.actions;

export default productSlice.reducer;
