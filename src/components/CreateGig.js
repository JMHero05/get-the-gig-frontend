import React, { Component } from 'react';
import { createGig } from '../redux/actions/gigActions';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import addDays from 'date-fns/addDays';
import 'react-datepicker/dist/react-datepicker.css';
import { Form, Col, Button, Container, FormFile } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { gender } from '../helpers/gender';

class CreateGig extends Component {
  state = {
    casting_director_id: this.props.user ? this.props.user.id : null,
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
    roles: [
      {
        name: '',
        role_type: '',
        description: '',
        gender: '',
        beg_age_range: '',
        end_age_range: '',
      },
    ],
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

  handleRoleChangeInput = (index, e) => {
    const values = [...this.state.roles];
    values[index][e.target.name] = e.target.value;
    this.setState({
      roles: values,
    });
  };

  handleAddRole = () => {
    this.setState({
      roles: [
        ...this.state.roles,
        {
          name: '',
          role_type: '',
          description: '',
          gender: '',
          beg_age_range: '',
          end_age_range: '',
        },
      ],
    });
  };

  handleRemoveRole = () => {
    const values = [...this.state.roles];
    values.splice(-1, 1);
    this.setState({
      roles: values,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let gig = {
      casting_director_id: this.state.casting_director_id,
      title: this.state.title,
      gig_type: this.state.gig_type,
      union: this.state.union,
      producer: this.state.producer,
      director: this.state.director,
      choreographer: this.state.choreographer,
      music_director: this.state.music_director,
      opening_date: this.state.opening_date,
      closing_date: this.state.closing_date,
      gig_location: this.state.gig_location,
      pay_rate: this.state.pay_rate,
      audition_date: this.state.audition_date,
      audition_location: this.state.audition_location,
    };
    let roles = this.state.roles;
    this.props.createGig(gig, roles);
    this.props.history.push('/gigs');
  };

  render() {
    const { user } = this.props;

    if (!user) {
      return <Redirect to='/signin' />;
    } else if (!user.agency) {
      return <Redirect to='/gigs' />;
    }

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
            <Form.Group as={Col} controlId='formGridOpening'>
              <Form.Label className='mr-2'>Opening Date</Form.Label>
              <DatePicker
                selected={this.state.opening_date}
                onChange={this.handleOpeningDateChange}
                minDate={new Date()}
                name='opening_date'
                dateFormat='MM/dd/yyyy'
              />
            </Form.Group>

            <Form.Group as={Col} controlId='formGridClosing'>
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
            <Form.Group as={Col} controlId='formGridClosing'>
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
          <hr className='my-4' />
          <Form.Row>
            {this.state.roles.length === 1 ? (
              <h3 id='dynamicInput' className='mr-4'>
                Add {this.state.roles.length} Role
              </h3>
            ) : (
              <h3 id='dynamicInput' className='mr-4'>
                Add {this.state.roles.length} Roles
              </h3>
            )}
            <Button
              variant='outline-danger'
              className='mr-3'
              onClick={() => this.handleRemoveRole()}>
              -
            </Button>
            <Button
              variant='outline-success'
              onClick={() => this.handleAddRole()}>
              +
            </Button>
          </Form.Row>
          <br />
          {this.state.roles.map((role, index) => (
            <Container key={index}>
              <h5>Role {index + 1}</h5>
              <Form.Row key={index + 1}>
                <Form.Group as={Col}>
                  <Form.Label>Character Name</Form.Label>
                  <Form.Control
                    name='name'
                    value={role.name}
                    onChange={(e) =>
                      this.handleRoleChangeInput(index, e)
                    }></Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Character Type</Form.Label>
                  <Form.Control
                    name='role_type'
                    placeholder='i.e. Principal, Ensemble, Supporting, etc...'
                    value={role.role_type}
                    onChange={(e) =>
                      this.handleRoleChangeInput(index, e)
                    }></Form.Control>
                </Form.Group>
              </Form.Row>
              <Form.Row key={index + 2}>
                <Form.Group as={Col}>
                  <Form.Label>Character Description</Form.Label>
                  <Form.Control
                    as='textarea'
                    name='description'
                    value={role.description}
                    onChange={(e) =>
                      this.handleRoleChangeInput(index, e)
                    }></Form.Control>
                </Form.Group>
              </Form.Row>
              <hr className='my-4' />
              <Form.Label>Seeking</Form.Label>
              <Form.Row key={index + 3}>
                <Form.Group as={Col} controlId='formGridGender'>
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    name='gender'
                    as='select'
                    value={role.gender}
                    onChange={(e) => this.handleRoleChangeInput(index, e)}>
                    {gender}
                  </Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Beginning Age Range</Form.Label>
                  <Form.Control
                    name='beg_age_range'
                    type='number'
                    value={role.beg_age_range}
                    onChange={(e) =>
                      this.handleRoleChangeInput(index, e)
                    }></Form.Control>
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Ending Age Range</Form.Label>
                  <Form.Control
                    name='end_age_range'
                    type='number'
                    value={role.end_age_range}
                    onChange={(e) =>
                      this.handleRoleChangeInput(index, e)
                    }></Form.Control>
                </Form.Group>
              </Form.Row>
              <hr className='my-4' />
            </Container>
          ))}

          {this.state.roles.length === 1 ? (
            <Button variant='primary' type='submit' className='mt-5'>
              Submit Gig with {this.state.roles.length} Role
            </Button>
          ) : (
            <Button variant='primary' type='submit' className='mt-5'>
              Submit Gig with {this.state.roles.length} Roles
            </Button>
          )}
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
    createGig: (gig, roles) => dispatch(createGig(gig, roles)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGig);
