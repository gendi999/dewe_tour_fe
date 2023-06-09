import Login from '../components/Login'
import Register from '../components/Register'
import Home from '../components/Home'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import Dropdownn from "../images/Ellipse1.png"
import bill from "../images/bill1.png"
import userr from "../images/userr.png"
import journey from "../images/journey.png"
import logout from "../images/logout.png"
function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('loggedIn') || false);
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') || false);
  const [isAdminn,setIsAdminn] = useState(localStorage.getItem('isAdminn') || false);
  const [handleDropdown, setHandleDropdown] = useState(false);

  const handleLogin = (isAdmin,isAdminn) => {
    localStorage.setItem('loggedIn', true);
    localStorage.setItem('isAdmin', isAdmin);
    localStorage.setItem('isAdminn', isAdminn);
    setIsLoggedIn(true);
    setIsAdmin(isAdmin);
    setIsAdminn(isAdminn);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setIsAdminn(false);
    localStorage.removeItem('loggedIn');
    localStorage.removeItem('isAdmin');
    localStorage.removeItem('isAdminn');
    window.location="/"
  };
   return <nav >
          <img style={{width:"100%"}} src={require( "../images/navba1.png")} alt="gambar"></img>
          
    <div className="left-side" style={{position:"absolute"}} >
        <ul>
          <li> 
          < Link to= {"/"} className="text-white" >
          <img   src={require( "../images/Icon.png")} alt="gambar"></img>
             </Link>
          </li>
          
        </ul>
      </div>  
      <div className="right-side">
  {isLoggedIn ? (
    <Dropdown className="white">
      <Dropdown.Toggle className="btnsa" >
      <img 
      // style={{border:"none"}}
            type="button"
            onClick={() => setHandleDropdown(!handleDropdown)}
            src={Dropdownn}
            alt="gambaru"
          />
      </Dropdown.Toggle>
      {handleDropdown && (
        <Dropdown.Menu className="Mdrop  mt-0 ms-1">
          {isAdmin ? (
            <>

          <Dropdown.Item  >
              <img src={userr}/>
            <Link to="/Profile">
              Profile</Link>
              </Dropdown.Item>
              <Dropdown.Item  >
            <img src={bill}/>
            <Link to="/Pay">
              Pay</Link>
              </Dropdown.Item>
             </> 
          ) :  (
            <>
              <Dropdown.Item className="bg-white" style={{

              }}>
              <img src={journey}/>
            <Link to="/Trip">
              Trip </Link>
          </Dropdown.Item>
              <Dropdown.Item className="bg-white">
              <img src={bill}/>
            <Link to="/Transaction">
              Transaction </Link>
          </Dropdown.Item>
            </>

          )}
          <NavDropdown.Divider />
         <NavDropdown.Item className="bg-white text-dark" style={{padding:"10px"}} onClick={handleLogout}>
          <img src={logout}/>
          Logout 
         </NavDropdown.Item>
        </Dropdown.Menu>
      )}
    </Dropdown>
  ) : (
    <>
      <div className="r" style={{position:"absolute", marginRight:"100px"}}>
        <Register/>
      </div>
      <div   className="b" style={{position:"absolute" }}>
        <Login onLogin={handleLogin} />
      </div>
    </>
  )}
</div>

</nav>
    
}
export default Header;
