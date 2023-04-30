import React from 'react'
import "./countries.css";
import { Link } from 'react-router-dom';
import axios  from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import url from '../axios/url';
function Countries({ countrydata, month, monthsclick }) {
  const [country, setCountry]= useState([])
  const countryimgs = country;
  	const fetchcountries = async () => {
      const response = await axios
        .get(`${url}/property/getcats`)
        .then((response) => {
          setCountry(response.data);
        });
    };
    useEffect(() => {
      fetchcountries();
    }, []);
  return (
    <div className="country">
      <div className="months">
        {country?.map((m) => (
          <div>
            {month === m._id ? (
              <button className="monthactive">{m.name}</button>
            ) : (
              <button onClick={() => monthsclick(m._id)}>{m.name}</button>
            )}
          </div>
        ))}
      </div>
      <div className="countriesimg">
        {countryimgs?.map((c) => (
          <div className="countriesdiv">
            <Link to="">
              <div className="image">
                <img src={c.image} alt={c.name} />
              </div>
              <div className="name">{c.name}</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countries
