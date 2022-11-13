import { configureStore, createSlice } from "@reduxjs/toolkit";
const initUser = {
  firstName: "",
  lastName: "",
  email: "",
  username: "",
  phoneNumber: "",
  address: "",
  password: "",
  userRegister: [],
  product: [],
};

const userSlice = createSlice({
  name: "Users",
  initialState: initUser,
  reducers: {
    addNewUser: (user, actions) => {
      console.log("hi");
      console.log(actions);
      user.userRegister.push(actions.payload);
    },
  },
});

export const {
  addNewUser,
  setFirstName,
  setLastName,
  setEmail,
  setUsername,
  setPassword,
  setPhoneNumber,
} = userSlice.actions;

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
