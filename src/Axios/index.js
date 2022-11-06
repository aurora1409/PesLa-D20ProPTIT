import axios from "axios";

// gửi request tới backend của anh hậu đi kèm theo username và password, và sẽ nhận được response là 1 cái API ví dụ như
// API này: https://6307c5c93a2114bac76b5bbd.mockapi.io/_DucAnhDz_/API/TodoApp

// const axiosInstance = axios.create({
//   baseURL: "https://petsla-api.herokuapp.com/",
//   timeout: 5000,
//   headers: {
//     "content-type": "application/json",
//   },
// });

// export const Login = (username, password) => {
//   // https://petsla-api.herokuapp.com/login/ ==> post
//   return axios.get(
//     "https://6307c5c93a2114bac76b5bbd.mockapi.io/_DucAnhDz_/API/TodoApp"
//   );
//   // return promise
// };

// export const SignIn = (username, password) => {
//   // https://petsla-api.herokuapp.com/login/ ==> post
//   return axios.post("https://petsla-api.herokuapp.com/login/", {
//     username,
//     password,
//   });

//   // đăng ký thành công -> token, username, ....
//   // return promise
// };
// export const getOrderByCurrentUser mergeCode

//export default axiosInstance;

function Axios(endpoint, method = "GET", body) {
  let baseURL = "https://petsla-api.herokuapp.com/";
  //console.log(baseURL + endpoint);
  return axios({
    method: method,
    url: baseURL + endpoint,
    data: body,
  });
}

export default Axios;
