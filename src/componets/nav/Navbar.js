import React from 'react'
import { Link } from 'react-router-dom'
import logo from "./logo/chikalogo.png";
import './navbar.css'
import { AiFillCreditCard } from "react-icons/ai";
import { useCookies } from "react-cookie";
function Navbar({ userid, admin }) {
	const [cookies, setCookie, removeCookie] = useCookies();

  const logout = () => {
    console.log("cookies");
    removeCookie("id", cookies.id);
    removeCookie("email", cookies.email);
    removeCookie("username", cookies.username);
    removeCookie("admin", cookies.admin);

    window.location.reload();
  };
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="uldiv">
        <li>
          <Link to="">list your property</Link>
        </li>
        <li>
          <Link to="">Home</Link>
        </li>
        {userid ? (
          <>
            <li>
              <Link to="/myapartment">My Apartment</Link>
            </li>
            <li>
              <Link to="#" onClick={logout}>
                Logout
              </Link>
            </li>
            {admin === "0" ? null : (
              <>
                <li>
                  <Link to="/createcountry">Create Country</Link>
                </li>
                <li>
                  <Link to="/new">New apartment</Link>
                </li>
              </>
            )}
          </>
        ) : (
          <>
            <li>
              <Link to="register">Register</Link>
            </li>
            <li>
              <Link to="login">Login </Link>
            </li>
          </>
        )}
      </div>
    </div>
  );
}

export default Navbar
