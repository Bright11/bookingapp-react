import React from 'react'
import './hotels.css'
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import url from '../../../../axios/url';
import {Link} from 'react-router-dom'
function Hotels() {
  const [hotels, setHotels] = useState([]);
  useEffect(() => {
    gethotels();
  }, []);
  const gethotels = async () => {
    const response = await axios
      .get(`${url}/property/hotels`)
      .then((response) => {
        setHotels(response.data);
      });
  };
  return (
    <div className="hotelspages">
      <h1>Hotels</h1>
      <div className="hotel">
        {hotels?.map((h) => (
          <div className="hotel-div" key={h._id}>
            <img src={h.image} alt={h.name} />
            <Link to={`/details/${h._id}`}>{h.name}</Link>
            <div className="hoteltopdescript">
              <p>
                
                {h.description.length > 200
                  ? `${h.description.substring(0, 200)}...`
                  : h.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hotels
