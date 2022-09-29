import React from 'react'
import { TrailsMainContainer, TrailRowContainer, TrailCardsWrapper, TrailCard, CardFront, CardBack, TrailImageContainer, TrailInformation, InformationRow, InformationColumn, Button } from './TrailCardsElements';
import trailData from '../../assets/data/test-data.json';
// import trailData from '../../assets/data/wta-parks-data.json';
import photo from '../../assets/images/hike.jpg';
import '../../assets/styles/cards.css'

function TrailCards(props) {
    const randomTrails = [];
    let x = {}
    for(let i = 0; i < 8; i++) {
        x = (Math.floor(Math.random() * trailData.length));
        randomTrails.push(trailData[x]);
    }
    return (
        <TrailsMainContainer>
            <TrailCardsWrapper>
                <TrailRowContainer>
                    {randomTrails.map(trail => (
                        <TrailCard className='card'>
                            
                            <CardFront className='card-side front'>
                                <TrailImageContainer>
                                    <img src={photo} alt='hiking' />
                                    <h5>{trail.name}</h5>
                                </TrailImageContainer>
                            </CardFront>
                            <CardBack className='card-side back'>
                                <TrailInformation>
                                    <InformationRow>
                                        <InformationColumn>
                                            <h5>Length: {trail.length}</h5>
                                            <h5>Gain: {trail.elevation.hightestPoint}</h5>
                                            <h5>Peak: {trail.elevation.gain}</h5>
                                            <h5>Required Pass: {trail.requiredPass}</h5>
                                        </InformationColumn>
                                    </InformationRow>
                                    <InformationRow>
                                        <InformationColumn>
                                            <h5>Features: </h5>
                                            <p>{trail.features}</p>
                                        <Button 
                                            to='trail/{trail.name}' 
                                            state={{
                                                from: 'explore',
                                                trail: trail,
                                        }}>Go</Button>
                                        </InformationColumn>
                                    </InformationRow>
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
