import React, { Component } from 'react';
import { createGig } from '../redux/actions/gigActions';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Col, Button, Container, FormFile } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class CreateGig extends Component {
  state = {
    casting_director_id: this.props.user.id,
    title: '',
    gig_type: '',
    union: false,
    producer: '',
    director: '',
    choreographer: '',
    music_director: '',
    opening_date: new Date(),
    closing_date: addDays(new Date(), 7),
    gig_location: '',
    pay_rate: '',
    audition_date: new Date(),
    audition_location: '',
  };

  handleChange = (e) => {
    if (e.target.name === 'union') {
      this.setState({
        [e.target.name]: e.target.checked,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  handleOpeningDateChange = (date) => {
    this.setState({
      opening_date: date,
    });
  };

  handleClosingDateChange = (date) => {
    this.setState({
      closing_date: date,
    });
  };

  handleAuditionDateChange = (date) => {
    this.setState({
      audition_date: date,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let gig = this.state;
    this.props.createGig(gig);
  };

  render() {
    const { user } = this.props;

    if (!user.agency) return <Redirect to='/signin' />;

    return (
      <Container className='m-5'>
        <h1>Create Gig</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Row>
            <Form.Group as={Col} controlId='formGridTitle'>
              <Form.Label>Title</Form.Label>
              <Form.Control
                name='title'
                placeholder='Title of Gig'
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col}>
              <Form.Label>Gig Type</Form.Label>
              <Form.Control
                name='gig_type'
                key='formGridGigType'
                placeholder='i.e. Musical, Play, Film, etc...'
                onChange={this.handleChange}
              />
              <Form.Check
                className='mt-1'
                key='formGridUnion'
                type='checkbox'
                name='union'
                label='Is this a Union Gig?'
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridProducer'>
              <Form.Label>Producer</Form.Label>
              <Form.Control
                name='producer'
                placeholder='Producer'
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridDirector'>
              <Form.Label>Director</Form.Label>
              <Form.Control
                name='director'
                placeholder='Director'
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridChoreographer'>
              <Form.Label>Choreographer</Form.Label>
              <Form.Control
                name='choreographer'
                placeholder='Choreographer'
                onChange={this.handleChange}
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridMusicDirector'>
              <Form.Label>Music Director</Form.Label>
              <Form.Control
                name='music_director'
                placeholder='Music Director'
                onChange={this.handleChange}
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId='formGridOpening'>
              <Form.Label className='mr-2'>Opening Date</Form.Label>
              <DatePicker
                selected={this.state.opening_date}
                onChange={this.handleOpeningDateChange}
                minDate={new Date()}
                name='opening_date'
                dateFormat='MM/dd/yyyy'
              />
            </Form.Group>

            <Form.Group controlId='formGridClosing'>
              <Form.Label className='mr-2'>Closing Date</Form.Label>
              <DatePicker
                selected={this.state.closing_date}
                onChange={this.handleClosingDateChange}
                minDate={this.state.opening_date}
                maxDate={addDays(new Date(), 730)}
                name='closing_date'
                dateFormat='MM/dd/yyyy'
              />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} controlId='formGridGigLocation'>
              <Form.Label>Gig Location</Form.Label>
              <Form.Control name='gig_location' onChange={this.handleChange} />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridPayRate'>
              <Form.Label>Starting Pay Rate (per Week)</Form.Label>
              <Form.Control onChange={this.handleChange} name='pay_rate' />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId='formGridClosing'>
              <Form.Label className='mr-2'>Audition Date</Form.Label>
              <DatePicker
                selected={this.state.audition_date}
                onChange={this.handleAuditionDateChange}
                minDate={new Date()}
                maxDate={this.state.opening_date}
                name='audition_date'
                dateFormat='MM/dd/yyyy'
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridAuditionLocation'>
              <Form.Label>Audition Location</Form.Label>
              <Form.Control
                name='audition_location'
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

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createGig: (gig) => dispatch(createGig(gig)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGig);
