import React from 'react'
import Navbar from '../components/Navbar';
import About from '../components/AboutUs';
import Footer from '../components/Footer';

function AboutUsPage(props) {
  return (
    <div>
      <Navbar auth0={props.auth0} />
      <About />
      <Footer />
    </div>
  )
}

export default AboutUsPage