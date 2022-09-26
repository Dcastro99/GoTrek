
import React from 'react';
import { WelcomeContainer, WelcomeWrapper, Title, WelcomeStatement, TitleContainer } from './WelcomeElements';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from '../../components/Login/index';
import ReactLoading from 'react-loading';
import '../../assets/styles/Welcome.css';


const Welcome = (props) => {

  const {
    isLoading,
    isAuthenticated
  } = props.auth0;
  return (
    <>

      {isLoading ?
        <div id="lodingDiv">
          <ReactLoading id="loading" type={"spokes"} color={"black"} height={667} width={375} />
        </div>
        : (<>
          <WelcomeContainer className="welcomeCont">
            {isAuthenticated}
            < WelcomeWrapper className="welcomeDiv">
              <TitleContainer>
                <Title className='name-animation'>
                  Welcome to GoTrek
                </Title>
                <LoginButton />
              </TitleContainer>
              <WelcomeStatement className="explanation">
                <h5>GoTrek ... because lifes too short<br />

                  {/* {/* <br />You wil be able to... lakdf;lsadfja;lkdsjfalksjf<br /> */}

                  <br />Get out and Explore your world!<br />

                  {/* <br />Explore your world!<br /> */}
                </h5>
              </WelcomeStatement>
            </WelcomeWrapper>
          </WelcomeContainer>
        </>)
      }
    </>
  )
}

export default withAuth0(Welcome);