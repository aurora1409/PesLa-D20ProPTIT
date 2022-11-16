import { createSlice } from "@reduxjs/toolkit";
const ProductAdded = createSlice({
  name: "productadded",
  initialState: {
    /* [[item, count]] */
    productList: [],
  },
  reducers: {
    addProduct: (state, action) => {
      try {
        const item = action.payload;
        const idx = state.productList.findIndex(
          ([key, count], idx) => key.id === item.id
        );
        if (idx === -1) {
          state.productList.push([item, 1]);
        } else {
          state.productList[idx][1] += 1;
        }
      } catch (err) {
        console.log(err);
      }
    },
    increaseProduct: (state, action) => {
      try {
        const id = action.payload;
        const idx = state.productList.findIndex(
          ([key, count], idx) => key.id === id * 1
        );
        if (idx !== -1) {
          state.productList[idx][1] += 1;
        }
      } catch (err) {
        console.log(err);
      }
    },
    decreaseProduct: (state, action) => {
      try {
        const id = action.payload;
        const idx = state.productList.findIndex(
          ([key, count], idx) => key.id === id * 1
        );
        if (idx !== -1) {
          state.productList[idx][1] -= 1;
        }
      } catch (err) {
        console.log(err);
      }
    },
    removeProduct: (state, action) => {
      try {
        const id = action.payload;
        const idx = state.productList.findIndex(
          ([key, count], idx) => key.id === id * 1
        );
        if (idx !== -1) {
          state.productList.splice(idx, 1);
        }
      } catch (err) {
        console.log(err);
      }
    },
    clearProduct: state => {
      state.productList = [];
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
