import React from 'react'
import url from '../../../axios/url';
import axios from 'axios';
import { useState, useEffect } from 'react';
import "./viewCountries.css";
import { Link } from 'react-router-dom';
function ViewCountries() {
	const [country, setCountry]= useState([])
	const fetchcountries = async () => {
    const response = await axios
      .get(`${url}/property/admingetcats`)
      .then((response) => {
        setCountry(response.data);
      });
  };
  useEffect(() => {
    fetchcountries();
  }, []);
	
	
	return (
    <div className="viewCountries">
      <div className="view-content">
        {country?.map((m) => (
          <div className=''>
            <div>
              <h1>{m.name}</h1>
            </div>
            <div className='editlink'>
              <Link to={`/editcountry/${m._id}`} >Edit</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewCountries
