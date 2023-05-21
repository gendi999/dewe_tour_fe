import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./components/Detail"
import Navbars from "./components/Header";
import Trip from "./components/Trip";
import Addtrip from "./pages/Addtrip";
import Transaction from "./pages/Transaction";
import Modaltransaction from "./components/Modaltransaction";
// import LoginModal from "./page/LoginModal"
import Login from "./components/Login"
import Home from "./components/Home";
import Pay from "./components/Pay";
import PrivateRoute from "./pages/PrivateRoutes"
import Footer from "./components/Footer";
// import Props from "./components/Props";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from 'react-bootstrap/Button';
// import "./style.css"

import Profile from "./components/Profile";
import { useState } from "react";




function App() {
  const [isAdminn, setisAdmin]=useState(false)
  return (
    <div>
      <Router>
      <Navbars/>
      <Routes>
        <Route path="/" element={<Home />} />

<Route element={<PrivateRoute isAdminn={isAdminn} />}>
        <Route exact path="/Trip" element={<Trip />} />
        <Route path="/Transaction" element={<Transaction />} />
        <Route path="/Modaltransaction" element={<Modaltransaction />} />
        <Route path="/Addtrip" element={<Addtrip />} />
  </Route>

        
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Pay" element={<Pay />} />
        <Route path="/Detail/:id" element={<Detail />} />
        
        <Route path="/Login" element={<Login />} />
        
      </Routes>
      {/* <Footer/> */}
    </Router>
    </div>
  )
}

export default App;

// import React, { useContext } from 'react';
// import AuthProvider from './components/AuthProvider';
// import Login from './components/Login';
// import AuthContext from './components/AuthContext';

// function App() {
//   const { user, password, logout } = useContext(AuthContext);
  
//   return (
//     <div>
//       {user ? (
//         <>
//           <p>Welcome, {user.email}!</p>
//           {password.password}
//           <button onClick={logout}>Logout</button>
//         </>
//       ) : (
//         <Login />
//       )}
//     </div>
//   );
// }

// export default function() {
//   return (
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   );
// }
