import React from 'react'
import { CarouselMainContainer, CarouselWrapper, CarouselImage } from './CarouselElements';
import SearchBar from '../SearchBar';
import banner1 from '../../assets/images/carousel/banner.jpg';
import banner2 from '../../assets/images/carousel/banner2.png';
import banner3 from '../../assets/images/carousel/banner3.png';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../assets/styles/Carousel.css';


function ControlledCarousel() {

  return (
    <CarouselMainContainer>
      <CarouselWrapper>
        <Carousel interval={4000}>
          {/* <Carousel.Item className='carouselItem'> */}
          <Carousel.Item>
            <CarouselImage
              className="d-block w-100"
              src={banner1}
              alt="First slide"
              />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage
              className="d-block w-100"
              src={banner2}
              alt="First slide"
              />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <CarouselImage
              className="d-block w-100"
              src={banner3}
              alt="First slide"
              />
            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          </Carousel>
        <SearchBar />
        </CarouselWrapper>
    </CarouselMainContainer>
  );
}

export default ControlledCarousel;






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
