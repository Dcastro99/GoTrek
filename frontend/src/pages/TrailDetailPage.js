import React from 'react'
import Navbar from '../components/Navbar';
import SingleTrail from '../components/TrailDetails';
import Footer from '../components/Footer';
// import Reviews from '../components/Reviews/index.js'


function SingleTrailPage(props) {
  return (
    <div>
      <Navbar auth0={props.auth0} />
      <SingleTrail auth0={props.auth0} />


      <Footer />
    </div>
  )
}

export default SingleTrailPage;
