import { createSlice } from "@reduxjs/toolkit";

const initUser = {
  
  isReadOnly: true,
  userRegister: [],
  product: [],
};

const userSlice = createSlice({
  name: "Users",
  initialState: initUser,
  reducers: {
    addNewUser: (user, actions) => {
      // console.log("hi");
      // console.log(actions);
      // let userFirst = user.userRegister.find(
      //   (e) => JSON.stringify(e) === JSON.stringify(actions.payload)
      // );
      // console.log(userFirst);
      // if (userFirst === undefined)
      user.userRegister.push(actions.payload);
      // else return userFirst
    },
   
    IsReadOnly: (user, actions) => {
      user.isReadOnly = actions.payload;
    },
    checkUser: (user, actions) => {
      console.log(user.userRegister);
      let userFind = user.userRegister.find(
        (e) =>
          e.username === actions.payload.username &&
          e.password === actions.payload.password
      );
      console.log(userFind);
      return userFind;
      // if (userFirst === undefined) user.userRegister.push(actions.payload);
    },

    // reducers: 1 state và nhiều action
    // cái này mình sẽ viết các actions vào đây ví dụ như truyền token vào trong state user
    // setToken: (user, actions) => {
    //user.token = actions.payload;

    // return actions.payload
    //console.log(actions);
    // cái actions này sẽ là 1 object kiểu như này
    /*
                {
                    type: '...'
                    payload: '....' cái này là giá trị mình truyền vào
                }

            */
  },
});

export const {
  addNewUser,
  IsReadOnly,
  checkUser,
} = userSlice.actions;

// // đây là export store ( store gồm reducers, reducers sẽ lại gồm state và actions ) actions là hàm mà mình gửi vào
// const store = configureStore({
//   reducer: {
//     user: userSlice.reducer,
//   },
// });

export default userSlice.reducer;
