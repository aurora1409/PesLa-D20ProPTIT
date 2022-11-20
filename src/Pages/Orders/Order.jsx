import Footer from "../../Components/Footer";
import Headers from "../../Components/Header";
import { useNavigate } from "react-router-dom";
import AxiosToken from "../../Axios/callAPIToken";
import { Form, Link, NavLink } from "react-router-dom";
import "../../Components/Header/index.scss";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { scrollTop } from "../../Utils";
import "./Order.css"

function Order() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  let numberPages = useRef();

  const handleProductPerPage = (e) => {
    setItemPerPage(e.target.value);
    scrollTop();
  };

  var token = localStorage.getItem("token");
  useEffect(() => {
    AxiosToken("/get-order/", "GET", token)
      .then((res) => {
        console.log(res.data);
        setOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    scrollTop();
  }, []);
  console.log(orders);

  return (
    <>
      <Headers />
      <div className="wrap">
        <div className="grid wide wrapMin">
          <div className="row">
            <div className="col l-2">
              <div className="dashboard">
                <div className="dbTitle">DASHBOARD</div>
                <div className="dbWrap">
                  <div className="dbItem item1">
                    <i className="fa-solid fa-user iconItem"></i>
                    <span className="itemTile">
                      <NavLink to="/account" className="header__nav__item-link">
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
            <div className="col l-10 bigWrap">
              <div className="proTitleWrap row">
                <div className="proTitle col l-12">
                  <i className="fa-solid fa-bag-shopping iconItem1"></i>
                  <span className="itemTileMain">My Orders</span>
                </div>
              </div>
              <div className="row orderListTitle">
                <div className="orderItemTitleTT col l-2">#</div>
                <div className="orderItemTitleOrder col l-2">Order</div>
                <div className="orderItemTitleStatus col l-2">Status</div>
                <div className="orderItemTitleTime col l-4">Time Placed</div>
                <div className="orderItemTitlePrice col l-2">Total Price</div>
              </div>
              <div className="orderList">
                {orders.map((e) => {
                  if (
                    orders.indexOf(e) < itemPerPage * currentPage &&
                    orders.indexOf(e) >= itemPerPage * (currentPage - 1)
                  )
                    return (
                      <div className="row orderItem">
                        <div className="orderItemTT col l-2">
                          {orders.indexOf(e) + 1}
                        </div>
                        <div className="orderItemOrder col l-2">{e.id}</div>
                        <div className="orderItemStatus col l-2">pending</div>
                        <div className="orderItemTime col l-4">
                          {e.created_at}
                        </div>
                        <div className="orderItemPrice col l-2">
                          {e.total_price}
                        </div>
                      </div>
                    );
                  else {
                    return <div key={orders.indexOf(e)}></div>;
                  }
                })}
              </div>
              <div className="product_list__page">
                <ul className="pagination">
                  <li
                    className={`page__item ${
                      currentPage === 1 ? "page__item--disable" : ""
                    }`}
                    style={{
                      borderTopLeftRadius: ".2rem",
                      borderBottomLeftRadius: ".2rem",
                    }}
                    onClick={() => {
                      if (currentPage > 1) {
                        scrollTop();
                        setCurrentPage((preCurrentPage) => preCurrentPage - 1);
                      }
                    }}
                  >
                    <i className="page-link fa-solid fa-angle-left"></i>
                  </li>
                  {(function () {
                    let pageItems = [];
                    numberPages = orders.length / itemPerPage;
                    if (numberPages !== parseInt(numberPages)) {
                      numberPages = parseInt(numberPages) + 1;
                    }
                    for (let i = 1; i <= numberPages; i++) {
                      pageItems.push(
                        <li
                          className={`page__item ${
                            currentPage === i ? "page__item--active" : ""
                          }`}
                          key={i}
                          onClick={() => {
                            setCurrentPage(i);
                            scrollTop();
                          }}
                        >
                          <span className="page-link">{i}</span>
                        </li>
                      );
                    }
                    return pageItems;
                  })()}
                  <li
                    className={`page__item ${
                      currentPage === numberPages ? "page__item--disable" : ""
                    }`}
                    style={{
                      borderTopRightRadius: ".2rem",
                      borderBottomRightRadius: ".2rem",
                    }}
                    onClick={() => {
                      if (currentPage < numberPages) {
                        scrollTop();
                        setCurrentPage((preCurrentPage) => preCurrentPage + 1);
                      }
                    }}
                  >
                    <i className="page-link fa-solid fa-angle-right"></i>
                  </li>
                </ul>
                <div className="select-products-per-page">
                  <label className="label form-label" htmlFor="item-per-page">
                    Items/Page
                  </label>
                  <select
                    name="item-per-page"
                    id="item-per-page"
                    onChange={handleProductPerPage}
                  >
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                  </select>
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

export default Order;
