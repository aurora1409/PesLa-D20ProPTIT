import axios from "axios";

function AxiosToken(endpoint, method = "GET", token, body=[]) {
  let baseURL = "https://petsla-api.herokuapp.com";
  return axios({
    method: method,
    url: baseURL + endpoint,
    headers: {
      Authorization: "Bearer " + token,
    },
    data: body
  });
}



export default AxiosToken;
