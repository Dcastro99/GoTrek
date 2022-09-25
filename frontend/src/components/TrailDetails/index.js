import React from 'react'
import { TrailContainer, TrailImageContainer, TrailWrapper, TrailImage, TrailDescriptionContainer, TrailDescription, TrailLengthContainer, LengthLink, TrailLengthDetail, TrailWeatherContainer, TrailWeatherDetails, Button, SearchBarContainer, SearchBarForm, Input, WriteReviewContainer, WriteReview, ReviewButton, ReviewsContainer1, ReviewsContainer2, Reviews, TrailBox, TrailCardContainer, TrailCardsWrapper, TrailCards, TrailMap, ViewMapLink, TrailSubBox, NearbyTrailsImage, TrailInfo, DaysList, Des } from './SingleTrailElements';
import photo from "../../assets/images/banner.jpg";



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
          <TrailImageContainer>
            <TrailImage>
              <img src={photo} alt='hiking' />
            </TrailImage>
          </TrailImageContainer>

          <TrailBox>
            <TrailSubBox>
              <TrailDescriptionContainer>
                <TrailDescription>
                  <Des>Trail description</Des>
                </TrailDescription>
              </TrailDescriptionContainer>

              <TrailLengthContainer>
                <TrailLengthDetail>
                  {/* <LengthLink to='/map'>Length </LengthLink> */}
                  <Button>Length</Button>
                  <Button>Elevation</Button>

                </TrailLengthDetail>
              </TrailLengthContainer>

              <TrailWeatherContainer>
                <TrailWeatherDetails>
                  <DaysList>
                    <Button>Monday</Button>
                    <Button>TUESDAY</Button>
                    <Button>Wednesday</Button>
                    <Button>Thursday</Button>
                    <Button>Friday</Button>
                    <Button>Saturday</Button>
                    <Button>Sunday</Button>
                  </DaysList>
                </TrailWeatherDetails>
              </TrailWeatherContainer>
              <WriteReviewContainer>
                <WriteReview>
                  <ReviewButton>
                    <Button>Write Review</Button>
                  </ReviewButton>
                </WriteReview>
              </WriteReviewContainer>
              <ReviewsContainer1>
                <Reviews>Reviews </Reviews>
              </ReviewsContainer1>
              <ReviewsContainer2>
                <Reviews>
                  <h4>Reviews</h4>
                </Reviews>
              </ReviewsContainer2>
            </TrailSubBox>

            <TrailCardContainer>
              <TrailCardsWrapper>
                <TrailCards>
                  <TrailMap>

                    <ViewMapLink to='/map'>View Map</ViewMapLink>
                  </TrailMap>
                  <NearbyTrailsImage>
                    <ViewMapLink >Nearby Trails</ViewMapLink>
                  </NearbyTrailsImage>
                  <TrailInfo>
                  </TrailInfo>
                  <ViewMapLink to='/map'>Information</ViewMapLink>
                  <TrailInfo>
                  </TrailInfo>
                  <ViewMapLink to='/map'>Information</ViewMapLink>
                  <TrailInfo>
                  </TrailInfo>
                  <ViewMapLink to='/map'>Information</ViewMapLink>
                  <TrailInfo>
                  </TrailInfo>
                  <ViewMapLink to='/map'>Information</ViewMapLink>
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




// <TrailMap>
/* <img src={map} alt='map' />
<ViewMapLink to='/map'>View Map</ViewMapLink>
</TrailMap> */

/* <NearbyTrailsImage>
<img src={map} alt='map' />
</NearbyTrailsImage> */

// 
