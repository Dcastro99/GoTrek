import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button } from 'react-bootstrap';
import '../../assets/styles/Logout.css'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (

    <Button id="logOut" variant="outlined" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out
    </Button>

  );
};

export default LogoutButton;