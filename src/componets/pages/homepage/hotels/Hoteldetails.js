import React, { useEffect, useState } from 'react'
import { useParams,Link } from "react-router-dom"
import "./hoteldetails.css";
import hotel from './hotelimg/hotel.jpg'
import axios from 'axios';
import url from '../../../../axios/url';
function Hoteldetails({ userid }) {
  const { details } = useParams();
  const [propertydetails, setPropertydetails] = useState("");
const[name, setName] = useState("");
const [price, setPrice] = useState();
const [roomnumber, setRoomnumber] = useState();
const [bednumber, setBednumber] = useState();
  const [showmap, setShowmap] = useState(null);
  const [maptext, setMaptext] = useState("Show Map")
  const [country, setCountry] = useState("")
  ;
  useEffect(() => {
    getdetails();
    document.title = name;
  }, [propertydetails]);
  const getdetails = async () => {
    const response = axios
      .get(`${url}/property/${details}`)
      .then((response) => {
		  setPropertydetails(response.data);
		  setName(response.data.name);
		  setPrice(response.data.price)
		  setRoomnumber(response.data.roomnumber);
        setBednumber(response.data.bednumber)
        setCountry(response.data.countryid.name);
        
      });
  };
	const readytobooked = (p) => {
	 
	  const response = axios.post(`${url}/property/reserved/${details}`, {
		  userid,
		  name,
		  price,
		  roomnumber,
		  bednumber
		  
    });
	};
  const showmaps = () => {
    if (showmap) {
      setShowmap(null);
      setMaptext("Show Map");
    } else {
      setShowmap(true);
        setMaptext("Hide Map");
  }
}
  return (
    <div className="hoteldetails">
      <div className="detailsflex">
        <div className="details-sidebar">
          <form>
            <label>Description</label>
            <input value={propertydetails.name} />
            <lable>Check-in date</lable>
            <input type="date" />
            <lable>Check-out date</lable>
            <input type="date" />
            <lable>Number of room</lable>
            <input type="number" value={propertydetails.roomnumber} />
            {userid ? (
              <>
                {propertydetails.status === "available" ? (
                  <button onClick={readytobooked}>Reserve</button>
                ) : (
                  <button type="button" className="alreadbooked">
                    Booked alreafy
                  </button>
                )}
              </>
            ) : (
              <li className="detailsloginli">
                <Link to="/login">Login</Link>
              </li>
            )}
          </form>
          <button onClick={showmaps} className="showmap">
            {maptext}
          </button>
        </div>
        <div className="details-main-img">
          <div>
            <img src={propertydetails.image} alt="" />
          </div>
        </div>
      </div>
      <div className="details-info">
        <div className="details-info-left">
          <p>{propertydetails.description}</p>
        </div>
        <div className="details-info-right">
          <div className="location">
            <h1>Quality and affordable</h1>
            <h2>Well organized bed</h2>
            <h2>{country}</h2>
            {userid ? (
              <>
                {propertydetails.status === "available" ? (
                  <button onClick={readytobooked}>Reserve</button>
                ) : (
                  <button>Booked alreafy</button>
                )}
              </>
            ) : (
              <li className="detailsloginli">
                <Link to="/login">Login</Link>
              </li>
            )}
          </div>
        </div>
      </div>
      {showmap ? (
        <div className="mapdiv">
          <iframe
            width="100%"
            height="400"
            src={`https://maps.google.com/maps?q=${country}&output=embed`}
          ></iframe>
        </div>
      ) : null}
    </div>
  );
}

export default Hoteldetails
