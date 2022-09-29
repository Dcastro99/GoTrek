import React, { useState, useEffect } from 'react'
import { TrailMainContainer, TrailBanner, TrailWrapper, TrailImage, TrailDescriptionContainer, TrailDescription, TrailLengthContainer, TrailLengthDetail, TrailWeatherContainer, TrailWeatherDetails, SearchBarContainer, SearchBarForm, Input, WriteReviewContainer, WriteReview, TrailSection, TrailCardContainer, TrailCardsWrapper, TrailCards, TrailMap, TrailSectionColumn, NearbyTrailsContainer, DaysList, Row, FeatureIcon, Column, Bar, LinkButton } from './SingleTrailElements';
// import photo from '../../assets/images/banner2.jpg';
import Weather from '../../components/Weather/src/Weather';
import Map from '../Map/index';
import { TrailCard, CardFront, TrailImageContainer, CardBack, TrailInformation, InformationColumn, InformationRow } from '../TrailCards/TrailCardsElements';
import photo2 from '../../assets/images/hike.jpg';
import trailData from '../../assets/data/test-data.json';
import Review from '../Reviews/index';

import { Link, useParams, useLocation } from 'react-router-dom';

import '../../assets/styles/trailDetail.css';



function SingleTrail(props) {

  const randomTrails = [];
  let x = {}
  for(let i = 0; i < 4; i++) {
      x = (Math.floor(Math.random() * trailData.length));
      randomTrails.push(trailData[x]);
  }

  const { handle } = useParams();
  const location = useLocation();
  const [locationState, setLocationState] = useState({from:'', trail: {}});
  
  useEffect(() => {
    console.log('location from', location);
    console.log('from: ', location.state.trail);
  }, [location]);
  return (

    <>
      <SearchBarContainer>
        <SearchBarForm>
          <Input id='search' type='text' class='input' placeholder='Search' />
        </SearchBarForm>
        {/* <Button>search</Button> */}
      </SearchBarContainer>


      <TrailMainContainer>
        <TrailWrapper>
          <TrailBanner>
            <div className='banner'></div>
          </TrailBanner>

          <TrailSection>
            <TrailSectionColumn>
              <TrailDescriptionContainer>
                <TrailDescription>
                  <h3>{location.state.trail.name}</h3>
                  <p>{location.state.trail.description}</p>
                </TrailDescription>
              </TrailDescriptionContainer>
                <Bar />
              <TrailLengthContainer>
                <Row>
                  <TrailLengthDetail>
                    <h3>Length</h3>
                    <p>{location.state.trail.length}</p>
                  </TrailLengthDetail>
                  <TrailLengthDetail>
                    <h3>Elevation Gain</h3>
                    <p>{location.state.trail.elevation.gain}</p>
                  </TrailLengthDetail>

                  <TrailLengthDetail>
                    <h3>Peak</h3>
                    <p>{location.state.trail.elevation.highestPoint}</p>
                  </TrailLengthDetail>
                </Row>
                <Row>
                  <Column>
                    <h3>Features</h3>
                    <Row>
                      {location.state.trail.features.map(feature => (
                        <FeatureIcon>
                          {feature} 
                        </FeatureIcon>
                      ))}
                    </Row>
                  </Column>
                </Row>
              </TrailLengthContainer>
              <Bar />

              <TrailWeatherContainer>
                <TrailWeatherDetails>
                  <DaysList>
                    < Weather />
                  </DaysList>
                </TrailWeatherDetails>
              </TrailWeatherContainer>

              <WriteReviewContainer>
                <WriteReview>
                  <Reviews auth0={props.auth0} />
                </WriteReview>
              </WriteReviewContainer>

            </TrailSectionColumn>

             <TrailCardContainer>
              <TrailCardsWrapper>
                <TrailCards>
                  <TrailMap>
                    < Map />
                    {/* <ViewMapLink to='/map'>View Map</ViewMapLink> */}
                  </TrailMap>
                  <NearbyTrailsContainer>
                    <h3>Nearby Trails</h3>
                    {randomTrails.map(trail => (
                      <TrailCard className='card'>
                        <CardFront className='card-side front'>
                          <TrailImageContainer>
                            <img src={photo2} alt='hiking' />
                            <h3>{trail.name}</h3>
                          </TrailImageContainer>
                        </CardFront>
                        <CardBack className='card-side back'>
                          <TrailInformation>
                            <InformationRow>
                              <InformationColumn>
                                <h5>Length: {trail.length} </h5>
                                <h5>Gain: {trail.elevation.highestPoint}</h5>
                                <h5>Peak: {trail.elevation.gain}</h5>
                              </InformationColumn>
                            </InformationRow>
                            <InformationRow>
                              <InformationColumn>
                                <h5>FeatureIcons:</h5>
                                <p>{trail.features}</p>
                                <LinkButton
                                    to='/trail/{trail.name}' 
                                    state={{
                                        from: 'details',
                                        trail: trail,
                                }}>Go</LinkButton>
                              </InformationColumn>
                            </InformationRow>
                          </TrailInformation>
                        </CardBack>
                      </TrailCard>
                    ))};
                    
                  </NearbyTrailsContainer>
                </TrailCards>
              </TrailCardsWrapper>
            </TrailCardContainer>
          </TrailSection>

        </TrailWrapper>
      </TrailMainContainer>


    </>
  )
}

export default SingleTrail;



{/* <TrailCard className='card'>
                      <CardFront className='card-side front'>
                        <TrailImageContainer>
                          <img src={photo2} alt='hiking' />
                          <h3>Title</h3>
                        </TrailImageContainer>
                      </CardFront>
                      <CardBack className='card-side back'>
                        <TrailInformation>
                          <h5>Length: </h5>
                          <h5>Elevation:</h5>
                          <p>FeatureIcons:</p>
                        </TrailInformation>
                      </CardBack>
                    </TrailCard>
                    <TrailCard className='card'>
                      <CardFront className='card-side front'>
                        <TrailImageContainer>
                          <img src={photo2} alt='hiking' />
                          <h3>Title</h3>
                        </TrailImageContainer>
                      </CardFront>
                      <CardBack className='card-side back'>
                        <TrailInformation>
                          <h5>Length: </h5>
                          <h5>Elevation:</h5>
                          <p>FeatureIcons:</p>
                        </TrailInformation>
                      </CardBack>
                    </TrailCard> */}