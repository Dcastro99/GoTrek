import React from 'react'

import { FooterLogo, FooterA, FooterContainer, FooterLinkTitle, FooterLinkContainer, FooterLogoContainer, SocialMediaIconsContainer, SocialMediaIcons, CopyRightContainer, SocialMediaWrapper, SocialA, SocialMediaTitle, FooterLinkColumn, FooterWrapper, FooterLink } from './FooterElements';
import Logo from '../../assets/images/GoTrek-4.png';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';



function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLogoContainer>
          <FooterLogo to='/'>
            <img src={Logo} alt="Logo" />
          </FooterLogo>
        </FooterLogoContainer>
        <FooterLinkContainer>
          <FooterLinkColumn>
            <FooterLinkTitle>
              Brand
            </FooterLinkTitle>
            <FooterLink to='/about' target="_blank">About Us</FooterLink>
            <FooterA href="google.com" target="_blank"></FooterA>
            <FooterA href="google.com" target="_blank">Privacy Policy</FooterA>
            <FooterA href="google.com" target="_blank">Terms & Condition</FooterA>
          </FooterLinkColumn>
          <FooterLinkColumn>
            <FooterLinkTitle>
              Contact Us
            </FooterLinkTitle>
            <FooterA>800-266-8585</FooterA>
            <FooterA>GoTrek@gmail.com</FooterA>
          </FooterLinkColumn>
          <FooterLinkColumn>
            <FooterLinkTitle>
              My Account
            </FooterLinkTitle>
            <FooterLink to="/signup" target="_blank">Log in</FooterLink>
            <FooterLink to='/signup' target="_blank">Sign Up</FooterLink>
            <FooterLink to='/profile' target="_blank">Profile</FooterLink>
          </FooterLinkColumn>
        </FooterLinkContainer>
        <SocialMediaIconsContainer>
          <CopyRightContainer>
            <h4>&copy; GoTrek 2022</h4>
          </CopyRightContainer>
          <SocialMediaWrapper>
            <SocialMediaTitle>
              <h4>Follow Us</h4>
            </SocialMediaTitle>
            <SocialMediaIcons>
              <SocialA href="https://www.facebook.com/" target="_blank">
                <FaFacebook />
              </SocialA>
              <SocialA href="https://www.instagram.com" target="_blank">
                <FaInstagram />
              </SocialA>
              <SocialA href="https://www.twitter.com" target="_blank">
                <FaTwitter />
              </SocialA>
              <SocialA href="https://www.linkedIn.com" target="_blank">
                <FaLinkedin />
              </SocialA>
            </SocialMediaIcons>
          </SocialMediaWrapper>
        </SocialMediaIconsContainer>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer;
