import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getProductList } from "../../../../Axios/Product";
import { baseURL, OptionSortProduct } from "../../../../Config";
import { getIdItem, scrollTop } from "../../../../Utils";
import "./sortProductList.scss";
import "./renderProductList.scss";
import "./pageProductList.css";
import "../../../../grid.css";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../../Store/ProductAdded";

export default function ProductList() {
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

  const dispatch = useDispatch();
  const searchText = useSelector(state => state.SearchProducts).searchText;
  const [productList, setProductList] = useState([]);
  const [itemPerPage, setItemPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);
  let numberPages = useRef();

  useEffect(() => {
    try {
      getProductList().then(data => {
        setProductList(data);
        productListFirst = data;
      });
    } catch (err) {
      console.log(err);
    }
    scrollTop();
  }, []);

  useEffect(() => {
    if (productListFirst.length > 0) {
      if (searchText == "") {
        setProductList(productListFirst);
      } else {
        const searchProduct = [];
        for (let i = 0; i < productList.length; i++) {
          if (productList[i].product_name.toLowerCase().includes(searchText.toLowerCase())) {
            searchProduct.push(productList[i]);
          }
        }
        setCurrentPage(1);
        setProductList(searchProduct);
      }
    }
  }, [searchText]);

  const handleAddItem = e => {
    notify();
    const id = getIdItem(e);
    const item = productList.find(value => value.id === id * 1);
    dispatch(addProduct(item));
  };
  const handleChangeSort = e => {
    const type = e.target.value;
    switch (type) {
      case "Relevance":
        setProductList(() => {
          return [...productListFirst];
        });
        break;
      case "Name: A-Z":
        setProductList(preArrayItem => {
          const arrayItem = [...preArrayItem];
          arrayItem.sort((a, b) =>
            a.product_name.localeCompare(b.product_name)
          );
          return arrayItem;
        });
        break;
      case "Name: Z-A":
        setProductList(preArrayItem => {
          const arrayItem = [...preArrayItem];
          arrayItem.sort((a, b) =>
            b.product_name.localeCompare(a.product_name)
          );
          return arrayItem;
        });
        break;
      case "Price: Low to High":
        setProductList(preArrayItem => {
          const arrayItem = [...preArrayItem];
          arrayItem.sort((a, b) => a.price - b.price);
          return arrayItem;
        });
        break;
      case "Price: High to Low":
        setProductList(preArrayItem => {
          const arrayItem = [...preArrayItem];
          arrayItem.sort((a, b) => b.price - a.price);
          return arrayItem;
        });
        break;
      default:
        throw new Error("Sort Error!");
    }
  };

  const handleProductPerPage = e => {
    setItemPerPage(e.target.value);
    scrollTop();
  };

  return (
    <div className="grid wide">
      <ToastContainer />
      <div className="product-list__sort">
        <label className="label-sort-product" htmlFor="sort-product">
          Sort by:
        </label>
        <select
          id="select-sort-product"
          name="sort-product"
          onChange={handleChangeSort}>
          {OptionSortProduct.map((value, index) => (
            <option className="option-sort-product" key={index}>
              {value}
            </option>
          ))}
        </select>
      </div>
      <div className="product-list">
        {productList.map((item, idx) => {
          if (
            idx < itemPerPage * currentPage &&
            idx >= itemPerPage * (currentPage - 1)
          ) {
            return (
              <div className="col c-6 m-4 l-3 item" id={item.id} key={idx}>
                <Link className="item__product" to={`/product-${item.id}`}>
                  <div
                    className="item__image"
                    style={{
                      backgroundImage: `url(${baseURL + item.images})`,
                    }}
                  />
                </Link>
                <div className="item__content">
                  <div className="item__desc">
                    <Link to={`/product-${item.id}`}>
                      <div className="item__desc-title">
                        {item.product_name}
                      </div>
                    </Link>
                    <div className="item__desc-price">
                      {item.price.toLocaleString("vi")}
                    </div>
                  </div>
                  <div className="item__buy-cart-wrap">
                    <div className="item__buy">
                      <i className="item__buy-icon fa-solid fa-bag-shopping"></i>
                      <span>Buy now</span>
                    </div>
                    <div className="item__cart" onClick={handleAddItem}>
                      <i className="item__cart-icon fa-solid fa-cart-plus"></i>
                      <span>Add to Cart</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          } else {
            return <div key={idx}></div>;
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
                setCurrentPage(preCurrentPage => preCurrentPage - 1);
              }
            }}>
            <i className="page-link fa-solid fa-angle-left"></i>
          </li>
          {(function () {
            let pageItems = [];
            numberPages = productList.length / itemPerPage;
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
                  }}>
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
                setCurrentPage(preCurrentPage => preCurrentPage + 1);
              }
            }}>
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
            onChange={handleProductPerPage}>
            <option>12</option>
            <option>24</option>
            <option>36</option>
          </select>
        </div>
      </div>
    </div>
  );
}
let productListFirst = [];
