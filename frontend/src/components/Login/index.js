import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { Button } from 'react-bootstrap';

const LoginButton = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  if (!isAuthenticated)
    return <Button id="loginBtn" variant="contained" onClick={() => loginWithRedirect()}> Log In</Button >;
};

export default LoginButton;


// import React from "react";
// import Button from "react-bootstrap/Button";
// import "../../Styles/Login.css";
// import { useAuth0 } from '@auth0/auth0-react';


// const LoginButton = () => {
//   const { isAuthenticated, loginWithRedirect } = useAuth0();

//   if (!isAuthenticated)
//     return <Button Button id="loginBtn" variant="contained" onClick={() => loginWithRedirect()}> Log In</Button >;
// };

// export default LoginButton;