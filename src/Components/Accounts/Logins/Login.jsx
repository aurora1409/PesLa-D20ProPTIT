import React, { useEffect } from "react";
import "../Account.css";
// import store from "../../../Store/index";
import Axios from "../../../Axios/index";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Form, Link, NavLink } from "react-router-dom";
import {
  addNewUser,
  IsLogin,
  IsRegister,
  IsLoginState,
  IsRegisterState,
} from "../../../Store/index";
import { useState } from "react";
import Headers from "../../Header";
import Footer from "../../Footer";
import { ToastContainer, toast } from "react-toastify";
import Account from "../Account";
import Register from "../Registers/Register";

// export default khong can dau ngoac {}, ten gi cung duoc
// export bthg can dau {}

const Login = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // dispatch(IsLogin(true))
  // console.log(user);
  //const [firstname, setFirstname] = useState('');
  const handleClickLogin = () => {
    console.log("login")
    Axios("/login/", "POST", {
      username,
      password,
    })
    .then((res) => {
      dispatch(IsLoginState(true))
      console.log(user.isLoginState)
      console.log(res.data);
        // console.log("hi");
        // dispatch(addNewUser(res.data));
      console.log( typeof res.data.token)
      localStorage.setItem("token", res.data.token);
        // console.log(localStorage.getItem("token"));
      console.log(user);
      // <>
      //   <Link to="/account"></Link>
      // </>
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // dispatch(IsLoginState(false));

  var handleClickClose = () => {
    // dispatch(IsLogin(false))
    // dispatch(IsLoginState(false))
    return <>
      <Link to="/account"></Link>
    </>
    // return useEffect(
      // () => {
        // <Account/>
    // console.log(user.isLoginState);
        // dispatch(IsLoginState(false));
        // dispatch(IsRegisterState(true))
        // console.log(user.isLoginState);
        // return account
        // return user.isLogin ? <Account /> : account
        // <Account />
      // }, [])
  };
  // useEffect (handleClickClose, [user.isLoginState])

  var account = (
    <div className="regis">
      <Headers />
      <Footer />
    </div>
  );

  var account2 = (
    <div className="regis">
      <div className="opacity" style={{ display: "block" }}></div>
      <Headers/>
        <Footer/>
      <div className="regisWrap">
        <div className="registerWrap" id="loginWrap">
          <div className="regisHeader">
            <span className="registerTitle">Login</span>
            <button
              // type="button"
              className="btnClose"
              // aria-label="Close"
              // onClick={handleClickClose}
            >
              <NavLink to="/account" className="btnClose"></NavLink>
            </button>
          </div>
          <div className="wrap">
            <div className="registerMain">
              <input
                type="text"
                className="inputRegister"
                id="username"
                placeholder="UserName"
                onChange={(e) => {
                  setUsername(e.target.value);
                  //console.log(firstName)
                }}
              />
              <input
                type="password"
                className="inputRegister"
                id="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  //console.log(firstName)
                }}
              />
            </div>
            <div className="checkSaveLogin">
              <input type="checkbox" className="check" name="checkSave" />
              <label htmlFor="checkSave">Remember Password</label>
            </div>
            <button
              className="registerBtn"
              id="loginBtnMain"
              onClick={handleClickLogin}
            > <Link to="/account">Login</Link>
                
            </button>
            <div className="separateWrap">
              <div className="sideSeparate"></div>
              <div className="mainSeparate">OR</div>
              <div className="sideSeparate"></div>
            </div>
            {/* (event) => {
                axios(/re, {
                  firstname,
                  ///.
                }) */}
            <div className="otherMethodRegister">
              <button className="registerBtn" id="registerGGBtn">
                Login with Google
              </button>
              <button className="registerBtn" id="registerFbBtn">
                Login with Facebook
              </button>
            </div>
            <div
              className="registerFooter"
              // onClick={() => {

              //   // <Headers/>
              //   <Register />;
              //   console.log("regis");
              // }}
            > <Link to = "/register">
              Do not have an account? Register
              </Link>
              {/* <a href="">Already have an account? Login</a> */}
            </div>
            <div className="registerFooter">
              Forgot password
              {/* <a href="">Already have an account? Login</a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const notify = () => {
    toast("You should login first!");
    <ToastContainer />;
  };
  return <>
    {account2}
    {/* {user.isLoginState ? account2 : account} */}
  </>;
};

export default Login;
