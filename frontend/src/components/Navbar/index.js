import React, { useState } from 'react'
import { NavbarContainer, NavMenuContainer, NavMenuLinksContainer, NavMenuLink, NavSignupContainer, LogoContainer, NavLogo, Link1, NavLogo2 } from './NavarElements';
import logo from '../../assets/images/GoTrek-4.png';
import chatLogo from '../../assets/images/chat1-logo.jpeg'
// import userEvent from '@testing-library/user-event';
import LogoutButton from '../../components/Logout/index';
// import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Chat from '../Socket-io/index'

function Navbar(props) {
  const [lgShow, setLgShow] = useState(false);
  return (
    <>
      <NavbarContainer>
        <NavMenuContainer>
          <NavMenuLinksContainer>
            <NavMenuLink to='/explore'>Explore</NavMenuLink>
            <NavMenuLink to='/profile'>Profile</NavMenuLink>
            <NavMenuLink to='/about'>About</NavMenuLink>

          </NavMenuLinksContainer>
          <NavLogo2>
            <div onClick={() => setLgShow(true)}><img src={chatLogo} alt='logo' /></div>
          </NavLogo2>
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

      {/* MODAL >>>>>>>>>>>>>>>>>>>>*/}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id='chatBody'>
          < Chat auth0={props.auth0} />

        </Modal.Body>
      </Modal>


    </>
  )
}

export default Navbar;
