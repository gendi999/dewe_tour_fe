import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import palm1 from "../images/palm1.png"
// import { Navigate } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState(''); //2 argumen string kodong dikarenakan nilai nya belum ada
  const [password, setPassword] = useState(''); // di saat di inputkan maka nilainya akan di perbarui mengunakan si set
  const [showModal, setShowModal] = useState(false);
  const [show, setShow] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Validasi username dan password di sini
    if (username === 'admin@gmail' && password === 'a') {
      localStorage.setItem('loggedIn', true);  //menetapkan nilai true pda key logedin ini unuk menandai bahwa si pengguna udah berhasil login
      localStorage.setItem('isAdminn', true); //mengetahui bahwa pengguna yang login  adlah admin
      setShowModal(false);
      window.location="/Transaction"
    } else if (username == 'user@gmail' && password == 'u') {
      localStorage.setItem('loggedIn', true);
      localStorage.setItem('isAdmin', false);
      setShowModal(false);
      window.location="/"
    } else {
      alert('Invalid username or password!');
    }
  };


  

  return (
    <div>
      <Button className="" style={{width:"55px",height:"35px"}} variant="warning" onClick={() => setShowModal(true)}>
        Login
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}> 
        <Modal.Header  closeButton>
          <img style={{position:"absolute", marginTop:"50px"}} src={palm1}></img>
          <Modal.Title style={{color:"black", marginLeft:"200px"}}>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body className="mx-3" >
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={username}
                onChange={(e) => setUsername(e.target.value)} //jadi nilai setusername disini akan menetapkan nilainya ke username
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
      <Button style={{height:'45px'}}  className="loginn mx-3 text-light" variant="warning" onClick={handleLogin}>
        Login
      </Button>
      </Modal.Footer>
      <Modal.Footer
          className="flex justify-content-center border-0"
          style={{ marginTop: "-25px" }}>
          <p style={{ fontSize: "12px" }} className="text-muted">
            Already have an account ? Klik{" "}
            <a
              onClick={show}
              style={{
                textDecoration: "none",
                color: "gray",
                cursor: "pointer",
              }}
              className="fw-semibold">
              Here
            </a>
          </p>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
