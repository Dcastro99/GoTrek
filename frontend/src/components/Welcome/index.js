
import React from 'react';
import { WelcomeContainer, WelcomeWrapper, Title, WelcomeStatement, TitleContainer } from './WelcomeElements';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './Login';
import ReactLoading from 'react-loading';

class Welcome extends React.Component {

  componentDidMount() {
    console.log("Welcome to GoTrek");
  }


  render() {

    const {
      isLoading
    } = this.props.auth0

    if (isLoading) {
      return (
        <div id="lodingDiv">
          <ReactLoading id="loading" type={"spokes"} color={"blue"} height={667} width={375} />
        </div>
      )
    }

    return (
      <WelcomeContainer className="welcomeCont">
        {!this.props.auth0.isAuthenticated &&
          <WelcomeWrapper className="welcomeDiv">
            <TitleContainer>
              <Title className='name-animation'>
                <h1 className="typewriter">Welcome to GoTrek</h1>
              </Title>
              <LoginButton />
            </TitleContainer>
            <WelcomeStatement className="explanation">
              <h5>GoTrek ... skjdhfalsdfapsoefg;lskdj<br />

                <br />You wil be able to... lakdf;lsadfja;lkdsjfalksjf<br />

                <br />Find a catagory...ladjfhalkdfhjlakdsflaksdfh<br />

                <br />Explore your world!<br />
              </h5>
            </WelcomeStatement>
          </WelcomeWrapper>
        }
      </WelcomeContainer>
    )
  }
}

export default withAuth0(Welcome);

git 