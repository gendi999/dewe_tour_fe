
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Vector1 from "../images/Rectangle1.png"
import Props from "./Props";

function Trip() {
    const Tour = {
        TR : {
          tr1: {
            id:1,
            images:"Rectangle1",
            title:"6D/4N Fun Tessie",
            negara:"Australia",
            idr:"12.398.00",
            quote:"12/15",
          },
          tr2: {
            id:2,
            title:"6D/4N Exciting Summer in ...",
            images:"Rectangle2",
            negara:"South Korea",
            idr:"12.398.00",
            quote:"10/15"
          },
          tr3: {
            id:3,
            title:"4D/3N Overland Jakarta B...",
            images:"Rectangle3",
            negara:"Japan",
            idr:"12.398.00",
            quote:"15/15"
          },
          tr4: {
            id:4,
            title:"4D/3N Overland Jakarta B...",
            images:"Rectangle4",
            negara:"Indonesia",
            idr:"12.398.00",
            quote:"11/15"
          },
          tr5: {
            id:5,
            title:"4D/3N Overland Jakarta B...",
            images:"Rectangle5",
            negara:"Indonesia",
            idr:"12.398.00",
            quote:"14/15"
          },
          tr6: {
            id:6,
            title:"4D/3N Overland Jakarta B...",
            images:"Rectangle6",
            negara:"Japan",
            idr:"12.398.00",
            quote:"14/15"
          },
          
        }
        
      }
  return (
    <div style={{background:"#E5E5E5"}}>
    <div className='flex' >
    <h1 style={{fontFamily:"avenir",fontWeight:"bold",marginTop:"30px",marginLeft:"100px"}}>Income Trip</h1>
    <Link to ="/Addtrip">
    
    <Button style={{
      marginLeft:"730px",
      marginTop:"50px",
      width: "213px",
      height: "50px",
      left: "1016px",
      top: "1284px",
      background:" #FFAF00",
      borderRadius:"5px"
    
    }}>Add Trip</Button>
    </Link>
    </div>
    <div style={{marginLeft:"100px"}}>
    <Props className="text-decoration-none" value={Tour}/>
    </div>
</div>
  );
}

export default Trip;