import React, { useEffect } from "react";
import "./Account.css";
import "../../grid.css"
//import store from "../../Store/index";
import Axios from "../../Axios/index";
import AxiosToken from "../../Axios/callAPIToken";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Form, Link } from "react-router-dom";
import { addNewUser, IsLogin, IsRegister, IsLoginState, IsRegisterState  } from "../../Store/index";
import { useState } from "react";
import Headers from "../Header";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import Register from "./Registers/Register";
import Login from "./Logins/Login";

// export default khong can dau ngoac {}, ten gi cung duoc
// export bthg can dau {}

const Account = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  var userLogin;
  // console.log(typeof user.isLogin)
  // dispatch(IsLogin(true))
  // console.log(user.isLogin)
  // const getUser = () => {
    var token = localStorage.getItem("token")
  // console.log(token)
    AxiosToken("/profile/", "GET", {token})
      .then((res) => {
        userLogin = res.data;
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  // }

  var profile = 
    <div className="grid wide wrap">
          <div className="row">
            <div className="col l-2">
              <div className="dashboard">
                <div className="dbTitle">DASHBOARD</div>
                <div className="dbList">
                  <ul className="dbWrap">
                    <li className="dbItem">Profile</li>
                    <li className="dbItem">Orders</li>
                    <li className="dbItem">Wishlist</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col l-10">
              <div className="proTitle">My Profile</div>
              <button className="proEdit">EditProfile</button>
        </div>
        <div className="content">
          <h2>{userLogin }</h2>
        </div>
          </div>
        </div>
      
  const notify = () => {
    toast("You should login first!");
    <ToastContainer />;
  };
  return (
    <>
      <div className="regis">
        {/* <div className="opacity" style={{display: "block"}}></div> */}
        <Headers />
        {console.log(user.isLoginState)}
        {/* {user.isLoginState ? profile : undefined} */}
        {profile}
        {/* {user.isLogin ? dispatch(IsLoginState(false)) && profile : dispatch(IsLoginState(true)) && <Login/>
        }  */}
        <Footer/>
        {/* <Register /> */}
        {/* <Login/> */}
      </div>
    </>
  );
};

export default Account;
