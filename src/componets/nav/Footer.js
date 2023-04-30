import React from 'react'
import "./footer.css";
import { Link } from 'react-router-dom';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
  AiFillLinkedin,
} from "react-icons/ai";
function Footer() {
	return (
    <div className="footer">
      <div className="footer-container">
        <div>
          <h1>Book your travel</h1>
          <p>100 new awoshie road accra ghana</p>
          <p>+233558602996</p>
        </div>
        <div>
          <h1>Customer support</h1>
          <ul className="footerul">
            <li>
              <Link to="">Faq</Link>
            </li>
            <li>
              <Link to="">How do i make a reservation</Link>
            </li>
            <li>
              <Link to="">Payment options</Link>
            </li>
            <li>
              <Link to="">Booking tips</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Follow us</h1>
          <div className="footer-icons">
            <Link to="">
              <AiFillFacebook size="24" />
            </Link>
            <Link to="">
              <AiFillInstagram size="24" />
            </Link>
            <Link to="">
              <AiFillTwitterCircle size="24" />
            </Link>
            <Link to="">
              <AiFillYoutube size="24" />
            </Link>
            <Link to="">
              <AiFillLinkedin size="24" />
            </Link>
          </div>
        </div>

        <div>
          <form className="newslaterform">
            <h1>don't miss our exclusive offers</h1>
            <div>
              <input placeholder="Enter your email" />
              <button>Signup</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Footer
