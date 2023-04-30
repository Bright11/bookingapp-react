import React from "react";
import "../homepage/register.css";
import { useState } from "react";
import url from "../../../axios/url";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";
function Newapartment() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [roomnumber, setRoomnumber] = useState();
	const [bednumber, setBednumber] = useState();
	const [description, setDescription] = useState("")
	const [country, setCountry] = useState([])
	const [countryid, setCountryid] = useState("")
	const [message,setMessage]= useState("")
  const navigate = useNavigate();
  const handlenewproperty = (e) => {
    e.preventDefault();
    if (name || price || countryid) {
      console.log("pass");
      try {
        const response = axios
          .post(`${url}/property/newproperty`, {
            name,
            roomnumber,
            bednumber,
            description,
            countryid,
            price,
          })
          .then((response) => {
            console.log(response);
            setName("");
            setBednumber('');
            setRoomnumber('');
            setDescription("");
            setCountryid("");
            setPrice('');
            setMessage(response.data.name);
          });
      } catch (error) {
        console.log(error);
      }
    } else {
      // erro password did not match
      console.log("did not match");
    }
  };
	console.log(countryid)
	// fetch countries
	const fetchcountries = async () => {
		const response = await axios
      .get(`${url}/property/getcats`)
      .then((response) => {
      setCountry(response.data)
      });
	}
	useEffect(() => {
    fetchcountries();
	}, []);
	
  return (
    <div classsNmae="" className="register">
      <Link to="/apartment">View Apartment</Link>
      <form onSubmit={handlenewproperty}>
        <h1>{message}</h1>
        <h1>Property</h1>
        <div>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <select onChange={(e) => setCountryid(e.target.value)}>
            <option selected>Choose Country</option>
            {country.map((c) => (
              <option value={c._id}>{c.name}</option>
            ))}
          </select>
        </div>
        <div>
          <input
            type="number"
            placeholder="room number"
            value={roomnumber}
            onChange={(e) => setRoomnumber(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="bed number"
            value={bednumber}
            onChange={(e) => setBednumber(e.target.value)}
          />
        </div>
        <div>
          <input
            placeholder="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div>
          <textarea
            placeholder="Description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
        <div>
          <button className="registerbtn">Create new property</button>
        </div>
      </form>
    </div>
  );
}

export default Newapartment;
