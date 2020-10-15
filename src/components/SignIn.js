import React, { Component } from 'react';
import { connect } from 'react-redux';
import { castingSignIn } from '../redux/actions/authAction';
import { Form, Row, Col, Button, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class SignIn extends Component {
  state = {
    actorEmail: '',
    actorPassword: '',
    castingEmail: '',
    castingPassword: '',
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  actorHandleSubmit = (e) => {
    e.preventDefault();
    let actor = {
      email: this.state.actorEmail,
      password: this.state.actorPassword,
    };
    console.log(actor);
  };

  castingHandleSubmit = (e) => {
    e.preventDefault();
    let casting = {
      email: this.state.castingEmail,
      password: this.state.castingPassword,
    };
    this.props.castingSignIn(casting);
  };

  render() {
    const { authError, user } = this.props;

    if (user) return <Redirect to='/gigs' />;

    return (
      <Container className='m-5' fluid>
        <Row>
          <Col className='col-md-6'>
            <h5>Actor Sign In</h5>
            <Form onSubmit={this.actorHandleSubmit}>
              <Form.Group controlId='formActorEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name='actorEmail'
                  type='email'
                  placeholder='Actor Email'
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId='formActorPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name='actorPassword'
                  type='password'
                  placeholder='Password'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
            </Form>
          </Col>

          <Col className='col-md-6'>
            <h5>Casting Director Sign In</h5>
            <Form onSubmit={this.castingHandleSubmit}>
              <Form.Group controlId='formCastingEmail'>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  name='castingEmail'
                  type='email'
                  placeholder='Casting Director Email'
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Form.Group controlId='formCastingPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  name='castingPassword'
                  type='password'
                  placeholder='Password'
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Submit
              </Button>
              <div className='text-danger center'>
                {authError ? <p>{authError}</p> : null}
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    castingSignIn: (credentials) => dispatch(castingSignIn(credentials)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
