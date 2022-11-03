// -> mỗi 1 token -> list gian hàng khác nhau của từng người
// nếu mà đăng nhập thành công -> lưu token -> redux lưu token
// dùng API nào mà cần token  -> gửi token ( lấy token từ redux ra )

// phần 1: https://viblo.asia/p/tim-hieu-redux-toolkit-phan-1-YWOZrN3vZQ0
// phần 2: https://viblo.asia/p/tim-hieu-redux-toolkit-phan-2-QpmlejPD5rd

import { configureStore, createSlice } from "@reduxjs/toolkit";
// khởi tạo state
const initUser = {
  // object
  token: "@123",
  name: "huyền",
  phoneNumber: "123",
  address: "123",
  product: ["123", "456"], // danh sách gian hàng của từng user -> cái này fetchAPI rồi lưu vào user.product // dũng lưu sản phẩm lúc click vào đây
};
// thêm vào giỏ hàng sẽ làm như này:
// nếu mà bấm add to cart thì sẽ thêm 1 phần tử vào trong product

// khởi tạo reducer
const userSlice = createSlice({
  name: "user",
  initialState: initUser, // khởi tạo state
  reducers: {
    // reducers: 1 state và nhiều action
    // cái này mình sẽ viết các actions vào đây ví dụ như truyền token vào trong state user
    setToken: (user, actions) => {
      // cái actions này sẽ là 1 object kiểu như này
      /*
                {
                    type: '...'
                    payload: '....' cái này là giá trị mình truyền vào
                }

            */
      user.token = actions.payload;
    },
  },
});

// sau dó export ra
export const { setToken } = userSlice.actions; // đây là actions mình định nghĩa trên kia, muốn dùng cái nào thì import nó ra

// đây là export store ( store gồm reducers, reducers sẽ lại gồm state và actions ) actions là hàm mà mình gửi vào
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;
