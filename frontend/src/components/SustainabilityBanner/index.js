import React from 'react'
import { SustainabilityContainer, InformationSection, InformationColumn, InformationText, Button, LogoContainer } from './SustainabilityElements';
import { FaTree, FaHandHoldingHeart, FaRecycle } from 'react-icons/fa'

function SustainabilitySection() {
  return (
    <SustainabilityContainer>
            <InformationSection>
                <InformationColumn>
                    <InformationText>
                        <LogoContainer>
                            <FaRecycle />
                        </LogoContainer>
                        <h2>Sustainability</h2>
                        <p>Be A Part Of The Solution</p>
                        <Button href='https://www.purdueglobal.edu/blog/student-life/45-sustainability-resources/' target='_blank'>Check Us Out</Button>
                    </InformationText>
                </InformationColumn>
                <InformationColumn>
                    <InformationText>
                        <LogoContainer>
                            <FaHandHoldingHeart />
                        </LogoContainer>
                        <h2>NPCA</h2>
                        <p>Donate now to protect our national parks for future generations.</p>
                        <Button href='https://support.npca.org/page/43698/donate/1?supporter.appealCode=ALA2208D1PSC&utm_source=google&utm_medium=cpc&utm_campaign=evergreen_600_6050' target='_blank'>Donate now</Button>
                    </InformationText>
                </InformationColumn>
                <InformationColumn>
                    <InformationText>
                        <LogoContainer>
                            <FaTree />
                        </LogoContainer>
                        <h2>Planting a Tree</h2>
                        <p>Trees are an investment.</p>
                        <Button href='https://www.treesaregood.org/treeowner/plantingatree' target='_blank'>Learn more</Button>
                    </InformationText>
                </InformationColumn>
            </InformationSection>
        </SustainabilityContainer>
  )
}

export default SustainabilitySection




// Trees Planting
// No trace on trails
// Donation 