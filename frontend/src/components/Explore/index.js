import '../../assets/styles/cards.css';
import React from 'react'
import Map from '../Map';
import { ExploreContainer, ExploreWrapper, MapContainer, CardContainer, Card, CardWrapper, FilterOptionsWrapper, FilterOptions, TopSectionContainer, FilterButton } from './ExploreElements';
import { TrailCardsWrapper, TrailRowContainer, TrailCard, CardFront, CardBack, TrailImageContainer, TrailInformation } from '../TrailCards/TrailCardsElements';
import SearchBar from '../SearchBar';
import photo from '../../assets/images/hike.jpg'
import data from '../../assets/data/test-data.json';



function Explore(props) {
 
  const trailData = data.slice(0, 3);
 
  return (
    <ExploreContainer>
        <TopSectionContainer>
          <SearchBar />
          <FilterOptionsWrapper>
            <FilterOptions>
              <FilterButton>
                  Distance
              </FilterButton>
              <FilterButton>
                  Difficulty
              </FilterButton>
              <FilterButton>
                  Length
              </FilterButton>
              <FilterButton>
                  Features
              </FilterButton>
            </FilterOptions>
          </FilterOptionsWrapper>
        </TopSectionContainer>
        <ExploreWrapper>
        {/* <CardContainer>
          <CardWrapper>
          <TrailCardsWrapper>
                <TrailRowContainer>
                    {trailData.map(trail => (
                        <TrailCard className='card'>
                            <CardFront className='card-side front'>
                                <TrailImageContainer>
                                    <img src={photo} alt='hiking' />
                                    <h3>{trail.name}</h3>
                                </TrailImageContainer>
                            </CardFront>
                            <CardBack className='card-side back'>
                                <TrailInformation>
                                    <h5>Length: {trailData.length}</h5>
                                    <h5>Elevation: {trail.elevation.Gain}</h5>
                                    <p>Features: {trail.features}</p>
                                </TrailInformation>
                            </CardBack>
                        </TrailCard>
                    ))};
                </TrailRowContainer>
            </TrailCardsWrapper>
          </CardWrapper>
        </CardContainer> */}
        <MapContainer>
          <Map />
        </MapContainer>
      </ExploreWrapper>
  </ExploreContainer>
  );
}

export default Explore;
