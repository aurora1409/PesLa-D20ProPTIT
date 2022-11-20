import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "../../grid.css";
import MenuCart from "../Cart";
import "./index.scss";
import {
  addNewUser,
  IsLogin,
  IsRegister,
  IsLoginState,
  IsRegisterState,
} from "../../Store/User/index";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const Header = () => {
  const user = useSelector((state) => state.user);
  const productList = useSelector((state) => state.productadded).productList;
  const [hideCart, setHideCart] = useState(true);
  const [isLogout, setLogout] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClickMenuCart = () => {
    setHideCart(false);
  };
  return (
    <React.Fragment>
      <MenuCart hideCart={hideCart} setHideCart={setHideCart} />
      <div className="big-wrap">
        <div className="header__higher--wrap">
          <div className="grid wide">
            <div className="header__higher">
              <div className="header__higher__info">
                <div className="header__higher__info-mail">
                  <i className="fa-solid fa-envelope"></i>
                  <span>petsla.vn@gmail.com</span>
                </div>
                <div className="header__higher__info-divide"></div>
                <div className="header__higher__info-phone">
                  <i className="fa-solid fa-phone"></i>
                  <span>0123 456 789</span>
                </div>
                <div className="header__higher__info-img">
                  <Link to="/">
                    <img
                      src={
                        "https://www.leoasher.dev/static/media/logofull.f2aa3784.png"
                      }
                      alt="Logo Pesla"
                    />
                  </Link>
                </div>
              </div>
              <div className="header__higher__btn">
                <div className="header__higher__btn-language">
                  <i className="fa-solid fa-earth-americas"></i>
                </div>
                <div className="header__higher__btn-theme">
                  <i className="fa-solid fa-moon"></i>
                </div>
                {isLogout ? (
                  <div
                    className="header__higher__btn-auth"
                    onClick={() => {
                      const notify = () =>
                        toast.success(`Logout success!!!`, {
                          position: "top-right",
                          autoClose: 2000,
                          hideProgressBar: false,
                          closeOnClick: true,
                          pauseOnHover: true,
                          draggable: true,
                          progress: undefined,
                          theme: "light",
                        });

                        setLogout(false)
                      notify();
                      dispatch(IsLoginState(false));
                      navigate("/");
                    }}
                  >
                    <i className="fa-solid fa-user"></i>
                  </div>
                ) : (
                  <div
                    className="header__higher__btn-auth"
                    onClick={() => {
                      setLogout(true)
                      // dispatch(IsLoginState(true));
                      navigate("/login");
                    }}
                  >
                    <i className="fa-solid fa-arrow-right-from-bracket"></i>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <header className="header">
          <div className="header__top grid wide">
            <div className="header__wrap">
              <div className="header__logo">
                <Link to="/">
                  <img
                    className="header__logo__img"
                    src={
                      "https://www.leoasher.dev/static/media/logofull.f2aa3784.png"
                    }
                    alt="Logo PetsLa"
                  />
                </Link>
              </div>
              <div className="header__search">
                <input
                  className="header__search__input"
                  placeholder="Everything here is better than your ex"
                  type="text"
                />
                <div className="header__search__icon">
                  <i className="header__search__icon fa-solid fa-magnifying-glass"></i>
                </div>
              </div>
              <div className="header__cart" onClick={handleClickMenuCart}>
                <i className="header__cart__icon fa-solid fa-cart-shopping"></i>
                <div className="header__cart__count">{productList.length}</div>
              </div>
            </div>
          </div>
        </header>
        <div className="header__nav grid wide">
          <ul className="header__nav__list">
            <li className="header__nav__item">
              <NavLink to="/" className="header__nav__item-link">
                Home
              </NavLink>
            </li>
            <li className="header__nav__item">
              <NavLink to="/shop" className="header__nav__item-link">
                Shop
              </NavLink>
            </li>
            <li className="header__nav__item">
              <NavLink to="/cart" className="header__nav__item-link">
                Cart
              </NavLink>
            </li>
            <li className="header__nav__item">
              <NavLink to="/contact" className="header__nav__item-link">
                Contact
              </NavLink>
            </li>
            <li className="header__nav__item">
              {user.isLoginState ? (
                <NavLink to="/account" className="header__nav__item-link">
                  Account
                </NavLink>
              ) : (
                <NavLink to="/login" className="header__nav__item-link">
                  Account
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};
export default Header;
