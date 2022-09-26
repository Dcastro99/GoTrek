import React from 'react'
import Navbar from '../components/Navbar';
import Profile from '../components/Profile';
import Footer from '../components/Footer';

function ProfilePage(props) {
  return (
    <div>
      <Navbar />
      <Profile handleGetAllTrails={props.handleGetAllTrails} />
      <Footer />
    </div>
  )
}

export default ProfilePage