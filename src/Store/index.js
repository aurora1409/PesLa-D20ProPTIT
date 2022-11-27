import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import user from "./User";
import productadded from "./ProductAdded";
import SearchProducts from "./Search/SearchProduct";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
const persistConfig = {
  key: "root",
  storage: storage,
  whitelist: ["productadded"],
};
const rootReducers = combineReducers({
  user,
  productadded,
  SearchProducts,
});
const persistedReducer = persistReducer(persistConfig, rootReducers);
const store = configureStore({
  reducer: persistedReducer,
});
const persistor = persistStore(store);
export { store, persistor };
