import axios from 'axios';
import React, { useState } from 'react'
import url from '../../../axios/url';
import { storage } from "../../../firebase";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useParams } from 'react-router-dom';
import ViewCountries from './ViewCountries';

function Country() {
	const [name, setName] = useState("")
	const [error, setError] = useState("");
  const [image, setImage] = useState(null)
  const [handlebtn, setHandlebtn] = useState(null);
  const [edit, setEdit] = useState(null)
  
  const { editcountry } = useParams();
  
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
     const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
       setImage(downloadURL)
       setHandlebtn(true)
     });
   }
 );

}


    // the end
  
  const handcategory = (e) => {
    
		e.preventDefault();
		try {
			const response = axios
        .post(`${url}/property/createcountry`, {
          name,image
        })
        .then((response) => {
          setName("");
          setError(response.data.name);
		}).catch((response) => {
			setError(response.message)
			
		});
		} catch (e) {
			setError(e)
		}
	}
  console.log("image",image)
  return (
    <div className="register">
  
        <form onSubmit={handcategory}>
          <h1>{error}</h1>
          <h1>Countries</h1>

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
        <div>
          <button onClick={uploadts} className="uploadimage">
            Upload
          </button>
        </div>
      )}
      <div>
        <ViewCountries/>
      </div>
    </div>
  );
}

export default Country
