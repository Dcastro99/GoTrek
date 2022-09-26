import React from 'react'
import { TrailsMainContainer, TrailCardsWrapper, } from './TrailCardsElements';
import Trails from '../TrailCard'

function TrailCards() {
    return (
        <TrailsMainContainer>
            <TrailCardsWrapper>
                {/* <TrailRowContainer> */}
                <Trails />

                {/* <TrailCard>
                        <TrailImage>
                            <img src={photo} alt='hiking' />
                        </TrailImage>
                        <TrailInformation>
                            <h3>Trail Name</h3>
                            <h5>Distance: 10 miles</h5>
                            <p>Information</p>
                        </TrailInformation>
                    </TrailCard>
                    <TrailCard>
                        <TrailImage>
                            <img src={photo} alt='hiking' />
                        </TrailImage>
                        <TrailInformation>
                            <h3>Title Name</h3>
                            <h5>Distance: 10 miles</h5>
                            <p>Information</p>
                        </TrailInformation>
                    </TrailCard>
                    <TrailCard>
                        <TrailImage>
                            <img src={photo} alt='hiking' />
                        </TrailImage>
                        <TrailInformation>
                            <h3>Title Name</h3>
                            <h5>Distance: 10 miles</h5>
                            <p>Information</p>
                        </TrailInformation>
                    </TrailCard> */}

                {/* </TrailRowContainer> */}
                {/* <TrailRowContainer>
                    <TrailCard>
                        <TrailImage>
                            <img src={photo} alt='hiking' />
                        </TrailImage>
                        <TrailInformation>
                            <h3>Title Name</h3>
                            <h5>Distance: 10 miles</h5>
                            <p>Information</p>
                        </TrailInformation>
                    </TrailCard>
                    <TrailCard>
                        <TrailImage>
                            <img src={photo} alt='hiking' />
                        </TrailImage>
                        <TrailInformation>
                            <h3>Title Name</h3>
                            <h5>Distance: 10 miles</h5>
                            <p>Information</p>
                        </TrailInformation>
                    </TrailCard>
                    <TrailCard>
                        <TrailImage>
                            <img src={photo} alt='hiking' />
                        </TrailImage>
                        <TrailInformation>
                            <h3>Title Name</h3>
                            <h5>Distance: 10 miles</h5>
                            <p>Information</p>
                        </TrailInformation>
                    </TrailCard>
                    <TrailCard>
                        <TrailImage>
                            <img src={photo} alt='hiking' />
                        </TrailImage>
                        <TrailInformation>
                            <h3>Title Name</h3>
                            <h5>Distance: 10 miles</h5>
                            <p>Information</p>
                        </TrailInformation>
                    </TrailCard>
                </TrailRowContainer> */}
            </TrailCardsWrapper>
        </TrailsMainContainer>
    )
}

export default TrailCards;