import React from 'react'
import { CarouselWrapper, CarouselCard } from './CarouselElements';
import SearchBar from '../SearchBar';
import photo from '../../assets/images/banner2.jpg';

function Carousel() {
  return (
    <CarouselWrapper>
        <CarouselCard>
            <img src={photo} alt='banner'/>
        </CarouselCard>
        <SearchBar />
    </CarouselWrapper>
  )
}

export default Carousel;