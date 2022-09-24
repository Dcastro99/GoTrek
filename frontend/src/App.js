import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import SignUpPage from './pages/SignUpPage.js';
import ExplorePage from './pages/ExplorePage.js';
import AboutUsPage from './pages/AboutUsPage.js';
import ProfilePage from './pages/ProfilePage.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element= { < HomePage /> } />
        <Route exact path='/signup' element= { < SignUpPage /> } />
        <Route exact path='/explore' element= { < ExplorePage /> } />
        <Route exact path='/about' element= { < AboutUsPage /> } />
        <Route exact path='/profile' element= { < ProfilePage /> } />
      </Routes>
    </Router>
  );
}

export default App;
