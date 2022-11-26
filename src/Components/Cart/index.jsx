import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { baseURL } from "../../Config";
import {
  decreaseProduct,
  increaseProduct,
  removeProduct,
} from "../../Store/ProductAdded";
import { getIdItem, totalProduct } from "../../Utils";
import "./index.scss";

function MenuCart({ hideCart, setHideCart }) {
  const productList = useSelector(state => state.productadded).productList;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClose = () => {
    setHideCart(true);
  };
  const handleRemoveItem = e => {
    const id = getIdItem(e);
    dispatch(removeProduct(id));
  };
  const handleIncrease = e => {
    const id = getIdItem(e);
    dispatch(increaseProduct(id));
  };
  const handleDecrease = e => {
    const id = getIdItem(e);
    dispatch(decreaseProduct(id));
  };
  return (
    <>
      <div
        className="background-wrap-menu-cart"
        style={{
          width: window.screen.width,
          height: window.screen.height,
          display: hideCart ? "none" : "block",
        }}
        onClick={handleClose}></div>
      <div
        className="menu-cart-wrap"
        style={{ right: hideCart ? "-400px" : "0px", height: "100%" }}>
        <div className="menu-cart">
          <div className="menu-cart__header">
            <div className="menu-cart__header-title">
              Cart: {productList.length} Items
            </div>
            <div className="menu-cart__header-close" onClick={handleClose}>
              <i className="fa-solid fa-xmark btnclose"></i>
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
                        onClick={handleIncrease}>
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
                          onClick={handleDecrease}>
                          <i className="fa-solid fa-minus"></i>
                        </button>
                      )}
                    </div>
                    <div className="product-info">
                      <div
                        className="product-img"
                        style={{
                          backgroundImage: `url(${baseURL + key.images})`,
                        }}></div>
                      <div className="product-description">
                        <div className="product-name"> {key.product_name}</div>
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
                      onClick={handleRemoveItem}>
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
                <h3 className="no-products-title">There's no item in cart!</h3>
              </div>
            )}
          </div>
          <div className="menu-cart__footer">
            <button type="button"
              className="menu-cart-btn btn-primary"
              onClick={() => {
                navigate("/customerInfo")
              }}>
              Checkout ({totalProduct(productList).toLocaleString("vi")}đ)
            </button>
            <button type="button" className="menu-cart-btn btn-view-cart" onClick={() => {
                navigate("/cart")
              }}>
              View Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

//export { handleDecrease, handleIncrease, handleRemoveItem }

export default MenuCart