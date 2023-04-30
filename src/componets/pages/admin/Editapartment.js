import React from "react";
import "../homepage/register.css";
import { useState } from "react";
import url from "../../../axios/url";
import axios from "axios";
import { useNavigate, Link,useParams } from "react-router-dom";
import { useEffect } from "react";
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
function Editapartment() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState();
  const [roomnumber, setRoomnumber] = useState();
  const [bednumber, setBednumber] = useState();
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
	const [handlebtn,setHandlebtn]= useState(null)
  const navigate = useNavigate();
	const { apartmentid } = useParams();
	const [country, setCountry] = useState([]);
	const [countryid, setCountryid] = useState("");
	const [getcountryname, setGetcountryname] = useState("");
	
  const uploadts = () => {
    // upload imag
    const storageRef = ref(storage, `images/${image.name}`);

    const uploadTask = uploadBytesResumable(storageRef, image);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete

        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setImage(downloadURL);
          setHandlebtn(true);
        });
      }
    );
  };
  // the end
  const handlenewproperty = (e) => {
    e.preventDefault();

    console.log("pass");
	  try {
		  if (countryid) {
        const response = axios
          .post(`${url}/property/editproperty/${apartmentid}`, {
            name,
            roomnumber,
            bednumber,
            description,
            price,
            image,
            countryid,
          })
          .then((response) => {
            navigate("/apartment");
            setMessage(response.data);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
const noimage = () => {
  setHandlebtn(true);
};
  //   getting apartment by ids
  const editapartment = async () => {
    await axios
      .get(`${url}/property/editapartment/${apartmentid}`)
      .then((response) => {
        setName(response.data.name);
        setBednumber(response.data.bednumber);
        setRoomnumber(response.data.roomnumber);
        setDescription(response.data.description);
		  setPrice(response.data.price);
		  
		  setGetcountryname(response.data.countryid.name);

      });
  };
  useEffect(() => {
	  editapartment();
	  fetchcountries();
  }, []);
 	const fetchcountries = async () => {
    const response = await axios
      .get(`${url}/property/admingetcats`)
      .then((response) => {
        setCountry(response.data);
      });
  };
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
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        {handlebtn ? (
          <div>
            <button className="registerbtn">Create new property</button>
          </div>
        ) : null}
      </form>
      {handlebtn ? null : (
        <>
          <div>
            <button onClick={uploadts} className="uploadimage">
              Upload
            </button>
          </div>
          <div>
            <button onClick={noimage} className="uploadimage">
              No Image
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Editapartment;
