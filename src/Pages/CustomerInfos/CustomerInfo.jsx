import Footer from "../../Components/Footer";
import Headers from "../../Components/Header";
import { useDispatch, useSelector } from "react-redux";
import { getIdItem, totalProduct } from "../../Utils";
import { Link, NavLink } from "react-router-dom";
import "./CustomerInfo.css";
import { useState } from "react";
import AxiosToken from "../../Axios/callAPIToken";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function CustomerInfo() {
  const productList = useSelector((state) => state.productadded).productList;
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [note, setNote] = useState("");

    console.log(typeof totalProduct(productList))
  const handleClickSubmit = (e) => {
    if (!e.detail || e.detail == 1) {
        var token = localStorage.getItem("token");
        var orderItems = productList.map(([key, count], idx) => {
            console.log(e)
            return {
                price:key.price,
                product_id:key.id,
                quantity:count
            }
        })
        console.log(token);
      AxiosToken("/add-order/", "POST", token, {
        address,
        note,
        number_phone: phoneNumber,
        orderItems,
        total_price: totalProduct(productList),
      })
        .then((res) => {
          const notify = () =>
            toast.success(`Ordering success!!!`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          notify();
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

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
          <span className="title-cart">
            <NavLink to="/customerInfo" className="header__nav__item-link">
              Customer Info
            </NavLink>
          </span>
        </div>
        <form className="row">
          <div className="col l-8">
            <div className="menu-cart">
              <div className="menu-cart__header">
                <div className="menu-cart__header-title">
                  Thông tin giao hàng
                </div>
              </div>
              <div className="shippingInfo">
                <div className="shippingInfoLb">Full Name</div>
                <input
                  type="text"
                  className="shippingInfoInput"
                  placeholder="Full Name"
                  required
                  onChange={(e) => {
                    setFullName(e.target.value);
                  }}
                />
                <div className="shippingInfoLb">Phone Number</div>
                <input
                  type="text"
                  className="shippingInfoInput"
                  placeholder="Phone Number"
                  required
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                />
                <div className="shippingInfoLb">Address</div>
                <input
                  type="text"
                  className="shippingInfoInput"
                  placeholder="Address"
                  required
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                />
                <div className="shippingInfoLb">Note</div>
                <input
                  type="text"
                  className="shippingInfoInput"
                  placeholder="Note"
                  onChange={(e) => {
                    setNote(e.target.value);
                  }}
                />
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
              <div className="note">
                Chú ý: Hiện tại chúng tôi chỉ hỗ trợ thanh toán khi nhận hàng
              </div>
              <div className="order">
                <button
                  type="button"
                  className="menu-cart-btn btn-primary check-out"
                  onClick={() => {
                    navigate("/cart");
                  }}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="menu-cart-btn btn-view-cart check-out"
                  onClick={e=>handleClickSubmit(e)}
                >
                  Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default CustomerInfo;
