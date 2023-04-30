import React from 'react'
import countrydata from "./countrydata";
import "./destination.css";
import offer1 from "./pages/homepage/image/offer1.jpg";
import offer2 from "./pages/homepage/image/offer2.jpg";
import { useState } from 'react';
import Countries from './Countries';
import Hotels from './pages/homepage/hotels/Hotels';
function Destination() {
  const [month, setMonth] = useState(null);
  const monthsclick = (m) => {
    setMonth(m);
  };
  return (
    <div className="destination">
      <div>
        <h1>Popular destinations by month</h1>
        <p>Travellers from Ghana are loving these places</p>

        <div className="offers-images">
          <div style={{ backgroundImage: `url(${offer1})` }}></div>
          <div style={{ backgroundImage: `url(${offer2})` }}></div>
        </div>
      </div>
      <Countries
        monthsclick={monthsclick}
        month={month}
        countrydata={countrydata}
      />
      <Hotels />
    </div>
  );
}

export default Destination
