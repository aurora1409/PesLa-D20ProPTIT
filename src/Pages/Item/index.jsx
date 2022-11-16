import React, { useEffect, useState } from "react";
import { getIdURL, scrollTop } from "../../Utils";
import Headers from "../../Components/Header";
import Footer from "../../Components/Footer";
import { getProductItem } from "../../Axios/Product";
import { baseURL } from "../../Config";
import "../../Config.scss";
import "./index.scss";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Store/ProductAdded";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Item() {
  const notify = () =>
    toast.success("Add to cart successfuly!", {
      position: "top-right",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const idItem = getIdURL();
  const [item, setItem] = useState(null);
  useEffect(() => {
    scrollTop();
    getProductItem(idItem).then(data => {
      setItem(data);
      console.log(data);
    });
  }, []);
  const dispatch = useDispatch();
  const handleAdd = () => {
    notify();
    dispatch(addProduct(item));
  };
  return (
    <>
      <ToastContainer />
      <Headers />
      {item && (
        <div className="grid wide">
          <div className="item__container">
            <img
              src={`${baseURL + item.images}`}
              className="item__container__image col c-6 mb-12"
              alt=""
            />
            <div className="item__container__content col c-6 mb-12">
              <div className="item__container__title">{item.product_name}</div>
              <div className="item__container__price">
                {item.price.toLocaleString("vi")}đ
              </div>
              <div className="item__container__button">
                <div className="item__container__button__buy item__container__button--button">
                  Buy Now
                </div>
                <div
                  className="item__container__button__add item__container__button--button"
                  onClick={handleAdd}>
                  Add to Cart
                </div>
              </div>
              <div className="item__container__info--wrap">
                <div className="item__container__info">Thông tin sản phẩm</div>
              </div>
              <div className="item__container__desc">{item.description}</div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}
