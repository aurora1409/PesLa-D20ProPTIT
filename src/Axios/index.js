import axios from "axios";

function Axios(endpoint, method = "GET", body) {
  let baseURL = "https://petsla-api.herokuapp.com";
  return axios({
    method: method,
    url: baseURL + endpoint,
    data: body,
  });
}

export default Axios;
