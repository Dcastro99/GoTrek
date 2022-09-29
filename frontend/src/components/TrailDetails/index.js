import React from 'react'
import { TrailContainer, TrailImageContainers, TrailWrapper, TrailImage, TrailDescriptionContainer, TrailDescription, TrailLengthContainer, TrailLengthDetail, TrailWeatherContainer, TrailWeatherDetails, Button, SearchBarContainer, SearchBarForm, Input, WriteReviewContainer, WriteReview, TrailBox, TrailCardContainer, TrailCardsWrapper, TrailCards, TrailMap, TrailSubBox, NearbyTrailsImage, DaysList, Row, Feature, Column } from './SingleTrailElements';
// import photo from '../../assets/images/banner2.jpg';
import Weather from '../../components/Weather/src/Weather';
import Map from '../Map/index';
// import SingleTrailImage from '../TrailCards/index';
import { TrailCard, CardFront, TrailImageContainer, CardBack, TrailInformation } from '../TrailCards/TrailCardsElements';
import photo2 from '../../assets/images/hike.jpg';
import Review from '../Reviews/index';



function SingleTrail() {
  return (
    <>
      <SearchBarContainer>
        <SearchBarForm>
          <Input id='search' type='text' class='input' placeholder='Search' />
        </SearchBarForm>
        <Button>search</Button>
      </SearchBarContainer>


      <TrailContainer>
        <TrailWrapper>
          <TrailImageContainers>
            <TrailImage>
              {/* <SingleTrailImage /> */}
              {/* <img src={photo} alt='hiking' /> */}
            </TrailImage>
          </TrailImageContainers>

          <TrailBox>
            <TrailSubBox>
              <TrailDescriptionContainer>
                <TrailDescription>
                  {/* <Des>Trail description</Des> */}
                  <h3>Yosemite Trailhead</h3>
                  <p>Most of Yosemite Valley falls within a no-camping zone, so while there are trailheads starting from Yosemite Valley, they all require a hike of at least four miles and a minimum elevation gain of 2,500 feet. Most trails lead to rewarding views from the north or south rim of the Valley, but water can be limited in late summer. This region is the most popular, and most crowded, portion of the park.</p>
                </TrailDescription>
              </TrailDescriptionContainer>

              <TrailLengthContainer>
                <Row>
                  <TrailLengthDetail>
                    <h3>Length</h3>
                    <p>10.2 miles</p>
                    {/* <LengthLink to='/map'>Length </LengthLink>
                    <Button>Length</Button>
                    <Button>Elevation</Button> */}

                  </TrailLengthDetail>

                  <TrailLengthDetail>
                    <h3>Elevation Game</h3>
                    <p>500 feet</p>
                  </TrailLengthDetail>
                </Row>
                <Row>
                  <Column>
                    <h3>Features</h3>
                    <Row>
                      <Feature>Dogs</Feature>
                      <Feature>Views</Feature>
                      <Feature>WildLife</Feature>
                      <Feature>Camping</Feature>
                      <Feature>Forest</Feature>
                      <Feature>Wild-Flowers</Feature>
                    </Row>
                  </Column>

                </Row>
              </TrailLengthContainer>

              <TrailWeatherContainer>
                <TrailWeatherDetails>
                  <DaysList>
                    < Weather />
                  </DaysList>
                </TrailWeatherDetails>
              </TrailWeatherContainer>

              <WriteReviewContainer>
                <WriteReview>
                  <Review />
                </WriteReview>
              </WriteReviewContainer>

            </TrailSubBox>




            <TrailCardContainer>
              <TrailCardsWrapper>
                <TrailCards>
                  <TrailMap>
                    < Map />
                    {/* <ViewMapLink to='/map'>View Map</ViewMapLink> */}
                  </TrailMap>
                  <NearbyTrailsImage>
                    <h3>Nearby Trails</h3>
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
                          <p>Features:</p>
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
                          <p>Features:</p>
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
                          <p>Features:</p>
                        </TrailInformation>
                      </CardBack>
                    </TrailCard>
                  </NearbyTrailsImage>
                </TrailCards>
              </TrailCardsWrapper>
            </TrailCardContainer>
          </TrailBox>

        </TrailWrapper>
      </TrailContainer>


    </>
  )
}

export default SingleTrail;
