import {  Col, Form, Row } from "react-bootstrap";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import React, { useState } from 'react';
import Footer from '../components/Footer'
import { useNavigate } from "react-router-dom";
// import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import Swal from "sweetalert2";



function Addtrip() {
  const MySwal = withReactContent(Swal);
  let navigate = useNavigate();
  const handleButtonClick = () => {
  MySwal.fire({
    title: <strong>Ah Yang Benerr</strong>,
    html: <i>You clicked the button!</i>,
    icon: 'success'
    })
        navigate("/Trip");
  };
    return(
        <>
        <div
        className="bg-white text-dark py-5"
        style={{ padding: "0px 170px" }}>
        <h5 className="fw-bold mb-5 ">Add Trip</h5>
        <Form className="secondary">
            <p>Title</p>
          <Row className="mb-4">
            <Col md={12} lg={8} xl={9}>
              <Form.Control
                type="text"
                placeholder="Title"
                style={{
                    width:"1010px",
                  background: "rgba(195, 195, 195, 0.5)",
                  height: "40px",
                  color: "black",
                }}
                // name="title"
                // onChange={handleChangeFilm}
                // value={dataFilm?.title}
              />
            </Col>

           
          </Row>

          <p>County</p>
          <Form.Select aria-label="Default select example" style={{ background: "rgba(195, 195, 195, 0.5)"}}>
      <option>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </Form.Select>


          <p>Acomodation</p>
          <Row className="mb-4">
            <Col md={12} lg={8} xl={9}>
              <Form.Control
                type="text"
                placeholder="Title"
                style={{
                    width:"1010px",
                  background: "rgba(195, 195, 195, 0.5)",
                  height: "40px",
                  color: "black",
                }}
                // name="title"
                // onChange={handleChangeFilm}
                // value={dataFilm?.title}
              />
            </Col>

           
          </Row>

          <p>Transportasion</p>
          <Row className="mb-4">
            <Col md={12} lg={8} xl={9}>
              <Form.Control
                type="text"
                placeholder="Title"
                style={{
                    width:"1010px",
                  background: "rgba(195, 195, 195, 0.5)",
                  height: "40px",
                  color: "black",
                }}
                // name="title"
                // onChange={handleChangeFilm}
                // value={dataFilm?.title}
              />
            </Col>

           
          </Row>

          <p>Eat</p>
          <Row className="mb-4">
            <Col md={12} lg={8} xl={9}>
              <Form.Control
                type="text"
                placeholder="Title"
                style={{
                    width:"1010px",
                  background: "rgba(195, 195, 195, 0.5)",
                  height: "40px",
                  color: "black",
                }}
                // name="title"
                // onChange={handleChangeFilm}
                // value={dataFilm?.title}
              />
            </Col>
          </Row>


        <Form.Label>Pilih Tanggal</Form.Label>
          <div className="flex">
          <Form.Group controlId="datePicker">

        <Form.Control
        style={{width:"300px", background: "rgba(195, 195, 195, 0.5)"}}
        type="date"
        // name="date"
        //   value={selectedDate}
        //   onChange={handleDateChange}
        />
      </Form.Group>
      <Form.Label style={{marginLeft:"50px"}}>Day</Form.Label>

      <Form.Group controlId="datePicker">

<Form.Control
style={{width:"300px",marginLeft:"50px", background: "rgba(195, 195, 195, 0.5)"}}
type="date"
//   value={selectedDate}
//   onChange={handleDateChange}
/>
</Form.Group>
<Form.Label style={{marginLeft:"50px"}}>Night</Form.Label>
        </div>

        <Form.Label style={{marginTop:"10px"}}>Date Trip</Form.Label>
          <Form.Group controlId="datePicker">

        <Form.Control
        type="date"
        style={{ background: "rgba(195, 195, 195, 0.5)"}}
        //   value={selectedDate}
        //   onChange={handleDateChange}
        />
      </Form.Group>

      <Form.Group className="mb-4" controlId="formGridAddress1">
      <Form.Label>Price</Form.Label>
            <Form.Control
              style={{
                background: "rgba(195, 195, 195, 0.5)",
                height: "50px",
                color: "black",
              }}
              type="number"
              placeholder="price"
              // name="price"
            />
          </Form.Group>
          <Form.Group className="mb-4" controlId="formGridAddress1">
          <Form.Label>Quota</Form.Label>
            <Form.Control
              style={{
                background: "rgba(195, 195, 195, 0.5)",
                height: "50px",
                color: "black",
              }}
              type="number"
              placeholder="quota"
              // name="quota"
            />
          </Form.Group>

          <Form.Label>Descripton</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Description"
            style={{
              background: "rgba(196, 196, 196, 0.5)",
              marginBottom: "10px",
              resize: "none",
              height: "177px",
              color: "black",
              width:"100%",
            }}
            // name="description"
          />
          <Form.Label>Image</Form.Label>
<Col md={12} lg={4} xl={3}>
              <label
                htmlFor="thumbnailFilm"
                style={{
                  background: "rgba(196, 196, 196, 0.5)",
                  // width: "350px",
                  // height: "50px",
                  padding: "8px 40px 8px 40px",
                  color: "yellow",
                  borderRadius: "6px",
                  border: "1px solid white",
                  fontSize: "14px",
                  fontWeight: "bold",
                  width:"330px",

                }}>
                Attach Here
                <i
                  style={{
                    color: "#FFAF00",
                    fontSize: "20px",
                    marginLeft: "8px",
                    
                  }}
                />
              </label>
              <input
                type="file"
                // name="image"
                // onChange={handleChangeFilm}
                id="thumbnailFilm"
                hidden
              />
            </Col>


        


         
          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <Button onClick={handleButtonClick}
              // type="submit"
              style={{
                width: "200px",
                height: "40px",
                // background: "yellow",
                background: "#FFAF00",

                border: "1px solid black",
                fontWeight: "bold",
              }}
              >
              Add Trip
            </Button>
          </div>
        </Form>
      </div>
      <Footer/>
        </>
    )
}
export default Addtrip