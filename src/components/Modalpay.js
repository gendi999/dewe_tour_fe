import { Modal, Button } from 'react-bootstrap';
const Modalpay = ({ show, onHide }) => {
    return(
        <Modal show={show} onHide={onHide} centered>
            <div style={{width:"500px",backgroundColor:"white"}}>

            <p style={{color:"black",fontSize:"20px",textAlign:"center",width:"500px",marginRight:"700px",height:"73px"}}>Your payment will be confirmed within 1 x 24 hours
To see orders click Here thank you</p>
            </div>

        </Modal>
    )
}
export default Modalpay