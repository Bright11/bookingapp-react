import React from 'react'
import { useEffect, useState } from 'react';
import axios  from 'axios';
import url from '../../../axios/url';
import "./vewApartment.css";
import { Link } from 'react-router-dom';
function ViewApartment() {
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
    <div className="vewApartment">
      <div className="vewapartment_container">
        <div>
          {hotels?.map((h) => (
            <div className="vewapartment_mapdiv" key={h._id}>
              <div className="vewapartment_img"></div>
              <div className="vewapartment_info">
                <div>{h.name}</div>
                <div className="apartmenteditlink">
                  <Link to={`/apartmentid/${h._id}`}>Edit</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ViewApartment
