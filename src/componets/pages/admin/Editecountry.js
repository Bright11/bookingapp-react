import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../firebase";
import axios from "axios";
import url from "../../../axios/url";

function Editecountry() {
  const [edit, setEdit] = useState("Edite Country");
  const [handlebtn, setHandlebtn] = useState(null);
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const { editcountry } = useParams();

  const navigate = useNavigate()

  const getcountry = async () => {
    try {
      const response = await axios
        .get(`${url}/property/editcountry/${editcountry}`)
        .then((response) => {
          setName(response.data.name);
        });
    } catch (e) {
      console.log(e);
    }
  };
  //
  useEffect(() => {
    getcountry();
  }, []);
  const uploadts = () => {
    // upload imag

    const storageRef = ref(storage, `images/${image.name}`);

    const uploadTask = uploadBytesResumable(storageRef, image);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
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
  const noimage = () => {
    setHandlebtn(true)
  }
  const handedite = async (e) => {
    e.preventDefault();
    try {
		const response = await axios
      .post(`${url}/property/editc/${editcountry}`, {
        name,
        image,
      })
      .then((response) => {
        setEdit("edtited");
        navigate("/createcountry");
      });
	} catch (e) {
		console.log(e)
	}
  };
  return (
    <div className="register">
      <form onSubmit={handedite}>
        <h1>{edit}</h1>

        <div>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>

        {handlebtn ? (
          <div>
            <button className="registerbtn">Create</button>
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
No Image            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Editecountry;
