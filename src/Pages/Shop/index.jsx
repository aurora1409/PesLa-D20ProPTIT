import React from "react";

import "./index.css";
import "./responsive-content.css";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ProductList from "./Components/ProductList.jsx";

const Shop = () => {
  return (
    <React.Fragment>
      <Header />
      <ProductList />
      <Footer />
    </React.Fragment>
  );
};
export default Shop;
