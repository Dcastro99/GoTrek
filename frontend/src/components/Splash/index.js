import React from 'react'
import { SplashContainer } from './SplashElements';
import Carousel from '../Carousel';
import TrailCards from '../TrailCards';
import Media from '../Media';
import BrowseCategory from '../BrowseCategory';


function Splash() {

  return (
    <SplashContainer>
      <Carousel />
      <TrailCards />
      <Media />
      <BrowseCategory />
    </SplashContainer>
  )
}

export default Splash;
