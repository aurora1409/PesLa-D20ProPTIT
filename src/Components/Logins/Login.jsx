import React, { useEffect } from "react";
import "../../Pages/Accounts/Account.css";
// import store from "../../../Store/index";
import Axios from "../../Axios/index";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import AxiosToken from "../../Axios/callAPIToken";
import { Form, Link, NavLink } from "react-router-dom";
import {
  addNewUser,
  IsLogin,
  IsRegister,
  IsLoginState,
  IsRegisterState,
  checkUser,
} from "../../Store/User/index";
import { useState } from "react";
import Headers from "../Header";
import Footer from "../Footer";
import { ToastContainer, toast } from "react-toastify";
import Account from "../../Pages/Accounts/Account";
import Register from "../Registers/Register";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

// export default khong can dau ngoac {}, ten gi cung duoc
// export bthg can dau {}

const Login = () => {
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ref= useRef(null)
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const notify = () => toast(`Login success!!! Welcome ${username}`);
  // dispatch(IsLogin(true))
  // console.log(user);
  //const [firstname, setFirstname] = useState('');
  const handleClickLogin = e => {
    e.preventDefault();
    ref.current.disabled = true;
    // if (!e.detail || e.detail == 1) {
      // console.log("login");
      // console.log(dispatch(checkUser({ username, password })));

      Axios("/login/", "POST", {
        username,
        password,
      })
        .then((res) => {
          console.log(res.data)
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
          // dispatch(IsLoginState(true));

          localStorage.setItem("token", res.data.token);

          AxiosToken("/profile/", "GET", res.data.token)
            .then(res => {
              // userLogin = res.data;
              // console.log(2);
              console.log(res.data);
              dispatch(addNewUser(res.data));
              navigate(-1);
            })
            .catch(err => {
              // console.log("sai")
              console.log(err);
            });
        })
        .catch(err => {
          const notify = () => {
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
          };
          notify()
          console.log(err);
        });
    // }
  };
  // dispatch(IsLoginState(false));

  var handleClickClose = () => {
    // dispatch(IsLoginState(false));
    // navigate("/account");
    navigate(-1);

  };
 


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
              onClick={handleClickClose}></button>
          </div>
          <form className="wrap" onSubmit={e=>handleClickLogin(e)}>
            <div className="registerMain">
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
                }}
                required
              />
            </div>
            <div className="checkSaveLogin">
              <input type="checkbox" className="check" name="checkSave" />
              <label htmlFor="checkSave">Remember Password</label>
            </div>
            <button
              className="registerBtn"
              id="loginBtnMain"
              type="submit"
              ref={ref}
              // onClick={e => handleClickLogin(e)}
            >
              Login
            </button>
            <div className="separateWrap">
              <div className="sideSeparate"></div>
              <div className="mainSeparate">OR</div>
              <div className="sideSeparate"></div>
            </div>
           
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
          </form>
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
