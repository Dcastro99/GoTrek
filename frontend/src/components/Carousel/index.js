import React from 'react'
import { CarouselWrapper, CarouselCard } from './CarouselElements';
import photo from '../../assets/images/banner2.jpg';

function Carousel() {
  return (
    <CarouselWrapper>
        <CarouselCard>
            <img src={photo} alt='banner'/>
        </CarouselCard>
    </CarouselWrapper>
  )
}

export default Carousel;