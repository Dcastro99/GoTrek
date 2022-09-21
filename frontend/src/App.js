import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import SignUpPage from './pages/SignUpPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element= { < HomePage /> } />
        <Route exact path='/signup' element= { < SignUpPage /> } />
      </Routes>
    </Router>
  );
}

export default App;
