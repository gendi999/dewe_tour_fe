// import The from "../image/thewitcher.png"
import Vector1 from "../images/Vector1.png"
import Vector2 from "../images/Vector2.png"
import Vector3 from "../images/Vector3.png"
import Vector4 from "../images/Vector4.png"
import Cards from './cards';
import Props from "./Props";
import Footer from '../components/Footer'


import { Container, Image, InputGroup, Stack } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
// import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import {  Link } from 'react-router-dom';

// import ExampleForm from "/hooks/ExampleForm";
function Home(){
  const Tour = {
    TR : {
      tr1: {
        id:1,
        images:"Rectangle1",
        title:"6D/4N Fun Tessie",
        negara:"Australia",
        idr:"12.398.00",
        quote:"12/15"
      },
      tr2: {
        id:2,
        title:"6D/4N Exciting Summer in ...",
        images:"Rectangle2",
        negara:"Amerika",
        idr:"12.398.00",
        quote:"12/15"
      },
      tr3: {
        id:3,
        title:"4D/3N Overland Jakarta B...",
        images:"Rectangle3",
        negara:"Australia",
        idr:"12.398.00",
        quote:"12/15"
      },
      tr4: {
        id:4,
        title:"4D/3N Overland Jakarta B...",
        images:"Rectangle4",
        negara:"Australia",
        idr:"12.398.00",
        quote:"12/15"
      },
      tr5: {
        id:5,
        title:"4D/3N Overland Jakarta B...",
        images:"Rectangle5",
        negara:"Australia",
        idr:"12.398.00",
        quote:"12/15"
      },
      tr6: {
        id:6,
        title:"4D/3N Overland Jakarta B...",
        images:"Rectangle6",
        negara:"Australia",
        idr:"12.398.00",
        quote:"12/15",
      },
      
    }
    
  }

    return(
      <div className="bg" >
        <div className="the">
          <h1 style={{fontSize:"100px", color:"white"}}>Explore</h1>
          <p style={{fontSize:"50px", color:"white"}}>Your Amazing City Together</p>
          <div>

          </div>
          {/* <Stack direction="horizontal"> */}

          
          <p>Find great place to holiday</p>
      <Button style={{position:"absolute", marginLeft:"900px"}} variant="warning">Search</Button>
      <Form.Control style={{width:"900px"}} className="" type="search" placeholder="Add your item here..." />
        </div>
        <img className="kontol" style={{position:"fixed",position:"absolute", zIndex:-1,top:"0", width:"100%"}}   src={require( "../images/pantai.png")} alt="gambar"></img>

<div>
     <div className="card-group" >
              <Cards icon={Vector2} title="Best Price Guarantee"/>
              <Cards icon={Vector3} title="Travellers Love Us"/>
              <Cards icon={Vector1} title="Best Travel Agent"/>
              <Cards icon={Vector4} title="Our Dedicated Support"/>
              <div style={{marginLeft:"0px",padding:"50px"}}>
                <h1 style={{fontWeight:"bold",textAlign:"center"}}>Group Tour</h1>
          <Props className="text-decoration-none" value={Tour}/>

              </div>
            </div>
            <div style={{paddingTop:"1600px"}}>
          <Footer style={{marginTop:"800px"}}/>

            </div>
            </div>

          {/* </div> */}
    </div>
    )
}
export default Home