import React from "react";

import "./index.css";
import "./responsive-content.css";

import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import ProductList from "./Components/ProductList.jsx";

export default function Shop() {
  return (
    <>
      <Header />
      <ProductList />
      <Footer />
    </>
  );
}
