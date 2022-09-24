import React from 'react'
import { SplashContainer, CarouselContainer, TrailsNearbyContainer } from './SplashElements';
import Carousel from '../Carousel';
import TrailCards from '../TrailCards';

function Splash() {

  return (
    <SplashContainer>
      <CarouselContainer>
        <Carousel />
      </CarouselContainer>
      <TrailsNearbyContainer>
        <TrailCards />
      </TrailsNearbyContainer>
    </SplashContainer>
  )
}

export default Splash;
