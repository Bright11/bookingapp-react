import React from 'react'
import "./register.css";
import { useState } from 'react';
import url from '../../../axios/url';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'
function Register() {
	const [email, setEmail] = useState('')
	const [username,setUsername]= useState('')
	const [password,setPassword]= useState('')
	const [cpassword,setCpassword]= useState('')
	const [registererror, setRegistererror] = useState("")
	const navigate = useNavigate();
	const handleregister = (e) => {
		
		e.preventDefault();
		if (password === cpassword) {
			console.log("pass")
			try {
        const response = axios
          .post(`${url}/user/register`, {
            email,
            password,
            username,
          })
          .then((response) => {
			  console.log(response);
			  setRegistererror(response.data.username,'Your registration was sucessful')
			  setEmail("")
			  setUsername("")
			  setPassword("")
			  setCpassword("")
			  navigate("/login")
			
          });
      } catch (error) {
        console.log(error);
      }
		} else {
			// erro password did not match
			console.log("did not match")
		}
	}
  return (
    <div classsNmae="" className="register">
      <form onSubmit={handleregister}>
        <h1>{registererror}</h1>
        <h1>Registration</h1>
        <div>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="User name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Confirm Password"
            value={cpassword}
            onChange={(e) => setCpassword(e.target.value)}
          />
        </div>
        <div>
          <button className="registerbtn">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register
