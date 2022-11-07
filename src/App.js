import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setToken } from "./Store"; // import từ file store/index.js

import Axios, { Login } from "./Axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Register from "./Components/Registers/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";

function App() {
  // muốn gọi setState thì dùng useDispatch
  // muốn gọi state thì dùng useSelect

  // ví dụ mình gọi user ra log thử
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  // console.log(user.token); // đây là lấy token
  // console.log(user.name); // dây là lấy tên
  // console.log(user.product);
  <Register />;
  useEffect(() => {
    // cái setToken này  setToken: (user, actions) => { }
    // nhưng mà chỉ cần truyền 1 tham số vào là đủ
    // dispatch(setToken("Token: Đưc Anh"));
    // gọi PromiseLogin
    // Login("username123", "password456")
    //   .then((response) => {
    //     console.log(response.data);
    //     // response.data nếu mà đăng nhập thành công sẽ có cả token
    //     // lúc đấy sẽ gọi setToken(token) -> user.token trong store
    //     // user.token -> dùng cho API
    //     // Test chức năng add order.
    //     // Test chức năng get order by current user.
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // Key, Value
    // Key: gõ luôn trong file
    // https://viblo.asia/p/local-storage-voi-javascript-djeZ1Gjj5Wz
    // Lưu token --> luu vào trong localStorage
    // if local.get(token) != null --> đã từng đăng nhập -> nhảy vào luôn ko cần đăng nhập
    // localStorage.setItem(
    //   "Petsla",
    //   "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY3NTc3NDMxLCJpYXQiOjE2Njc0OTEwMzEsImp0aSI6IjIwOTMxOTI0ODFjNTQ0ZmRiNTQxOTU1ZDYxZDc5YTU4IiwidXNlcl9pZCI6MTB9.tSFk6YGEf0N-H7rSOh4DoRagCbCe6Jk5A2NwXrctL-s"
    // );
    // Tắt bỏ máy tính sau mở lại vẫn lưu
  });

  //console.log(localStorage.getItem("Petsla"));

  return (
    <div className="App">
      {/* <HomePage /> */}
      <Register />
      <Routes>
        <Route path="/register" component={Register} />
      </Routes>
    </div>
  );
}

export default App;
