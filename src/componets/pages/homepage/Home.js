import React from 'react'
import Background from "./image/background.jpg";
import './home.css'
import {Link} from 'react-router-dom'
import Searchform from './Searchform';
import "./searchform.css";
import Destination from '../../Destination';
function Home() {
  return (
    <div className="homepage">
      <div
        className="top-background"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <div className="top-banner-text">
          <h1>Home is where you book it</h1>
          <p>And we've got just the place for you</p>
          <Link to="/">Explore holidey rental</Link>
        </div>
      </div>
      <div className="forms">
        <Searchform />
      </div>
      <Destination />
    </div>
  );
}

export default Home
