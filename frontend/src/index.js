import React from 'react';
// import { Auth0Provider } from '@auth0/auth0-react';
import ReactDOM from 'react-dom';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// root.render(
//   <Auth0Provider
//     domain={process.env.REACT_APP_DOMAIN}
//     clientId={process.env.REACT_APP_CLIENTID}
//     redirectUri={window.location.origin}
//   >
//     <App />
//   </Auth0Provider>,
//   document.getElementById('root')
// );

