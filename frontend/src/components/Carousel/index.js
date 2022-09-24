import React, { useState } from 'react'
import { CarouselWrapper, CarouselCard, CarouselImage } from './CarouselElements';
// import SearchBar from '../SearchBar';
// import photo from '../../assets/images/banner2.jpg';
import photo from '../../assets/images/banner.jpg';
import { Carousel, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { SplashContainer } from '../Splash/SplashElements';
import '../../a'


// function Carousels() {
//   return (
//     <CarouselWrapper>
//         <CarouselCard>
//             <img src={photo} alt='banner'/>
//         </CarouselCard>
//         <SearchBar />
//     </CarouselWrapper>
//   )
// }

function ControlledCarousel() {

  return (
    <CarouselWrapper>

    <Carousel interval={2000}>
      <Carousel.Item width='100%'>
        <CarouselImage
          // className="d-block w-100"
          src={photo}
          alt="First slide"
          />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={photo}
          alt="Third slide"
          />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  </CarouselWrapper>
  );
}

export default ControlledCarousel;