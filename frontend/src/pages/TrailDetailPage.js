import React, { useEffect } from 'react'
import Navbar from '../components/Navbar';
import SingleTrail from '../components/TrailDetails';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews/index.js'

import { Link, useParams, useLocation } from 'react-router-dom';


function SingleTrailPage(props) {
  const { handle } = useParams();
  const location = useLocation();
  // const { fromExplore } = location.state;
  // const [ data, setData] = useState(null);
  // useEffect(() => {
  //   console.log('location from explore', location);
  // }, [location]);
  return (
    <div>
      <Navbar auth0={props.auth0} />
      <SingleTrail auth0={props.auth0} props={{location}}/>
      <Reviews auth0={props.auth0} />

      <Footer />
    </div>
  )
}

export default SingleTrailPage;
