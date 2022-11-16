import axios from "axios";

function AxiosToken(endpoint, method = "GET", token) {
  let baseURL = "https://petsla-api.herokuapp.com";
  return axios({
    method: method,
    url: baseURL + endpoint,
    headers: {
      Authorization: "Bearer " + token,
    },
  });
}

export default AxiosToken;
