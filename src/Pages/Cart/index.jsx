import React from "react";
import Headers from "../../Components/Header";
import Footer from "../../Components/Footer";
import Axios from "../../Axios/index";
import { useDispatch, useSelector } from "react-redux";
import { baseURL } from "../../Config";
import {
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from "../../Store/ProductAdded";
import { getIdItem, totalProduct } from "../../Utils";
import "../../Components/Cart/index.scss";
import "./index.scss";
import { Link, NavLink } from "react-router-dom";
import "../../Components/Header/index.scss";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useRef } from "react";

export default function Cart() {
  const productList = useSelector((state) => state.productadded).productList;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref= useRef(null)

  const handleRemoveItem = (e) => {
    const id = getIdItem(e);
    dispatch(removeProduct(id));
  };
  const handleIncrease = (e) => {
    const id = getIdItem(e);
    dispatch(increaseProduct(id));
  };
  const handleDecrease = (e) => {
    const id = getIdItem(e);
    dispatch(decreaseProduct(id));
  };
  const notify = () =>
    toast.warning(`You must login first!!!`, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  return (
    <>
      <Headers />

      <div className="cart-wrap grid wide">
        <div className="cart-title">
          <span className="title-cart">
            <NavLink to="/cart" className="header__nav__item-link">
              Cart
            </NavLink>
          </span>
          <span> / </span>
          <span className="title-cart" > 
            <NavLink to="/customerInfo" className="header__nav__item-link">
                Customer Info
               </NavLink> 
          </span>
        </div>
        <div className="row">
          <div className="col l-8">
            <div className="menu-cart">
              <div className="menu-cart__header">
                <div className="menu-cart__header-title">
                  Cart: {productList.length} Items
                </div>
              </div>
              <div className="menu-cart__body">
                {(productList.length > 0 &&
                  productList.map(([key, count], idx) => {
                    return (
                      <div className="menu-cart-item" key={idx} id={key.id}>
                        <div className="product-quantity">
                          <button
                            className="quantity-btn quantity-btn--active"
                            onClick={handleIncrease}
                          >
                            <i className="fa-solid fa-plus"></i>
                          </button>
                          <span>{count}</span>
                          {(count === 1 && (
                            <button className="quantity-btn">
                              <i className="fa-solid fa-minus"></i>
                            </button>
                          )) || (
                            <button
                              className="quantity-btn quantity-btn--active"
                              onClick={handleDecrease}
                            >
                              <i className="fa-solid fa-minus"></i>
                            </button>
                          )}
                        </div>
                        <div className="product-info">
                          <div
                            className="product-img"
                            style={{
                              backgroundImage: `url(${baseURL + key.images})`,
                            }}
                          ></div>
                          <div className="product-description">
                            <div className="product-name">
                              {" "}
                              {key.product_name}
                            </div>
                            <div className="product-price">
                              {key.price.toLocaleString("vi")}đ x {count}
                            </div>
                            <div className="product-total-price">
                              {(count * key.price).toLocaleString("vi")}đ
                            </div>
                          </div>
                        </div>
                        <div
                          className="product-button-close"
                          onClick={handleRemoveItem}
                        >
                          <i className="fa-solid fa-xmark btnclose"></i>
                        </div>
                      </div>
                    );
                  })) || (
                  <div className="no-products">
                    <img
                      className="no-products-img"
                      src="https://www.leoasher.dev/static/media/sadCat.2335333f.png"
                      alt=""
                    />
                    <h3 className="no-products-title">
                      There's no item in cart!
                    </h3>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="add-order col l-4">
            <div className="add-order-wrap">
              <div className="order-total">
                <div className="order-amount">
                  <span className="amount-title">Quantity:</span>
                  <span className="amount-value">
                    {productList.length} Items
                  </span>
                </div>
                <div className="order-amount">
                  <span className="amount-title">Total Price:</span>
                  <span className="amount-value">
                    {totalProduct(productList).toLocaleString("vi")}đ
                  </span>
                </div>
              </div>
              <div className="input-voucher-wrap">
                <input
                  className="input-voucher"
                  type="text"
                  placeholder="Voucher"
                />
              </div>
              <button
                type="button"
                className="menu-cart-btn btn-primary check-out"
              >
                Apply voucher
              </button>
              <button
                type="button"
                ref={ref}
                className="menu-cart-btn btn-view-cart check-out"
                onClick={(e) => {
                  navigate("/customerInfo")
                }}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
