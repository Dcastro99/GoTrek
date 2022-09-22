import React, { useState } from 'react'

import { SplashContainer, CarouselContainer, TrailsNearbyContainer } from './SplashElements';

function Splash() {
  
  return (
    <SplashContainer>
      <CarouselContainer>
        <h2>Carousel</h2>
      </CarouselContainer>
      <TrailsNearbyContainer>
        <h2>Trails Nearby</h2>
      </TrailsNearbyContainer>
    </SplashContainer>
  )
}

export default Splash;