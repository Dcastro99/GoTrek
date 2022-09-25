import React from 'react'
import { FooterLogo, FooterA, FooterContainer, FooterLink, FooterLinkContainer, FooterLogoContainer, SocialMediaContainer, CopyRight, SocialMedia, SocialA, SocialMediaTitle, SocialMediaIcons } from './FooterElements';
import Logo from '../../assets/images/GoTrek-4.png';
import { FaFacebook, FaInstagram } from 'react-icons/fa';



function Footer() {
  return (
    <FooterContainer>
      <FooterLogoContainer>
        <FooterLogo>
          <img src={Logo} alt="Logo" />
        </FooterLogo>
      </FooterLogoContainer>
      <FooterLinkContainer>
        <FooterLink>
          <FooterA href="google.com" target="_blank">Google</FooterA>
          <FooterA href="google.com" target="_blank">Google</FooterA>
          <FooterA href="google.com" target="_blank">Google</FooterA>
          <FooterA href="google.com" target="_blank">Google</FooterA>
        </FooterLink>
        <FooterLink>
          <FooterA href="google.com" target="_blank">Google</FooterA>
          <FooterA href="google.com" target="_blank">Google</FooterA>
          <FooterA href="google.com" target="_blank">Google</FooterA>
          <FooterA href="google.com" target="_blank">Google</FooterA>
        </FooterLink>
        <FooterLink>
          <FooterA href="google.com" target="_blank">Google</FooterA>
          <FooterA href="google.com" target="_blank">Google</FooterA>
          <FooterA href="google.com" target="_blank">Google</FooterA>
          <FooterA href="google.com" target="_blank">Google</FooterA>
        </FooterLink>
        <FooterLink>
          <FooterA href="google.com" target="_blank">Google</FooterA>
          <FooterA href="google.com" target="_blank">Google</FooterA>
          <FooterA href="google.com" target="_blank">Google</FooterA>
          <FooterA href="google.com" target="_blank">Google</FooterA>
        </FooterLink>
      </FooterLinkContainer>
      <SocialMediaContainer>
        <CopyRight>
          <h3>&copy;GoTrek</h3>
        </CopyRight>
        <SocialMedia>
          <SocialMediaTitle>
            {/* <h4>Social Media</h4> */}
          </SocialMediaTitle>
          <SocialMediaIcons>
            <SocialA href="instagram.com" target="_blank"></SocialA>
            <SocialA href="google.com" target="_blank"></SocialA>
            <FaFacebook />
            <FaInstagram />
          </SocialMediaIcons>
        </SocialMedia>
      </SocialMediaContainer>
    </FooterContainer>
  )
}

export default Footer;
