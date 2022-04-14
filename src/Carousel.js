import React from "react";
import { Carousel } from "react-bootstrap";
import './Carousel.css';

import se from '../src/images/XE.jpeg';
import XE from '../src/images/XE.jpeg';
import JEEP from '../src/images/JEEP.jpg';

const CarouselIMG =()=>{
    return(
        <>
        <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100 mx-auto"
      src={JEEP}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>JEEP COMPASS </h3>
      <h2>'Lead the Way'</h2>
      <h5>Rs.17.79 - 29.34 Lakh*</h5>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 mx-auto"
      src={se}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h4>The New</h4>
      <h3>iPhone SE</h3>
      <h4>Love the power. Love the price</h4>
      <a href="roy">Learn more:-</a>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100 mx-auto"
      src={XE}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Looking for entry level premium seedan ?</h3>
      <h2>JAGUAR XE</h2>
      <h5>Rs.46.64 - 48.50 Lakh*</h5>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </>
        );
};

export default CarouselIMG;


