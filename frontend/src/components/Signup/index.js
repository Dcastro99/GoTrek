import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Signup.css'
import axios from "axios";

import { SignupContainer, SignupWrapper, Title } from './SignupElements';


export default function Signup() {

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  function validateForm() {

    return email.length > 0 && password.length > 0;

  }
  async function handleSubmit(event) {
    event.preventDefault();
    // axios, or built in fetch.
    // email, password
    const data = {
      email,
      password
    }
    try {
      const response = await axios.post('localhost:3000/signin', JSON.stringify(data));
      // do repsonse stuff
      // set is logged in, or online etc, so other pages can / can't be accesible.
    } catch (error) {
      // do error stuff
    }


  }

  return (
    //onSubmit={this.handleSubmit}
    <SignupContainer>
      <SignupWrapper>
        <Title>
          <h1 id='titleSignUp'>Signup</h1>
        </Title>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </Form.Group>

          <Button id="button"
            variant="primary"
            type="submit"
            disabled={!validateForm()}>
            Submit
          </Button>
        </Form>
      </SignupWrapper>
    </SignupContainer>
  )
}
