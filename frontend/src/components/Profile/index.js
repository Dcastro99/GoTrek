import React from 'react'
import { withAuth0 } from "@auth0/auth0-react";
import { ProfileContainer, ProfileWrapper, ProfileCard, ProfileImage, ProfileInformation, ProfileBio, ProfileTrailContainer, RecentTrailsTitle, ProfileTitle, ProfileTrailInformation, ProfileTrailCards, ProfileTrailImage, TrailCardWrapper } from './ProfileElements';
import photo1 from '../../assets/images/hike.jpg';
import axios from 'axios';

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDev: null,
    };
  }

  componentDidMount() {
    this.handleGetUser();
  }

  handleGetUser = async () => {

    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw;

      const config = {
        headers: { Authorization: `Bearer ${jwt}` },
        method: 'POST',
        baseURL: `${process.env.REACT_APP_HEROKU_URL}`,
        url: '/user',
        data: this.props.auth0
      };
      const rest = await axios(config);
      this.setState({ user: rest.data[0] });
      console.log('USER CONFIG', `${config}`);
    }
  };




  render() {

    const { isLoading, user } = this.props.auth0;
    console.log('GARBAGE>>>', user);
    console.log('COMPLETE!!', this.props.auth0);
    if (isLoading) {
      return <div>Loading ...</div>;
    }





    return (
      <>

        <ProfileContainer>
          <ProfileTitle>
            <h1>My Profile</h1>
          </ProfileTitle>

          <ProfileWrapper>
            {
              //>>>>>>>PROFILE CARD>>>>>>>>
            }


            <ProfileCard>
              <ProfileImage>
                <img src={user.picture} alt={user.name} />
              </ProfileImage>
              <ProfileInformation>
                <h3>{user.name}</h3>
                <h5>{user.email}</h5>
              </ProfileInformation>
            </ProfileCard>

            {
              //>>>>>>>PROFILE BIO>>>>>>>>
            }

            < ProfileBio >
              <h4>MyBio:</h4>
              <p>I explore...I hike...I live.</p>
            </ProfileBio>

            {
              //>>>>>>>RECENT TRAILS>>>>>>>>
            }

            <ProfileTrailContainer>

              <RecentTrailsTitle>
                <h2>Recent Trails</h2>
              </RecentTrailsTitle>

              {/* <ProfileCards /> */}
              < TrailCardWrapper >
                < ProfileTrailCards >

                  <ProfileTrailImage>
                    <img src={photo1} alt='hiking' />
                  </ProfileTrailImage>
                  <ProfileTrailInformation>
                    <h4>Rattle Snake</h4>
                    <h5>8 Miles</h5>
                    <p>2,000ft</p>
                  </ProfileTrailInformation>
                </ProfileTrailCards >

              </TrailCardWrapper >

            </ProfileTrailContainer>
          </ProfileWrapper>
        </ProfileContainer >
      </>
    )
  }
}



export default withAuth0(Profile);

