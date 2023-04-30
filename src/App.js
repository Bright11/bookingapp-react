import React from 'react'
import Navbar from './componets/nav/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './componets/pages/homepage/Home';
import Register from './componets/pages/homepage/Register';
import Login from "./componets/pages/homepage/Login";
import { useCookies } from 'react-cookie';
import Country from './componets/pages/admin/Country';
import Newapartment from './componets/pages/admin/Newapartment';
import Hoteldetails from './componets/pages/homepage/hotels/Hoteldetails';
import Myapartment from './componets/pages/homepage/hotels/Myapartment';
import Editecountry from './componets/pages/admin/Editecountry';
import ViewApartment from './componets/pages/admin/ViewApartment';
import Editapartment from './componets/pages/admin/Editapartment';
import Footer from './componets/nav/Footer';
function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['user'])
  const userid = cookies.id;
  const admin = cookies.admin;
  return (
    <BrowserRouter>
      <Navbar userid={userid} admin={admin} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        {admin === "1" ? (
          <>
            <Route path="createcountry" element={<Country />} />
            <Route path="editcountry/:editcountry" element={<Editecountry />} />
            <Route path="new" element={<Newapartment />} />
            <Route path="apartment" element={<ViewApartment />} />
            <Route path='apartmentid/:apartmentid' element={<Editapartment/>}/>
          </>
        ) : null}
        <Route
          path="details/:details"
          element={<Hoteldetails userid={userid} />}
        />
        <Route path="myapartment" element={<Myapartment />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App