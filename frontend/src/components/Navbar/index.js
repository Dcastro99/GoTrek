import React from 'react'
import { NavbarContainer, NavMenu, NavSignup, LogoContainer, NavLogo } from './NavarElements';
import logo from '../../assets/images/GoTrek-4.png';

function Navbar() {
  return (
    <NavbarContainer>
      <NavMenu><h1>Menu</h1></NavMenu>
      <LogoContainer>
        <NavLogo to='/'>
          <img src={logo} alt='logo'/>
        </NavLogo>
      </LogoContainer>
      <NavSignup><h1>Signup</h1></NavSignup>
    </NavbarContainer>
  )
}

export default Navbar;