import React from 'react'
import { NavbarContainer, NavMenuContainer, NavMenuLinksContainer, NavMenuLink, NavSignupContainer, LogoContainer, NavLogo, Link1, Link2 } from './NavarElements';
import logo from '../../assets/images/GoTrek-4.png';
// import userEvent from '@testing-library/user-event';
import LogoutButton from '../../components/Logout/index';

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
        <Link1>
          <LogoutButton />
        </Link1>
      </NavSignupContainer>
    </NavbarContainer >
  )
}

export default Navbar;
