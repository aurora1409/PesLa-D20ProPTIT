import React, { useEffect } from "react";
import "./Register.css";
import index from "../../Axios/index";
import Axios from "../../Axios/index";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Form, Link } from "react-router-dom";
import { addNewUser, setFirstName, setLastName, setEmail, setUsername, setPassword } from "../../Store/index";
import { useState } from "react";

// export default khong can dau ngoac {}, ten gi cung duoc
// export bthg can dau {}

const Register = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const [firstName,setFirstName] = useState('')
  const[lastName,setLastName]= useState('')
  const[email,setEmail]= useState('')
  const[username,setUsername]= useState('')
  const[password,setPassword]= useState('')
  // console.log(user);
  //const [firstname, setFirstname] = useState('');
  const handleClickRegister = () => {
    Axios("register/", "POST", {
      first_name: firstName,
      last_name: lastName,
      email,
      username,
      password
    })
      .then((res) => {
        console.log(res.data);
        // console.log("hi");
        dispatch(addNewUser(res.data));
        localStorage.setItem("token", res.data.token.toString());
        // console.log(localStorage.getItem("token"));
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // const changeInput = data => {
  //   dispatch(setFirstName(data.target.value))
  // }
  // useEffect(() => {
  //   //   console.log("yes")
  //   let newUser = {
  //     first_name: "12dymxn",
  //     last_name: "m12mxi",
  //     email: "x@",
  //     username: "dx1ud1e",
  //     password: "dxfum11",
  //   };

  //   Axios("register/", "POST", newUser)
  //     .then((res) => {
  //       // console.log(res);
  //       // console.log("hi");
  //       dispatch(addNewUser(res.data));
  //       localStorage.setItem("token", res.data.token.toString());
  //       // console.log(localStorage.getItem("token"));
  //       // console.log(user);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);
  //console.log(user)

  return (
    <>
      <div className="regisWrap">
        <div className="registerWrap">
          <div className="regisHeader">
            <span className="registerTitle">Register</span>
            <button
              type="button"
              className="btnClose"
              aria-label="Close"
            ></button>
          </div>
          <div className="wrap">
            <div className="registerMain">
              <input
                type="text"
                className="inputRegister"
                id="firstName"
                placeholder="FirstName"
                onChange={e => {
                  setFirstName(e.target.value)
                  console.log(firstName)
                }}
              />
              <input
                type="text"
                className="inputRegister"
                id="lastName"
                placeholder="LastName"
                //onChange={event => }
              />
              <input
                type="email"
                className="inputRegister"
                id="email"
                placeholder="Email"
                onChange={e => {
                  setLastName(e.target.value)
                  //console.log(firstName)
                }}
              />
              <input
                type="text"
                className="inputRegister"
                id="username"
                placeholder="UserName"
                onChange={e => {
                  setUsername(e.target.value)
                  //console.log(firstName)
                }}
              />
              <input
                type="password"
                className="inputRegister"
                id="password"
                placeholder="Password"
                onChange={e => {
                  setPassword(e.target.value)
                  //console.log(firstName)
                }}
              />
            </div>
            <button className="registerBtn" id="registerBtnMain" onClick={handleClickRegister}>
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
              <button className="registerBtn" id="registerGGBtn" >
                Register with Google
              </button>
              <button className="registerBtn" id="registerFbBtn">
                Register with Facebook
              </button>
            </div>
            <div className="registerFooter">
              <Link to="/" className="registerFooterLi"></Link>
              Already have an account? Login
              {/* <a href="">Already have an account? Login</a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
