import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actorRegistration } from '../redux/actions/authAction';
import { Redirect } from 'react-router-dom';
import { Form, Col, Button, Container, FormFile } from 'react-bootstrap';
import { states } from '../helpers/states';
import { gender } from '../helpers/gender';

class ActorRegistration extends Component {
  state = {
    first_name: '',
    last_name: '',
    gender: '',
    image: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let actor = this.state;
    this.props.actorRegistration(actor);
  };

  render() {
    const { user, authError } = this.props;

    if (user) return <Redirect to='/gigs' />;

    return (
      <Container className='m-5'>
        <h1>Actor Registration</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridFirst'>
              <Form.Label>First Name</Form.Label>
              <Form.Control
                name='first_name'
                placeholder='First Name'
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridAgency'>
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                name='last_name'
                placeholder='Last Name'
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridGender'>
              <Form.Label>Gender</Form.Label>
              <Form.Control
                name='gender'
                as='select'
                defaultValue='Choose...'
                onChange={this.handleChange}>
                {gender}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridHeadshot'>
              <Form.Label>Headshot</Form.Label>
              <Form.Control
                name='image'
                placeholder='Image URL...'
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
                onChange={this.handleChange}
                name='state'>
                {states}
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId='formGridZip'>
              <Form.Label>Zip</Form.Label>
              <Form.Control onChange={this.handleChange} name='zip' />
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
          <div className='text-danger center'>
            {authError ? <p>{authError}</p> : null}
          </div>
        </Form>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    authError: state.auth.authError,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actorRegistration: (actor) => dispatch(actorRegistration(actor)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ActorRegistration);
