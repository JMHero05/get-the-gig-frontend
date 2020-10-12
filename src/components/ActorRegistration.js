import React, { Component } from 'react';
import { Form, Col, Button, Container, FormFile } from 'react-bootstrap';
import { states } from '../helpers/state';
import { gender } from '../helpers/gender';

class ActorRegistration extends Component {
  render() {
    return (
      <Container className='m-5'>
        <h1>Actor Registration</h1>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridFirst'>
              <Form.Label>First Name</Form.Label>
              <Form.Control name='firstName' placeholder='First Name' />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridAgency'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control name='lastName' placeholder='Last Name' />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridGender'>
              <Form.Label>Gender</Form.Label>
              <Form.Control name='gender' as='select' defaultValue='Choose...'>
                {gender}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridHeadshot'>
              <Form.Label>Headshot</Form.Label>
              <Form.Control name='headshot' placeholder='Image URL...' />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId='formGridAddress1'>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder='1234 Main St' />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>City</Form.Label>
              <Form.Control />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>State</Form.Label>
              <Form.Control as='select' defaultValue='Choose...'>
                {states}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridZip'>
              <Form.Label>Zip</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name='email'
                type='email'
                placeholder='Enter Email'
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name='password'
                type='password'
                placeholder='Password'
              />
            </Form.Group>
          </Form.Row>

          <Button variant='primary' type='submit'>
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default ActorRegistration;
