import React, { Component } from 'react';
import { Form, Col, Button, Container } from 'react-bootstrap';
import { states } from '../helpers/state.js';

class CastingRegistration extends Component {
  state = {
    name: '',
    agency: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    password: '',
  };

  handleChange = (e) => {
    console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let casting = {
      name: this.state.name,
      agency: this.state.agency,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip: this.state.zip,
      email: this.state.email,
      password: this.state.password,
    };
    console.log(casting);
  };

  render() {
    return (
      <Container className='m-5'>
        <h1>Casting Director Registration</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridName'>
              <Form.Label>Name</Form.Label>
              <Form.Control
                name='name'
                placeholder='Enter Name'
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridAgency'>
              <Form.Label>Agency Name</Form.Label>
              <Form.Control
                name='agency'
                placeholder='Agency Name'
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Group controlId='formGridAddress1'>
            <Form.Label>Address</Form.Label>
            <Form.Control
              name='address'
              placeholder='1234 Main St'
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridCity'>
              <Form.Label>City</Form.Label>
              <Form.Control name='city' onChange={this.handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridState'>
              <Form.Label>State</Form.Label>
              <Form.Control
                as='select'
                defaultValue='Choose...'
                name='state'
                onChange={this.handleChange}>
                {states}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridZip'>
              <Form.Label>Zip</Form.Label>
              <Form.Control name='zip' onChange={this.handleChange} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridEmail'>
              <Form.Label>Email</Form.Label>
              <Form.Control
                name='email'
                type='email'
                placeholder='Enter Email'
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name='password'
                type='password'
                placeholder='Password'
                onChange={this.handleChange}
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

export default CastingRegistration;
