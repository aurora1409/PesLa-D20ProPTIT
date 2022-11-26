import AxiosToken from "../../Axios/callAPIToken";
import { getIdURL } from "../../Utils";
import { useEffect, useRef } from "react";
import Headers from "../../Components/Header";
import Footer from "../../Components/Footer";
import { Form, Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { baseURL } from "../../Config";
import "./OrderItem.css"

function OrderItem() {
  //   console.log("orderitem");
  const idItem = getIdURL();
  const [data, setData] = useState();

  var token = localStorage.getItem("token");
  useEffect(() => {
    AxiosToken("/order/" + idItem, "GET", token)
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(data);
  if (data != undefined)
    return (
      <>
        <Headers />
        <div className="wrap">
          <div className="grid wide wrapMin">
            <div className="row">
              <div className="col l-2 m-2 c-0">
                <div className="dashboard">
                  <div className="dbTitle">DASHBOARD</div>
                  <div className="dbWrap">
                    <div className="dbItem item1">
                      <i className="fa-solid fa-user iconItem"></i>
                      <span className="itemTile">
                        <NavLink
                          to="/account"
                          className="header__nav__item-link"
                        >
                          Profile
                        </NavLink>
                      </span>
                    </div>
                    <div className="dbItem item2">
                      <i className="fa-solid fa-bag-shopping iconItem1"></i>
                      <span className="itemTile">
                        <NavLink to="/order" className="header__nav__item-link">
                          Orders
                        </NavLink>
                      </span>
                    </div>
                    <div className="dbItem item3">
                      <i className="fa-solid fa-heart iconItem1"></i>
                      <span className="itemTile">Wishlist</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col l-10 m-10 c-12 bigWrap">
                <div className="proTitleWrap row">
                  <div className="proTitle col l-6 m-6 c-6">
                    <i className="fa-solid fa-bag-shopping iconItem1"></i>
                    <span className="itemTileMain">Order Detail</span>
                  </div>
                  <div className="col l-6 m-6 c-6 proEditBtn">
                    <button className="proEdit">Buy again</button>
                  </div>
                </div>
                <div className="orderBody row">
                  <div className="orderItemTitle col l-12 m-12">
                    <div className="orderItemID">Order ID: {`${data.id}`}</div>
                    <div className="orderItemPlaceOn">
                      Place on: {`${data.created_at}`}
                    </div>
                    <div className="orderItemStatus">Status: Pending</div>
                  </div>
                  <div className="orderItemBody col l-12 m-12">
                    {data.orderItems.map((e) => {
                      return (
                        <div className="product-info product-info-item">
                          <div
                            className="product-img"
                            style={{
                              backgroundImage: `url(${baseURL + e.image})`,
                            }}
                          ></div>
                          <div className="product-description">
                            <div className="product-name"> {e.name}</div>
                            <div className="product-price">
                              {e.price.toLocaleString("vi")}đ x {e.quantity}
                            </div>
                            <div className="product-total-price">
                              {(e.quantity * e.price).toLocaleString("vi")}đ
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="orderItemInfo row">
                  <div className="orderItemLeft col l-6 m-6">
                    <div className="leftTitle">Shipping Information</div>
                    <div className="leftMain">
                      <div className="mainInfo">Address: {data.address}</div>
                      <div className="mainInfo">
                        Phone number: {data.number_phone}
                      </div>
                      <div className="mainInfo">Note: {data.note}</div>
                    </div>
                  </div>
                  <div className="orderItemLeft col l-6 m-6">
                    <div className="leftTitle">Total Summary</div>
                    <div className="leftMain">
                      <div className="mainSummary">
                        <div className="mainSummaryName">Quantity:</div>
                        <div className="mainSummaryValue">
                          {data.orderItems.length} Items
                        </div>
                      </div>
                      <div className="mainSummary">
                        <div className="mainSummaryName">Total Price:</div>
                        <div className="mainSummaryValue">
                          {data.total_price.toLocaleString("vi", {
                            style: "currency",
                            currency: "VND",
                          })}
                          đ
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}

export default OrderItem;
