import React, { useEffect } from "react";
import "../../Pages/Accounts/Account.css";
// import store from "../../../Store/index";
import Axios from "../../Axios/index";
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
import Account from "../../Pages/Accounts/Account";
import Login from "../Logins/Login";
import { useNavigate } from "react-router-dom";

// export default khong can dau ngoac {}, ten gi cung duoc
// export bthg can dau {}

const Register = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // console.log(user);
  //const [firstname, setFirstname] = useState('');
  const handleClickRegister = (e) => {
    // console.log(firstName)
    if (!e.detail || e.detail == 1) {
      console.log("register");
      Axios("/register/", "POST", {
        username,
        password,
        first_name: firstName,
        last_name: lastName,
        email,
      })
        .then((res) => {
          const notify = () =>
            toast.success(`Login success!!! Welcome ${username}`, {
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
          // console.log("hi");
          // dispatch(addNewUser(res.data));
          navigate("/login");

          // dispatch()
          // console.log(res.data)
          // localStorage.setItem("token", res.data.token.toString());
          // console.log(localStorage.getItem("token"));
          // console.log(user);
        })
        .catch((err) => {
          // 2 type of error:
          // chua dien het cac truong
          // user name da ton tai

          const notify = () =>
            toast.warning(`You must fill all fields!`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          const notify2 = () =>
            toast.warning(`username already exist!!!`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          // notify();
          console.log(username)
          username=="" ? notify(): notify2();
          console.log(err);
        });
    }
  };

  // dung setState de cho dang nhap va dang ki thay phien an hien, tuc la neu true
  // thi an false thi hien ..... dung if else trong setstate, truyen state vao duoi
  // style display cua div hay button

  return (
    <>
      <div className="regis">
        <div className="opacity" style={{ display: "block" }}></div>
        <Headers />
        <Footer />
        <div className="regisWrap">
          <div className="registerWrap">
            <div className="regisHeader">
              <span className="registerTitle">Register</span>
              <button
                type="button"
                className="btnClose"
                aria-label="Close"
                onClick={() => {
                  navigate("/account");
                }}
              ></button>
            </div>
            <div className="wrap">
              <div className="registerMain">
                <input
                  type="text"
                  className="inputRegister"
                  id="firstName"
                  required
                  placeholder="FirstName"
                  onChange={e => {
                    setFirstName(e.target.value);
                    // console.log(firstName)
                  }}
                />
                <input
                  type="text"
                  className="inputRegister"
                  id="lastName"
                  required
                  placeholder="LastName"
                  onChange={e => {
                    setLastName(e.target.value);
                    //console.log(firstName)
                  }}
                />
                <input
                  type="email"
                  className="inputRegister"
                  id="email"
                  required
                  placeholder="Email"
                  onChange={e => {
                    setEmail(e.target.value);
                  
                    //console.log(firstName)
                  }}
                />
                <input
                  type="text"
                  className="inputRegister"
                  id="username"
                  required
                  placeholder="UserName"
                  onChange={e => {
                    setUsername(e.target.value);
                    //console.log(firstName)
                  }}
                />
                <input
                  type="password"
                  className="inputRegister"
                  id="password"
                  required
                  placeholder="Password"
                  onChange={e => {
                    setPassword(e.target.value);
                    //console.log(firstName)
                  }}
                />
              </div>
              <button
                className="registerBtn"
                id="registerBtnMain"
                onClick={(e) => handleClickRegister(e)}
              >
                Register
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
                  Register with Google
                </button>
                <button className="registerBtn" id="registerFbBtn">
                  Register with Facebook
                </button>
              </div>
              <div
                className="registerFooter"
                onClick={() => {
                  navigate("/login");
                  // <Login/>
                  console.log("login");
                }}>
                {/* <Link to="/login"> */}
                Already have an account? Login
                {/* </Link> */}
                {/* <a href="">Already have an account? Login</a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
