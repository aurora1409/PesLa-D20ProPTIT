import React, { useEffect } from "react";
import "./Account.css";
import "../../grid.css";
//import store from "../../Store/index";
import Axios from "../../Axios/index";
import AxiosToken from "../../Axios/callAPIToken";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Form, Link } from "react-router-dom";
import {
  addNewUser,
  IsLogin,
  IsRegister,
  IsLoginState,
  IsRegisterState,
} from "../../Store/index";
import { useState } from "react";
import Headers from "../Header";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import Register from "./Registers/Register";
import Login from "./Logins/Login";

// export default khong can dau ngoac {}, ten gi cung duoc
// export bthg can dau {}

const Account = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  var userLogin;

  // console.log(typeof user.isLogin)
  // dispatch(IsLogin(true))
  // console.log(user.isLogin)
  // const getUser = () => {
  var token = localStorage.getItem("token");
  // console.log(token)
  useEffect(() => {
    AxiosToken("/profile/", "GET", token)
      .then(res => {
        userLogin = res.data;
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, [token]);
  // }

  var profile = (
    <div className="wrap">
      <div className="grid wide wrapMin">
        <div className="row">
          <div className="col l-2">
            <div className="dashboard">
              <div className="dbTitle">DASHBOARD</div>
              <div className="dbWrap">
                <div className="dbItem item1">
                  <i className="fa-solid fa-envelope iconItem"></i>
                  <span className="itemTile">Profile</span>
                </div>
                <div className="dbItem item2">
                  <i className="fa-solid fa-envelope iconItem1"></i>
                  <span className="itemTile">Orders</span>
                </div>
                <div className="dbItem item3">
                  <i className="fa-solid fa-envelope iconItem1"></i>
                  <span className="itemTile">Wishlist</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col l-10 bigWrap">
            <div className="proTitleWrap row">
              <div className="proTitle col l-6">
                <i className="fa-solid fa-envelope iconItem1"></i>
                <span className="itemTileMain">My Profile</span>
              </div>
              <div className="col l-6 proEditBtn">
                <button className="proEdit">Edit Profile</button>
              </div>
            </div>
            <div className="proHeader row">
              <div className="proAvatar col l-6">
                <div className="wrapAvt">
                  <div className="avatar"></div>
                  <div className="nameUser">
                    <div className="proName">Thanh Huyen</div>
                    <div className="proUser">stella</div>
                  </div>
                </div>
                <div className="typeUser">DIAMOND USER</div>
              </div>
              <div className="proInfo col l-6">
                <div className="infoItem">
                  <div className="infoItemNumber">10</div>
                  <div className="infoItemName">Pending</div>
                </div>
                <div className="infoItem">
                  <div className="infoItemNumber">10</div>
                  <div className="infoItemName">Shipping</div>
                </div>
                <div className="infoItem">
                  <div className="infoItemNumber">10</div>
                  <div className="infoItemName">Delivered</div>
                </div>
                <div className="infoItem">
                  <div className="infoItemNumber">10</div>
                  <div className="infoItemName">Cancelled</div>
                </div>
              </div>
            </div>
            <div className="proBody row">
              <div className="col l-12">
                <div className="proBodyInfo">
                  <div className="proLabel">First Name</div>
                  <input type="text" className="proBodyInfoItem" />
                </div>
                <div className="proBodyInfo">
                  <div className="proLabel">Last Name</div>
                  <input type="text" className="proBodyInfoItem" />
                </div>
                <div className="proBodyInfo">
                  <div className="proLabel">Email</div>
                  <input type="text" className="proBodyInfoItem" />
                </div>
                <div className="proBodyInfo">
                  <div className="proLabel">Phone Number</div>
                  <input type="text" className="proBodyInfoItem" />
                </div>
                <div className="proBodyGender">
                  <div className="proLabelGender">Gender</div>
                  <div className="genderWrap">
                    <input
                      name="gender"
                      type="radio"
                      id="radio1"
                      className="proBodyGenderItem"
                    />
                    <label htmlFor="radio1">Male</label>
                  </div>
                  <div className="genderWrap">
                    <input
                      name="gender"
                      type="radio"
                      id="radio1"
                      className="proBodyGenderItem"
                    />
                    <label htmlFor="radio1">Female</label>
                  </div>
                  <div className="genderWrap">
                    <input
                      name="gender"
                      type="radio"
                      id="radio1"
                      className="proBodyGenderItem"
                    />
                    <label htmlFor="radio1">Other</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <h2>{userLogin}</h2>
          </div>
        </div>
      </div>
    </div>
  );

  const notify = () => {
    toast("You should login first!");
    <ToastContainer />;
  };
  return (
    <>
      <div className="regis">
        {/* <div className="opacity" style={{display: "block"}}></div> */}
        <Headers />
        {/* {console.log(user.userRegister[0].username)} */}
        {console.log(user.isLoginState)}
        {user.isLoginState ? profile : undefined}
        {/* {profile} */}
        {/* {user.isLogin ? dispatch(IsLoginState(false)) && profile : dispatch(IsLoginState(true)) && <Login/>
        }  */}
        <Footer />
        {/* <Register /> */}
        {/* <Login/> */}
      </div>
    </>
  );
};

export default Account;
