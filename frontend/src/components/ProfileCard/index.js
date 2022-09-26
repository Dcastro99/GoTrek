import React, { Component } from 'react';
import { ProfileTrailInformation, ProfileTrailCards, ProfileTrailImage, TrailCardWrapper } from './ProfileCardElements';
import photo1 from '../../assets/images/hike.jpg';
import axios from 'axios';

class ProfileCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trails: []
    }
  }

  componentDidMount() {
    this.handleGetAllTrails();
  }
  handleGetAllTrails = async () => {
    const config = {
      baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
      method: 'get',
    };
    const res = await axios(config);
    // console.log('res', res.data);
    this.setState({ trails: res.data });
    console.log('HEYYYY>>>>>>>>', res.data)
  };


  render() {
    return (

      <>

        {this.state?.trails &&

          < TrailCardWrapper >
            {this.state?.trails.map((trail) => (
              < ProfileTrailCards >

                <ProfileTrailImage>
                  <img src={photo1} alt='hiking' />
                </ProfileTrailImage>
                <ProfileTrailInformation>
                  <h4>{trail.trailName}</h4>
                  <h5>{trail.length}</h5>
                  <p>{trail.elevationGain}</p>
                </ProfileTrailInformation>
              </ProfileTrailCards >
            ))}

          </TrailCardWrapper >
        }
      </>
    )
  }


}




export default ProfileCards;

