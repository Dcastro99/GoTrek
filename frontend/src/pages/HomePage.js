import React from 'react'
import Navbar from '../components/Navbar';
import Splash from '../components/Splash';
import Footer from '../components/Footer';
import Trails from '../components/Trails';

function HomePage() {
  return (
    <div>
        <Navbar />
        <Splash />
        <Trails />
        <Footer />
    </div>
  )
}

export default HomePage;