import { createSlice } from "@reduxjs/toolkit";

const initUser = {
  isLogin: false,
  isRegister: false,
  isRegisterState: false,
  isLoginState: false,
  userRegister: [],
  product: [],
};

const userSlice = createSlice({
  name: "Users",
  initialState: initUser,
  reducers: {
    addNewUser: (user, actions) => {
      user.userRegister.push(actions.payload);
    },
    IsLogin: (user, actions) => {
      user.isLogin = actions.payload;
    },
    IsRegister: (user, actions) => {
      user.isRegister = actions.payload;
    },
    IsLoginState: (user, actions) => {
      console.log("login state");
      user.isLoginState = actions.payload;
    },
    IsRegisterState: (user, actions) => {
      user.isRegisterState = actions.payload;
    },
  },
});

export const {
  addNewUser,
  IsLogin,
  IsRegister,
  IsLoginState,
  IsRegisterState,
} = userSlice.actions;

export default userSlice.reducer;