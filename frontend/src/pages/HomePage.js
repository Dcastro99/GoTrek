import React from 'react'
import Navbar from '../components/Navbar';
import Splash from '../components/Splash';
// import SplashSection from '../components/SplashMediaSection';
import Footer from '../components/Footer';
// import Review from '../components/Reviews';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Splash />
      <Footer />
    </div>
  )
}

export default HomePage;
