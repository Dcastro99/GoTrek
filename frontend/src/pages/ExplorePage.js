import React from 'react'
import Navbar from '../components/Navbar';
import Explore from '../components/Explore';
import Footer from '../components/Footer';

function ExplorePage(props) {
  return (
    <div>
      <Navbar auth0={props.auth0} />
      <Explore />
      <Footer />
    </div>
  )
}

export default ExplorePage;