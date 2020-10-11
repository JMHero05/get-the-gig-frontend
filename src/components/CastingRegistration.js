import React from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap';
import { states } from '../helpers/state.js';

export default function CastingSignUp() {
  return (
    <Container className='m-5'>
      <h1>Casting Director Registration</h1>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId='formGridName'>
            <Form.Label>Name</Form.Label>
            <Form.Control name='name' placeholder='Enter Name' />
          </Form.Group>

          <Form.Group as={Col} controlId='formGridAgency'>
            <Form.Label>Agency Name</Form.Label>
            <Form.Control name='agency' placeholder='Agency Name' />
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
            <Form.Control name='email' type='email' placeholder='Enter Email' />
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
