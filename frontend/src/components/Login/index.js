import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button } from 'react-bootstrap';
import '../../assets/styles/Login.css'

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated)
    return <Button id="loginBtn" variant="contained" onClick={() => loginWithRedirect()}> Log In</Button >;
};

export default LoginButton;
