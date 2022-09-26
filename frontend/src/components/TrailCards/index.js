import React from 'react'
import { TrailsMainContainer, TrailRowContainer, TrailCardsWrapper, TrailCard, CardFront, CardBack, TrailImageContainer, TrailInformation } from './TrailCardsElements';
import trailData from '../../assets/data/test-data.json';
import photo from '../../assets/images/hike.jpg';
import '../../assets/styles/cards.css'

function TrailCards() {

  return (
    <TrailsMainContainer>
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
    </TrailsMainContainer>
  )
}

export default TrailCards;
