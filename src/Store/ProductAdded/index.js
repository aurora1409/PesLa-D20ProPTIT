import { createSlice } from "@reduxjs/toolkit";
const ProductAdded = createSlice({
  name: "productadded",
  initialState: {
    productList: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.productList.push(action.payload);
    },
    increaseProduct: (state, action) => {},
    decreaseProduct: (state, action) => {},
    removeProduct: (state, action) => {},
    clearProduct: state => {
      state.productList.clear();
    },
  },
});

export const {
  addProduct,
  increaseProduct,
  decreaseProduct,
  removeProduct,
  clearProduct,
} = ProductAdded.actions;
export default ProductAdded.reducer;
