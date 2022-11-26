import React, { useEffect, useLayoutEffect } from "react";
import "./Account.css";
import "../../grid.css";
//import store from "../../Store/index";
import Axios from "../../Axios/index";
import AxiosToken from "../../Axios/callAPIToken";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Form, Link, NavLink } from "react-router-dom";
import {
  addNewUser,
  IsLogin,
  IsRegister,
  IsLoginState,
  IsRegisterState,
  IsReadOnly,
} from "../../Store/User/index";
import { useState, useRef } from "react";
import Headers from "../../Components/Header";
import Footer from "../../Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import Register from "../../Components/Registers/Register";
import Login from "../../Components/Logins/Login";


// export default khong can dau ngoac {}, ten gi cung duoc
// export bthg can dau {}

const Account = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [editAble, setEditAble] = useState(false)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const inputMale = useRef();
  const inputFemale = useRef();
  const inputOther = useRef();
  

  // console.log("hi account");
  // console.log(localStorage.getItem("token"))

  if (localStorage.getItem("token") == undefined || user.userRegister.length==0)
    return (
      <>
        <Headers />
        <Footer />
      </>
    );
  return (
    <>
      <div className="regis">
        <Headers />
        {/* {user.isLoginState ? profile : undefined} */}
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
                        <NavLink
                          to="/order"
                          className="header__nav__item-link"
                        >
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
                    <i className="fa-solid fa-user iconItem1"></i>
                    <span className="itemTileMain">My Profile</span>
                  </div>
                  <div className="col l-6 m-6 c-6 proEditBtn">
                    {
                      editAble ? <button
                      className="proEdit"
                      onClick={() => {
                        dispatch(IsReadOnly(true))
                        setEditAble(false)
                        console.log(user.isReadOnly)
                      }}
                    >Save</button> : <button
                      className="proEdit"
                      onClick={() => {
                        dispatch(IsReadOnly(false))
                        setEditAble(true)
                        console.log(user.isReadOnly)
                      }}
                    >Edit Profile</button>
                    }
                    
                  </div>
                </div>
                <div className="proHeader row">
                  <div className="proAvatar col l-6 m-6 c-6">
                    <div className="wrapAvt">
                      <div className="avatar"></div>
                      <div className="nameUser">
                        <div className="proName">
                          {user.userRegister[user.userRegister.length - 1]
                            .first_name +
                            " " +
                            user.userRegister[user.userRegister.length - 1]
                              .last_name}
                        </div>
                        <div className="proUser">
                          {/* {console.log(user.userRegister.length - 1)} */}
                          {
                            user.userRegister[user.userRegister.length - 1]
                              .username
                          }
                        </div>
                      </div>
                    </div>
                    <div className="typeUser">DIAMOND USER</div>
                  </div>
                  <div className="proInfo col l-6 m-6 c-6">
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
                  <div className="col l-12 m-12 c-12">
                    <div className="proBodyInfo">
                      <div className="proLabel">First Name</div>
                      <input
                        type="text"
                        className="proBodyInfoItem"
                        // readOnly=""
                        readOnly={user.isReadOnly? "true" : ""}
                        defaultValue={
                          user.userRegister[user.userRegister.length - 1]
                            .first_name
                        }
                        // defaultValue or read-only: chi xem
                        // value them onChange de sua
                        onChange={(e) => {
                          setFirstName(e.target.value)
                        }}
                      />
                    </div>
                    <div className="proBodyInfo">
                      <div className="proLabel">Last Name</div>
                      <input
                        type="text"
                        className="proBodyInfoItem"
                        readOnly={user.isReadOnly? "true" : ""}
                        defaultValue={
                          user.userRegister[user.userRegister.length - 1]
                            .last_name
                        }
                        onChange={(e) => {
                          setLastName(e.target.value)
                        }}
                      />
                    </div>
                    <div className="proBodyInfo">
                      <div className="proLabel">Email</div>
                      <input
                        type="text"
                        className="proBodyInfoItem"
                        readOnly={user.isReadOnly? "true" : ""}
                        defaultValue={
                          user.userRegister[user.userRegister.length - 1].email
                        }
                        onChange={(e) => {
                          setEmail(e.target.value)
                        }}
                      />
                    </div>
                    <div className="proBodyInfo">
                      <div className="proLabel">Phone Number</div>
                      
                      <input
                        type="text"
                        className="proBodyInfoItem"
                        readOnly={user.isReadOnly ? "true" : ""}
                        onChange={(e) => {
                          setPhoneNumber(e.target.value)
                        }}
                        // value={user.userRegister[user.userRegister.length - 1].phone_number}
                      />
                    </div>
                    <div className="proBodyGender">
                      <div className="proLabelGender">Gender</div>
                      <div className="genderWrap">
                        <input
                          name="gender"
                          type="radio"
                          id="radio1"
                          className="proBodyGenderItem"
                          ref={inputMale}
                          disabled={user.isReadOnly? "true" : ""}
                        />
                        <label htmlFor="radio1">Male</label>
                      </div>
                      <div className="genderWrap">
                        <input
                          name="gender"
                          type="radio"
                          id="radio1"
                          className="proBodyGenderItem"
                          ref={inputFemale}
                          disabled={user.isReadOnly? "true" : ""}
                        />
                        <label htmlFor="radio1">Female</label>
                      </div>
                      <div className="genderWrap">
                        <input
                          name="gender"
                          type="radio"
                          id="radio1"
                          className="proBodyGenderItem"
                          ref={inputOther}
                          disabled={user.isReadOnly? "true" : ""}
                        />
                        <label htmlFor="radio1">Other</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Account;
