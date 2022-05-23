import React,{ useState ,useEffect} from 'react'
import { Navbar, Container, Offcanvas, Nav, Carousel, Form, FormControl, Button, Card } from 'react-bootstrap';
import { Link, Router } from 'react-router-dom';



export default function ControlledCarousel() {
    const [index, setIndex] = useState(0);
  
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
   
    return (
   
     
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/NYPg8J2/infocast2.png"
            
            alt="First slide"
          />
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/8zZS8dQ/infocast1.png"
            alt="Second slide"
          />
  
          <Carousel.Caption>
           
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Kh4PbZT/infocast3.png"
            alt="Third slide"
          />
  
          <Carousel.Caption>
         
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
 