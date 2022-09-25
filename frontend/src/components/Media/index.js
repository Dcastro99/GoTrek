import React from 'react'
import { SplashSectionContainer, SplashSectionWrapper, SplashSectionImage, SplashSectionVideo, Bar } from './SplashMediaElements';
import SustainabilitySection from '../SustainabilityBanner';
import Video from '../../assets/video/video1.mp4';
import Photo3 from '../../assets/images/splashSection/banner3.jpg';


function SplashMediaSection() {
  return (
    <SplashSectionContainer>
        <Bar />
        <SplashSectionWrapper>
            <SplashSectionVideo autoPlay loop muted src={Video} type='video/mp4'/>
        </SplashSectionWrapper>
        <Bar />
        <SplashSectionWrapper>
            <SplashSectionImage src={Photo3} alt='banner'/>
        </SplashSectionWrapper>
        <SustainabilitySection />
    </SplashSectionContainer>
  )
}

export default SplashMediaSection;