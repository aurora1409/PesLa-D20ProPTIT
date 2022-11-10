import axios from "axios";

function AxiosToken(endpoint, method = "GET", token) {
  let baseURL = "https://petsla-api.herokuapp.com";
  //console.log(baseURL + endpoint);
  return axios({
    method: method,
    url: baseURL + endpoint,
      // data: body,
      headers: {
        'Authorization': "Bearer" + token
    }
  });
}

export default AxiosToken;