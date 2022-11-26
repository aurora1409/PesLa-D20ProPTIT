import axios from "axios";
import { baseURL } from "../../Config";
import AxiosToken from "../callAPIToken";

const getAPI = (path, headers) => {
  return axios
    .get(baseURL + path, {
      headers: headers,
    })
    .then(response => response.data)
    .catch(err => {
      console.log(err);
    });
};

const getProductList = () => {
  return getAPI("/products/");
};

const getProductItem = id => {
  return getAPI("/product/" + id);
};


export { getProductList, getProductItem };
