import React from 'react'
import { TrailRowContainer, TrailCardsWrapper, TrailCard, TrailImage, TrailInformation } from './TrailCardsElements';
import photo from '../../assets/images/hike.jpg';

function TrailCards() {
    return (
        <TrailCardsWrapper>
            <TrailRowContainer>
                <TrailCard>
                    <TrailImage>
                        <img src={photo} alt='hiking' />
                    </TrailImage>
                    <TrailInformation>
                        <h3>Title</h3>
                        <h5>Distance: 10 miles</h5>
                        <p>Information</p>
                    </TrailInformation>
                </TrailCard>
                <TrailCard>
                    <TrailImage>
                        <img src={photo} alt='hiking' />
                    </TrailImage>
                    <TrailInformation>
                        <h3>Title</h3>
                        <h5>Distance: 10 miles</h5>
                        <p>Information</p>
                    </TrailInformation>
                </TrailCard>
                <TrailCard>
                    <TrailImage>
                        <img src={photo} alt='hiking' />
                    </TrailImage>
                    <TrailInformation>
                        <h3>Title</h3>
                        <h5>Distance: 10 miles</h5>
                        <p>Information</p>
                    </TrailInformation>
                </TrailCard>
                <TrailCard>
                    <TrailImage>
                        <img src={photo} alt='hiking' />
                    </TrailImage>
                    <TrailInformation>
                        <h3>Title</h3>
                        <h5>Distance: 10 miles</h5>
                        <p>Information</p>
                    </TrailInformation>
                </TrailCard>

            </TrailRowContainer>
            <TrailRowContainer>
                <TrailCard>
                    <TrailImage>
                        <img src={photo} alt='hiking' />
                    </TrailImage>
                    <TrailInformation>
                        <h3>Title</h3>
                        <h5>Distance: 10 miles</h5>
                        <p>Information</p>
                    </TrailInformation>
                </TrailCard>
                <TrailCard>
                    <TrailImage>
                        <img src={photo} alt='hiking' />
                    </TrailImage>
                    <TrailInformation>
                        <h3>Title</h3>
                        <h5>Distance: 10 miles</h5>
                        <p>Information</p>
                    </TrailInformation>
                </TrailCard>
                <TrailCard>
                    <TrailImage>
                        <img src={photo} alt='hiking' />
                    </TrailImage>
                    <TrailInformation>
                        <h3>Title</h3>
                        <h5>Distance: 10 miles</h5>
                        <p>Information</p>
                    </TrailInformation>
                </TrailCard>
                <TrailCard>
                    <TrailImage>
                        <img src={photo} alt='hiking' />
                    </TrailImage>
                    <TrailInformation>
                        <h3>Title</h3>
                        <h5>Distance: 10 miles</h5>
                        <p>Information</p>
                    </TrailInformation>
                </TrailCard>
            </TrailRowContainer>
        </TrailCardsWrapper>
    )
}

export default TrailCards;