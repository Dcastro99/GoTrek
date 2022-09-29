import React from 'react'
import { ExploreContainer, ExploreWrapper } from './ExploreElements';
// import Map from '../Map'
import ReactMapGl from '../Map';

function Explore() {
  return (
    <ExploreContainer>
        <ExploreWrapper>
        {/* <ReactMap /> */}
           <ReactMapGl />
            {/* <h1>Explore Page</h1> */}
        </ExploreWrapper>
    </ExploreContainer>
  );
}

export default Explore;
