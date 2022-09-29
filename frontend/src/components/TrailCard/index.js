import React from 'react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import { TrailCard, TrailImage, TrailInformation, TrailRowContainer } from './TrailCardElements';
import photo1 from '../../assets/images/hike.jpg';

class Trails extends React.Component {
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

          < TrailRowContainer >
            {this.state?.trails.map((trail) => (
              < TrailCard >
                <TrailImage>
                  <img src={photo1} alt='hiking' />
                </TrailImage>
                <TrailInformation>
                  <h4>{trail.trailName}</h4>
                  <h5>{trail.length}</h5>
                  <p>{trail.elevationGain}</p>
                </TrailInformation>
              </TrailCard >
            ))}

          </TrailRowContainer >
        }
      </>
    )
  }


}

export default withAuth0(Trails);
