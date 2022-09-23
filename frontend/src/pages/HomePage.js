import React from 'react'
import Navbar from '../components/Navbar';
import Splash from '../components/Splash';
import Footer from '../components/Footer';
import Review from '../components/Reviews';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Splash />
      <Review />
      <Footer />
    </div>
  )
}

export default HomePage;
