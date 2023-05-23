import Minus from "../images/Minus.png"
import Plus from "../images/Plus.png"
import { Link, useNavigate } from 'react-router-dom';
import ihotel from "../images/ihotel.png"
import ilion from "../images/ilion.png"
import ieat from "../images/ieat.png"
import itime from "../images/itime.png"
import Footer from '../components/Footer'
import icalendar from "../images/icalendar.png"
import { Button, Carousel } from "react-bootstrap";
import { useState } from "react";
import { useParams } from "react-router-dom";
import withReactContent from 'sweetalert2-react-content'
import Swal from "sweetalert2";
function Detail() {
  const [isAdmin] = useState(localStorage.getItem('isAdmin'));

  const [jumlahProduk, setJumlahProduk] = useState(1);
    const [index, setIndex] = useState(0); //untuk carausel
    
    //Alert
    const MySwal = withReactContent(Swal);
    let navigate = useNavigate();
    const handleButtonClick = () => {
    MySwal.fire({
    title: <strong>Add Book Success</strong>,
    html: <i>You clicked the button!</i>,
    icon: 'success'
    })
        navigate("/Pay");
  };


    const handleSelect = (selectedIndex) => {
      setIndex(selectedIndex);
    };

    const {id} = useParams();
    const detailTr = [
      {
        id:1,
        title:" 6D/4N Fun Tassie Vacation + Sydney",
        negara:"Australia",
        Accommodation:"Hotel 4 Nights",
        Transportation:"Qatar Airways",
        imag:"Rectangle1",
        image:"Rectangle2",
        images:"Rectangle3",
        Eat:"Liternary",
        Duration:"4 Day 6 Night",
        Datetrip:"26 Agustus 2020",
        Idr:12398000,
        Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        
      },
            {
        id:2,
        title:" 6D/4N Exciting Summer in ...",
        negara:"Amerika",
        Accommodation:"Hotel 5 Nights",
        Transportation:"indonesia Airways",
        imag:"Rectangle4",
        image:"Rectangle5",
        images:"Rectangle6",
        Eat:"Ternari",
        Duration:"4 Day 6 Night",
        Datetrip:"2 Jan 2023",
        Idr:22398000,
        Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        
      },
            {
        id:3,
        title:"8D/6N Wonderful Autum ...",
        negara:"Japanese",
        Accommodation:"Hotel 4 Nights",
        Transportation:"Qatar Airways",
        imag:"Rectangle1",
        image:"Rectangle4",
        images:"Rectangle5",
        Eat:"Liternary",
        Duration:"4 Day 6 Night",
        Datetrip:"26 Agustus 2020",
        Idr:100398000,
        Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        
      },
      {
        id:4,
        title:"4D/3N Overland Jakarta B...",
        negara:"Indonesias",
        Accommodation:"Hotel 4 Nights",
        Transportation:"Qatar Airways",
        imag:"Rectangle3",
        image:"Rectangle2",
        images:"Rectangle1",
        Eat:"Liternary",
        Duration:"4 Day 6 Night",
        Datetrip:"26 Agustus 2020",
        Idr:1003980,
        Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        
      },
      {
        id:5,
        title:"4D/3N Labuan Bajo Delight",
        negara:"Indonesias",
        Accommodation:"Hotel 4 Nights",
        Transportation:"Qatar Airways",
        imag:"Rectangle1",
        image:"Rectangle6",
        images:"Rectangle3",
        Eat:"Liternary",
        Duration:"4 Day 6 Night",
        Datetrip:"26 Agustus 2020",
        Idr:100398000,
        Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        
      },
      {
        id:6,
        title:"5D/4N Magic Tokyo Fun",
        negara:"japan",
        Accommodation:"Hotel 4 Nights",
        Transportation:"Rusia Airways",
        imag:"Rectangle2",
        image:"Rectangle5",
        images:"Rectangle4",
        Eat:"Liternary apa nih",
        Duration:"4 Day 6 Night",
        Datetrip:"26 Agustus 2020",
        Idr:10039800,
        Description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.  It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        
      },
    ] 
    const tambahJumlahProduk = () => {
      setJumlahProduk(jumlahProduk + 1);
    };
    const kurangiJumlahProduk = () => {
      if (jumlahProduk > 1) {
        setJumlahProduk(jumlahProduk - 1);
      }
    };
    
      const selectedTr = detailTr.find((tour) => tour.id === parseInt(id));
      const totalHarga = selectedTr ? selectedTr.Idr * jumlahProduk : 0;
      return(
        <>
        <h1 style={{ marginLeft:"150px", marginTop:"50px",fontFamily:"Avenir",fontWeight:"bolder" }}>{selectedTr.title} </h1>
        <h1 style={{ marginLeft:"150px", marginTop:"10px",size:"24px", color:"#A8A8A8"}}>{selectedTr.negara}</h1>
        
        <Carousel activeIndex={index} onSelect={handleSelect} style={{marginTop:"50px",width:"80%", marginLeft:"150px", }}>
      <Carousel.Item>
        <img
        style={{height:"400px"}}
          className="d-block w-100"
          src={require(`../images/Card/${selectedTr.images}.png`)}
          alt="First slide"
        />
        <div style={{marginTop:"20px"}}>
    <img src={require(`../images/Card/${selectedTr.images}.png`)} alt="gambar"></img>
    <img style={{marginLeft:"45px"}} src={require(`../images/Card/${selectedTr.imag}.png`)} alt="gambar"></img>
    <img style={{marginLeft:"45px"}} src={require(`../images/Card/${selectedTr.image}.png`)} alt="gambar"></img>
    </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
                style={{height:"400px"}}
          className="d-block w-100"
          src={require(`../images/Card/${selectedTr.imag}.png`)}
          alt="Second slide"
        />
        <div style={{marginTop:"20px"}}>
    <img src={require(`../images/Card/${selectedTr.images}.png`)} alt="gambar"></img>
    <img style={{marginLeft:"45px"}} src={require(`../images/Card/${selectedTr.imag}.png`)} alt="gambar"></img>
    <img style={{marginLeft:"45px"}} src={require(`../images/Card/${selectedTr.image}.png`)} alt="gambar"></img>
    </div>

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{height:"400px"}}
          className="d-block w-100" 
          src={require(`../images/Card/${selectedTr.image}.png`)}
          alt="Third slide"
        />

<div style={{marginTop:"20px"}}>
    <img src={require(`../images/Card/${selectedTr.images}.png`)} alt="gambar"></img>
    <img style={{marginLeft:"45px"}} src={require(`../images/Card/${selectedTr.image}.png`)} alt="gambar"></img>
    <img style={{marginLeft:"45px"}} src={require(`../images/Card/${selectedTr.imag}.png`)} alt="gambar"></img>
    </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <h1 style={{ marginLeft:"150px", marginTop:"50px" }}>Information Trip</h1>
    <div className="flex" style={{marginLeft:"150px"}}>
      <p style={{color:"#A8A8A8"}}>acomodation</p>
      <p style={{marginLeft:"120px", color:"#A8A8A8"}}>Tranformation</p>
      <p style={{marginLeft:"120px",color:"#A8A8A8"}}>Eat</p>
      <p style={{marginLeft:"120px",color:"#A8A8A8"}}>Time Date</p>
      <p style={{marginLeft:"150px",color:"#A8A8A8"}}>Calendar</p>

    </div>

    <div className="flex" >
      <div className="flex">
      <img style={{height:"30px",marginLeft:"150px"}} src={ihotel}/>
      <h3 style={{fontSize:"20px", fontWeight:"bold", height: "33px",fontFamily: 'Avenir',alignItems:"center"}}> {selectedTr.Accommodation}</h3>
      </div>
      <div className="flex">
      <img style={{height:"30px",marginLeft:"40px"}} src={ilion}/>
        <h3 style={{fontSize:"20px", fontWeight:"bold", height: "33px",fontFamily: 'Avenir',alignItems:"center"}} >{selectedTr.Transportation}</h3>
      </div>
      <div className="flex">
      <img style={{height:"30px",marginLeft:"50px"}} src={ieat}></img>
      <h3 style={{fontSize:"20px", fontWeight:"bold", height: "33px",fontFamily: 'Avenir',alignItems:"center"}}>{selectedTr.Eat}</h3>
      </div>
      <div className="flex">
      <img style={{height:"30px",marginLeft:"50px"}} src={icalendar}></img>
      <h3 style={{fontSize:"20px", fontWeight:"bold", height: "33px",fontFamily: 'Avenir',alignItems:"center"}}>{selectedTr.Datetrip}</h3>
      </div>
      <div className="flex">
      <img style={{height:"30px",marginLeft:"50px"}} src={itime}></img>
      <h3 style={{fontSize:"20px", fontWeight:"bold", height: "33px",fontFamily: 'Avenir',alignItems:"center"}}> {selectedTr.Duration}</h3>
      </div>


    </div>
    <h1 style={{marginLeft:"150px"}}>Description</h1>
    <p style={{marginLeft:"150px"}}>{selectedTr.Description}</p>

    <div className="flex" style={{marginLeft:"150px"}}>
    <h1 style={{color:"#FFAF00" , fontWeight:"bold", height: "33px",fontFamily: 'Avenir'}}>{selectedTr.Idr}</h1>
    <h1>/Person</h1>
    <Button style={{marginLeft:"600px",background:"#e5e5e5",border:"none",height:"50px",fontWeight:"bold",fontFamily:"avenir"}}  onClick={kurangiJumlahProduk}>
      <img style={{height:"50px"}} src={Minus}/>
      </Button> 
    <h2 style={{marginTop:"8px"}}> {jumlahProduk}</h2>
    <Button style={{marginLeft:"0px",background:"#e5e5e5",height:"50px",border:"none"}}  onClick={tambahJumlahProduk}>
    <img style={{height:"50px"}} src={Plus}/>
    </Button>
    </div>

    <div style={{margin: "150px", marginTop:"0",marginBottom:"0"}}>
    <hr style={{ borderTop: "2px solid black" }} />
    </div>

    <div className="flex">
      <h1 style={{marginLeft:"150px"}}>Total</h1>
      {/* <h2>Total Harga: {totalHarga}</h2> */}
      <h1 style={{color:"#FFAF00",marginLeft:"650px", fontWeight:"bold", height: "33px",fontFamily: 'Avenir'}}>IDR. {totalHarga}</h1>
    </div>

    <div style={{margin: "150px", marginTop:"0",marginBottom:"0"}}>
    <hr style={{ borderTop: "2px solid black" }} />
    </div>
{ isAdmin ? (

  <Button onClick={handleButtonClick} style={{
    marginLeft:"1000px",
    width: "213px",
    height: "50px",
    left: "1016px",
    top: "1284px",
    background:" #FFAF00",
    borderRadius:"5px"
    
  }}>Book</Button>


  ) : (
    <div></div>
  )
}

<div style={{paddingTop:"100px"}}>
          <Footer/>

            </div>

        
        </>

    )
}
export default Detail