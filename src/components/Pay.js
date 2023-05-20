import Icon from "../images/Icon.png"
import bukti from "../images/bukti.png"
import { useState } from 'react';

import "react-bootstrap";
import Footer from '../components/Footer'
import Modalpay from '../components/Modalpay'
import Table from "react-bootstrap/Table";
import Dropdown from "react-bootstrap/Dropdown";
import { Button } from "react-bootstrap";
function Pay() {
    const [showModal, setShowModal] = useState(false);

    const handleModalShow = () => {
      setShowModal(true);
    };
  
    const handleModalHide = () => {
      setShowModal(false);
    };
    return(
        <>
            <div
            style={{ background:"E5E5E5",  height: "90.5vh", margin:"20px"}}
              className=" d-flex align-items-center justify-content-center">
                <div
          style={{
            background: "white",
            padding: "25px",
            borderRadius: "5px",
            width: "60rem",
            height:"500px",
            borderColor:"red",
            border:" 1px solid"
            
          }}>
            <div className="flex">
                <img src={Icon}></img>
                <h1 style={{marginLeft:"490px",fontSize:"36px", weight:"bolder"}}>Boking</h1>
            </div>
            <div className="flex">
                <h1 style={{ marginLeft:"630px",height:"29px",fontSize:"20px",color:"#959595"}}>Saturday, 22 Juy 2020</h1>

            </div>
            <div className="flex">
                <h3 style={{fontSize:"25px",fontFamily:"Avenir",fontWeight:"bold"}}>6D/4N Fun Tassie Vacation</h3>
                <h4 style={{marginLeft:"30px", fontSize:"20px",marginTop:"5px",fontFamily:"Avenir",fontWeight:"bold"}}>Date Trip</h4>
                <h4 style={{marginLeft:"80px", fontSize:"20px", marginTop:"5px",fontFamily:"Avenir",fontWeight:"bold"}}>Duration</h4>
            </div>
            <div className="flex">
                <p style={{color:"#959595"}}>Australia</ p>
                <p style={{marginLeft:"240px",color:"#959595"}}>26 Agustus 2022</p>
                <p style={{marginLeft:"50px",color:"#959595"}}>6 Day 4 Night</p>
            <img style={{position:"absolute",marginLeft:"680px",border:"black 1px solid"}} src={bukti}></img>
            </div>
            <div className="flex">
                <p style={{color: "red", paddingTop:"10px",fontFamily:"Avenir",fontWeight:"bold"}}>Waiting Payment</p>
                <h4 style={{marginLeft:"200px",  fontSize:"20px",fontFamily:"Avenir",fontWeight:"bold"}}>Acomadation</h4>
                <h4 style={{marginLeft:"50px",  fontSize:"20px",fontFamily:"Avenir",fontWeight:"bold"}}>Transportasion</h4>
            </div>

            <div className="flex">
                <p style={{marginLeft:"300px",color:"#959595"}}>Hotel 4 Nights</p>
                <p style={{marginLeft:"60px",color:"#959595"}}>Qatar Airways</p>
            </div>
            <div className="flex" >
                <p >No</p>
                <p style={{marginLeft:"40px",fontWeight:"bold"}}>Fullname</p>
                <p style={{marginLeft:"40px",fontWeight:"bold"}}>Genderr</p>
                <p style={{marginLeft:"40px",fontWeight:"bold"}}>Phone</p>
            </div>
            <div style={{ marginTop:"0",marginBottom:"0" }}>
                <hr style={{ borderTop: "3px solid black" }} />
            </div>
            <div className="flex">
                <p>1</p>
                <p style={{marginLeft:"30px",color:"#959595"}}>Gendi Telamdika</p>
                <p  style={{marginLeft:"30px",color:"#959595"}}>Man</p>
                <p  style={{marginLeft:"30px",color:"#959595"}}>0812xxxxxx</p>
                <h3  style={{marginLeft:"200px",fontWeight:"bold"}}>Qty</h3>
                <h3  style={{marginLeft:"50px",fontWeight:"bold"}}>:</h3>
                <h3  style={{marginLeft:"40px",fontWeight:"bold"}}>1</h3>
            </div>
            <div style={{ marginTop:"0",marginBottom:"0" }}>
                <hr style={{ borderTop: "3px solid black" }} />
            </div>
            <div className="flex">
                <h3 style={{marginLeft:"530px",fontWeight:"bold"}}>TOTAL</h3>
                <h3 style={{marginLeft:"10px",fontWeight:"bold"}}>:</h3>
                <h3  style={{marginLeft:"30px",fontWeight:"bold",color:"red"}}>IDR.12.000.000</h3>
            </div>
            <div>
            <Button onClick={handleModalShow} style={{
      marginLeft:"730px",
      marginTop:"50px",
      width: "213px",
      height: "50px",
      left: "1016px",
      top: "1284px",
      background:" #FFAF00",
      borderRadius:"5px"
    
    }}>PAY</Button>
            </div>
            <Modalpay show={showModal} onHide={handleModalHide}/>
       



            </div>

          </div>
            <div style={{paddingTop:"100px"}}>
          <Footer/>
        </div>
        </>
    )
}
export default Pay