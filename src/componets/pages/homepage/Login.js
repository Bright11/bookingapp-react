import React from "react";
import "./register.css";
import { useState } from "react";
import url from "../../../axios/url";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from 'react-router-dom';
function Login() {
	const [cookies, setCookie, removeCookie]= useCookies(['user'])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
	const [registererror, setRegistererror] = useState("");
	const navigate = useNavigate();
  const handleregister = (e) => {
    e.preventDefault();
    if (email || password) {
      console.log("pass");
      try {
        const response = axios
          .post(`${url}/user/login`, {
            email,
            password,
          })
          .then((response) => {
            setEmail("");
            setPassword("");
            setCookie("id", response.data._id);
            setCookie("username", response.data.username);
            setCookie("admin", response.data.isAdmin);
            setTimeout(() => {
              window.location.reload(false);
            }, 500);
            navigate("/");
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      // erro password did not match
      console.log("did not match");
    }
  };
  return (
    <div classsNmae="" className="register">
      <form onSubmit={handleregister}>
        <h1>{registererror}</h1>
        <h1>Login</h1>
        <div>
          <input type="emial"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
       
        <div>
          <input type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
       
        <div>
          <button className="registerbtn">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
