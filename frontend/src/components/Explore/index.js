import React from 'react'
import { ExploreContainer, ExploreWrapper } from './ExploreElements';
// import Map from '../Map'
import GMap from '../GMap'


function Explore() {
  return (
    <ExploreContainer>
        <ExploreWrapper>
          <GMap />  
      </ExploreWrapper>
    </ExploreContainer>
  )
}

export default Explore;