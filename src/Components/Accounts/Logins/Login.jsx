import React, { useEffect } from "react";
import "../Account.css";
// import store from "../../../Store/index";
import Axios from "../../../Axios/index";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AxiosToken from "../../../Axios/callAPIToken";
import { Form, Link, NavLink } from "react-router-dom";
import {
  addNewUser,
  IsLogin,
  IsRegister,
  IsLoginState,
  IsRegisterState,
  checkUser,
} from "../../../Store/User/index";
import { useState } from "react";
import Headers from "../../Header";
import Footer from "../../Footer";
import { ToastContainer, toast } from "react-toastify";
import Account from "../Account";
import Register from "../Registers/Register";
import { useNavigate } from "react-router-dom";

// export default khong can dau ngoac {}, ten gi cung duoc
// export bthg can dau {}

const Login = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const notify = () => toast(`Login success!!! Welcome ${username}`);
  // dispatch(IsLogin(true))
  // console.log(user);
  //const [firstname, setFirstname] = useState('');
  const handleClickLogin = (e) => {
    if (!e.detail || e.detail == 1) {

      console.log("login");
      console.log(dispatch(checkUser({username, password})))
  
      Axios("/login/", "POST", {
        username,
        password,
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
          dispatch(IsLoginState(true));
  
          localStorage.setItem("token", res.data.token);
  
          AxiosToken("/profile/", "GET", res.data.token)
            .then((res) => {
              // userLogin = res.data;
              // console.log(2);
              console.log(res.data);
              dispatch(addNewUser(res.data));
              navigate("/account");
            })
            .catch((err) => {
              // console.log("sai")
              console.log(err);
            });
        })
        .catch((err) => {
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
          const notify2 = () => {
            toast.warning(`Account does not exist!!!`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
            toast.warning(`Login failed!!!`, {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
            });
          }
          username=="" ? notify(): notify2();
          // console.log("sai");
          console.log(err);
        });
    }
  };
  // dispatch(IsLoginState(false));

  var handleClickClose = () => {
    navigate("/account");
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
      <Headers />
      <Footer />
      <div className="regisWrap">
        <div className="registerWrap" id="loginWrap">
          <div className="regisHeader">
            <span className="registerTitle">Login</span>
            <button
              // type="button"
              className="btnClose"
              // aria-label="Close"
              onClick={handleClickClose}
            ></button>
          </div>
          <div className="wrap">
            <form className="registerMain">
              <input
                type="text"
                className="inputRegister"
                name="username"
                id="username"
                placeholder="UserName"
                onChange={e => {
                  setUsername(e.target.value);
                  //console.log(firstName)
                }}
                required
              />
              <input
                type="password"
                className="inputRegister"
                name="password"
                id="password"
                placeholder="Password"
                onChange={e => {
                  setPassword(e.target.value);
                  //console.log(firstName)
                }}
                required
              />
            </form>
            <div className="checkSaveLogin">
              <input type="checkbox" className="check" name="checkSave" />
              <label htmlFor="checkSave">Remember Password</label>
            </div>
            <button
              className="registerBtn"
              id="loginBtnMain"
              onClick={e=>handleClickLogin(e)}
            >
              {/* <Link to="/account">Login</Link> */}
              Login
              {/* {navigate("/register")} */}
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
              onClick={() => {
                navigate("/register");
              }}
              // onClick={() => {

              //   // <Headers/>
              //   <Register />;
              //   console.log("regis");
              // }}
            >
              {/* <Link to="/register"> */}
              {/* {navigate("/register")} */}
              Do not have an account? Register
              {/* </Link> */}
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

  
  return (
    <>
      {account2}
      {/* {user.isLoginState ? account2 : account} */}
    </>
  );
};

export default Login;
