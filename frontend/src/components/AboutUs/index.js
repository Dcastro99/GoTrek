import React from 'react'
import { AboutContainer, AboutWrapper } from './AboutElements';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
// https://mdbootstrap.com/docs/react/getting-started/installation/


import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem
} from 'mdb-react-ui-kit';


import CardGroup from 'react-bootstrap/CardGroup';




function About() {
  return (
    <AboutContainer>
  
      <h1>About Us</h1>
        <AboutWrapper>
            
    <CardGroup>
    <MDBCard>
      <MDBCardImage position='top' alt='...' src='https://avatars.githubusercontent.com/u/70992980?v=4' />
      <MDBCardBody>
        <MDBCardTitle>Tony Regalado</MDBCardTitle>
        <MDBCardBody>
        Description      
        </MDBCardBody>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem> <MDBCardLink href='https://github.com/Edward-Regalado'>GitHub</MDBCardLink></MDBListGroupItem>
        <MDBListGroupItem><MDBCardLink href='#'>LinkedIn</MDBCardLink></MDBListGroupItem>
        <MDBListGroupItem><MDBCardLink href='#'>Twitter</MDBCardLink></MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
    <MDBCard>
      <MDBCardImage position='top' alt='...' src='https://avatars.githubusercontent.com/u/107226923?v=4' />
      <MDBCardBody>
        <MDBCardTitle>Von Arzu</MDBCardTitle>
        <MDBCardBody>
        Description      
        </MDBCardBody>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem> <MDBCardLink href='https://github.com/ArzuVon'>GitHub</MDBCardLink></MDBListGroupItem>
        <MDBListGroupItem><MDBCardLink href='#'>LinkedIn</MDBCardLink></MDBListGroupItem>
        <MDBListGroupItem><MDBCardLink href='#'>Twitter</MDBCardLink></MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
    <MDBCard>
      <MDBCardImage position='top' alt='...' src='https://avatars.githubusercontent.com/u/93397389?v=4' />
      <MDBCardBody>
        <MDBCardTitle>Danny Castro</MDBCardTitle>
        <MDBCardBody>
        Description      
        </MDBCardBody>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem> <MDBCardLink href='https://github.com/Dcastro99'>GitHub</MDBCardLink></MDBListGroupItem>
        <MDBListGroupItem><MDBCardLink href='#'>LinkedIn</MDBCardLink></MDBListGroupItem>
        <MDBListGroupItem><MDBCardLink href='#'>Twitter</MDBCardLink></MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
      <MDBCard>
      <MDBCardImage position='top' alt='...' src='https://avatars.githubusercontent.com/u/82287550?v=4' />
      <MDBCardBody>
        <MDBCardTitle>Sarah Teklemariam</MDBCardTitle>
        <MDBCardBody>
        Description      
        </MDBCardBody>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem> <MDBCardLink href='https://github.com/SarahTek'>GitHub</MDBCardLink></MDBListGroupItem>
        <MDBListGroupItem><MDBCardLink href='#'>LinkedIn</MDBCardLink></MDBListGroupItem>
        <MDBListGroupItem><MDBCardLink href='#'>Twitter</MDBCardLink></MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
    <MDBCard>
      <MDBCardImage position='top' alt='...' src='https://avatars.githubusercontent.com/u/98293148?v=4' />
      <MDBCardBody>
        <MDBCardTitle>Justin Mathieu</MDBCardTitle>
        <MDBCardBody>
        Description      
        </MDBCardBody>
      </MDBCardBody>
      <MDBListGroup flush>
        <MDBListGroupItem> <MDBCardLink href='https://github.com/Justin-Mathieu'>GitHub</MDBCardLink></MDBListGroupItem>
        <MDBListGroupItem><MDBCardLink href='#'>LinkedIn</MDBCardLink></MDBListGroupItem>
        <MDBListGroupItem><MDBCardLink href='#'>Twitter</MDBCardLink></MDBListGroupItem>
      </MDBListGroup>
    </MDBCard>
    </CardGroup>
        </AboutWrapper>
    </AboutContainer>
  )
}

export default About