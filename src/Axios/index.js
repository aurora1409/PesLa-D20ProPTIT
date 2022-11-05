import axios from "axios";

// gửi request tới backend của anh hậu đi kèm theo username và password, và sẽ nhận được response là 1 cái API ví dụ như
// API này: https://6307c5c93a2114bac76b5bbd.mockapi.io/_DucAnhDz_/API/TodoApp
export const Login = (username, password) => {
  // https://petsla-api.herokuapp.com/login/ ==> post
  return axios.get(
    "https://6307c5c93a2114bac76b5bbd.mockapi.io/_DucAnhDz_/API/TodoApp"
  );
  // return promise
};

export const SignIn = (username, password) => {
  // https://petsla-api.herokuapp.com/login/ ==> post
  return axios.post("https://petsla-api.herokuapp.com/login/", {
    username,
    password,
  });

  // đăng ký thành công -> token, username, ....
  // return promise
};
// export const getOrderByCurrentUser mergeCode
