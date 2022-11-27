import { createSlice } from "@reduxjs/toolkit";

const SearchProduct = createSlice({
  name: "SearchProducts",
  initialState: {
    searchText: "",
  },
  reducers: {
    setSearchText(state, action) {
      state.searchText = action.payload;
    },
  },
});

export const { setSearchText } = SearchProduct.actions;
export default SearchProduct.reducer;
