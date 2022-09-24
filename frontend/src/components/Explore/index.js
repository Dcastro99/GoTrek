import React from 'react'
import { ExploreContainer, ExploreWrapper } from './ExploreElements';
import Map from '../Map'

function Explore() {
  return (
    <ExploreContainer>
        <ExploreWrapper>
          <Map />
            {/* <h1>Explore Page</h1> */}
        </ExploreWrapper>
    </ExploreContainer>
  )
}

export default Explore;