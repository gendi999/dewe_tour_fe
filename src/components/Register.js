import React, { useState } from 'react';
import palm1 from "../images/palm1.png"
import { Modal, Button, Form } from 'react-bootstrap';

function Register() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');

  const handleClose = () => {
    // Simpan data ke local storage
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('fullname', fullname);
    localStorage.setItem('phone', phone);
    // alert('ok');
    setShow(false);
  };


  const handleShow = () => setShow(true);

  return (
    <>
      <Button style={{width:"65px",height:"35px"}} variant="light" onClick={handleShow}>
                Register
              </Button>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header  className="border-0" style={{ marginBottom: "-10px" }} closeButton>
        <img style={{position:"absolute", marginTop:"50px"}} src={palm1}></img>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body  className="mx-5">
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className=" text-black"
                />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                // className="bg-dark text-white"
                />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="fullname"
                placeholder="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                // className="bg-dark text-white"
                />
            </Form.Group>


            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="phone"
                placeholder="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                // className="bg-dark text-white"
                />
            </Form.Group>

          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="loginn mx-5" style={{height:'45px'}} variant="warning" onClick={handleClose}>
            Register
          </Button>
        </Modal.Footer>
        <Modal.Footer
          className="flex justify-content-center border-0"
          style={{ marginTop: "-25px" }}>
          <p style={{ fontSize: "12px" }} className="text-muted">
            Already have an account ? Klik{" "}
            <a
              onClick={handleClose}
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
    </>
  );
}
export default Register
// import React, { useState } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';

// function Login(props) {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const HideLogin = () => {
//     return(
      
//       <Button variant="danger" onClick={handleShow}>
//           Register
//         </Button>
    
//     )
//     }
//     const handleSubmit = () => {
//       props.login(true);
    
      
//         }

//   return (
//     <>
//      {props.hide ? <></> : <HideLogin></HideLogin>}
//       <Button variant="danger" onClick={handleShow}>
//         Register
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Register</Modal.Title>
//         </Modal.Header>
//         <Modal.Body className="">
//           <Form className="">
//             <Form.Group controlId="formBasicEmail" className="mb-3">
//               <Form.Control type="email" placeholder="Enter email" />
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword" className="mb-3">
//               <Form.Control type="password" placeholder="Password" />
//             </Form.Group>

//             <Form.Group controlId="formBasicConfirmPassword" className="mb-3">
//               <Form.Control type="password" placeholder="FullName" />
//             </Form.Group>

//             <Form.Group controlId="formBasicEmail" className="mb-3">
//               <Form.Control type="email" placeholder="Gender" />
//             </Form.Group>

//             <Form.Group controlId="formBasicEmail" className="mb-3">
//               <Form.Control type="email" placeholder="Phone" />
//             </Form.Group>

//             <Form.Group controlId="formBasicEmail" className="mb-3">
//               <Form.Control type="email" placeholder="Addres" />
//             </Form.Group>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button className="loginn" variant="secondary" onClick={handleSubmit}>
//             Register
//           </Button>

//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// }

// export default Login;