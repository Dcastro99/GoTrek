<<<<<<< HEAD
import React from "react";
import { ExploreContainer, ExploreWrapper } from "./ExploreElements";
import { ChakraProvider, theme } from "@chakra-ui/react";
import GMap from "../GMap";
=======
import React from 'react'
import { ExploreContainer, ExploreWrapper } from './ExploreElements';
// import Map from '../Map'
import ReactMapGl from '../Map';
>>>>>>> dev

function Explore() {
  return (
    <ExploreContainer>
<<<<<<< HEAD
      <ExploreWrapper>
        <ChakraProvider theme={theme}>
          <GMap />
        </ChakraProvider>
      </ExploreWrapper>
=======
        <ExploreWrapper>
        {/* <ReactMap /> */}
           <ReactMapGl />
            {/* <h1>Explore Page</h1> */}
        </ExploreWrapper>
>>>>>>> dev
    </ExploreContainer>
  );
}

export default Explore;
