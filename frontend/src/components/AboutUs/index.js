import React from 'react'
import { AboutContainer, AboutWrapper, AboutDev, AboutGoTrek, SocialMedia } from './AboutElements';
import Card from 'react-bootstrap/Card';
import { FaGithub, FaLinkedin } from 'react-icons/fa'

import '../../assets/styles/aboutUs.css'

import CardGroup from "react-bootstrap/CardGroup";
import {
  MDBContainer,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
} from 'mdb-react-ui-kit';

function About() {
  return (
    <AboutContainer>
      <AboutGoTrek>
        <h1>About GoTrek</h1>
        <MDBContainer>
          <Card>
            <Card.Body>
              <h3><b>Our Purpose</b></h3>
              <br></br>
              <p>Spontaneous hikes can be overwhelming. If you are looking for a way to “Pack up quick and go” or “ready to go”
                kind of adventure. GoTrek provides an easy solution to hiking and exploration. If you’re an active hiker or a
                novice, GoTrek will provide you with all the information needed: prep, physicality level, expectations,
                weather/environment, supplies, and recommendations from others who have a good experience on said journey.
                Whether it’s a quick day hike that’s 20 minutes away, or a week long backpacking trip deep into the mountains,
                we have your back.</p>
              <br></br>
              <h3><b>Mission Statement</b></h3>
              <p> Discover and stay connected with hiking trails happening near you!</p>


            </Card.Body>
          </Card>

        </MDBContainer>
      </AboutGoTrek>

      <AboutDev>
        <h1>Our Team</h1>
        <AboutWrapper>
          <CardGroup>
            <MDBCard className='card'>
              <MDBCardImage position='top' alt='...' src='https://avatars.githubusercontent.com/u/70992980?v=4' />
              <MDBCardBody>
                <MDBCardTitle>Tony Regalado</MDBCardTitle>
                <MDBCardBody>
                  Software Developer
                </MDBCardBody>
              </MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem>
                  <MDBCardLink href='https://github.com/Edward-Regalado'><SocialMedia><FaGithub /></SocialMedia></MDBCardLink></MDBListGroupItem>
                <MDBListGroupItem><MDBCardLink href='https://www.linkedin.com/in/edward-regalado/'><SocialMedia><FaLinkedin /></SocialMedia></MDBCardLink></MDBListGroupItem>
              </MDBListGroup>
            </MDBCard>
            <MDBCard>
              <MDBCardImage position='top' alt='...' src='https://avatars.githubusercontent.com/u/107226923?v=4' />
              <MDBCardBody>
                <MDBCardTitle>Von Arzu</MDBCardTitle>
                <MDBCardBody>
                  Software Developer
                </MDBCardBody>
              </MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem> <MDBCardLink href='https://github.com/ArzuVon'><SocialMedia><FaGithub /></SocialMedia></MDBCardLink></MDBListGroupItem>
                <MDBListGroupItem><MDBCardLink href='https://www.linkedin.com/in/vonarzu'><SocialMedia><FaLinkedin /></SocialMedia></MDBCardLink></MDBListGroupItem>
              </MDBListGroup>
            </MDBCard>
            <MDBCard>
              <MDBCardImage position='top' alt='...' src='https://avatars.githubusercontent.com/u/93397389?v=4' />
              <MDBCardBody>
                <MDBCardTitle>Danny Castro</MDBCardTitle>
                <MDBCardBody>
                  Software Developer
                </MDBCardBody>
              </MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem> <MDBCardLink href='https://github.com/Dcastro99'><SocialMedia><FaGithub /></SocialMedia></MDBCardLink></MDBListGroupItem>
                <MDBListGroupItem><MDBCardLink href='https://www.linkedin.com/in/dcastro99/'><SocialMedia><FaLinkedin /></SocialMedia></MDBCardLink></MDBListGroupItem>
              </MDBListGroup>
            </MDBCard>
            <MDBCard>
              <MDBCardImage position='top' alt='...' src='https://avatars.githubusercontent.com/u/82287550?v=4' />
              <MDBCardBody>
                <MDBCardTitle>Sarah Teklemariam</MDBCardTitle>
                <MDBCardBody>
                  Software Developer
                </MDBCardBody>
              </MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem> <MDBCardLink href='https://github.com/SarahTek'><SocialMedia><FaGithub /></SocialMedia></MDBCardLink></MDBListGroupItem>
                <MDBListGroupItem><MDBCardLink href='https://www.linkedin.com/in/sarah-t-31658b190/'><SocialMedia><FaLinkedin /></SocialMedia></MDBCardLink></MDBListGroupItem>
              </MDBListGroup>
            </MDBCard>
            <MDBCard>
              <MDBCardImage position='top' alt='...' src='https://avatars.githubusercontent.com/u/98293148?v=4' />
              <MDBCardBody>
                <MDBCardTitle>Justin Mathieu</MDBCardTitle>
                <MDBCardBody>
                  Software Developer
                </MDBCardBody>
              </MDBCardBody>
              <MDBListGroup flush>
                <MDBListGroupItem> <MDBCardLink href='https://github.com/Justin-Mathieu'><SocialMedia><FaGithub /></SocialMedia></MDBCardLink></MDBListGroupItem>
                <MDBListGroupItem><MDBCardLink href='#'><SocialMedia><FaLinkedin /></SocialMedia></MDBCardLink></MDBListGroupItem>
              </MDBListGroup>
            </MDBCard>
          </CardGroup>
        </AboutWrapper>
      </AboutDev>
    </AboutContainer>
  );
}

export default About;
