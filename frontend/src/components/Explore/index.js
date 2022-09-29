import React from 'react'
import { ExploreContainer, ExploreWrapper, CardContainer, Card, CardWrapper, FilterContainer, FilterNav } from './ExploreElements';
import SearchBar from '../SearchBar';
// import Map from '../Map'
import Map from '../Map';

function Explore() {
  return (
    <ExploreContainer>
            <FilterContainer>
                <SearchBar />
                <FilterNav>
                  <FilterNav>
                    <h3>Filter Nav</h3>
                  </FilterNav>
                </FilterNav>
            </FilterContainer>
        <ExploreWrapper>
            <CardContainer>
              <CardWrapper>
                <Card>
                  <h3>Name</h3>
                  <p>Information</p>
                </Card>
                <Card>
                  <h3>Name</h3>
                  <p>Information</p>
                </Card>
                <Card>
                  <h3>Name</h3>
                  <p>Information</p>
                </Card>
                <Card>
                  <h3>Name</h3>
                  <p>Information</p>
                </Card>
                
              </CardWrapper>
            </CardContainer>
            <Map />
        </ExploreWrapper>
    </ExploreContainer>
  );
}

export default Explore;
