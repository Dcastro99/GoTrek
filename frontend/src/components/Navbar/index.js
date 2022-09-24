import React from 'react'
import { NavbarContainer, NavMenuContainer, NavMenuLinksContainer, NavMenuLink, NavSignupContainer, LogoContainer, NavLogo, NavBtnLink } from './NavarElements';
import logo from '../../assets/images/GoTrek-4.png';

function Navbar() {
  return (
    <NavbarContainer>
      <NavMenuContainer>
        <NavMenuLinksContainer>
          <NavMenuLink to='/explore'>Explore</NavMenuLink>
          <NavMenuLink to='/profile'>Profile</NavMenuLink>
          <NavMenuLink to='/about'>About</NavMenuLink>
        </NavMenuLinksContainer>
      </NavMenuContainer>
      <LogoContainer>
        <NavLogo to='/'>
          <img src={logo} alt='logo' />
        </NavLogo>
      </LogoContainer>
      <NavSignupContainer>
        <NavBtnLink to='/signup'>Signup</NavBtnLink>
      </NavSignupContainer>
    </NavbarContainer>
  )
}

export default Navbar;