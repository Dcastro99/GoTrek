import React from 'react'
import { ExploreContainer, ExploreWrapper } from './ExploreElements';
import { ChakraProvider, theme } from '@chakra-ui/react'
import Map from '../GMap'


function Explore() {
  return (
    <ExploreContainer>
        <ExploreWrapper>
        <ChakraProvider theme={theme}>
            <Map />
        </ChakraProvider>  
      </ExploreWrapper>
    </ExploreContainer>
  )
}

export default Explore;