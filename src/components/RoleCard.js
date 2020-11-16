import React, { Component } from 'react';
import {
  Card,
  Row,
  Col,
  Container,
  Button,
  Nav,
  Collapse,
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import { setHours } from 'date-fns';
import moment from 'moment';
import { Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createAudition } from '../redux/actions/auditionAction';

class RoleCard extends Component {
  state = {
    audition: {
      actor_id: this.props.actorId,
      role_id: this.props.role.id,
      time: setHours(new Date(this.props.auditionDate), 9),
      location: this.props.auditionLocation,
      date: this.props.auditionDate,
    },
    open: false,
  };
  // const [open, setOpen] = useState(false);

  openAuditionForm = () => {
    if (this.state.open) {
      return this.setState({
        open: false,
      });
    }
    this.setState({
      open: true,
    });
  };

  handleAuditionTimeChange = (time) => {
    console.log(time);
    let auditionState = { ...this.state.audition };
    auditionState.time = time;
    this.setState({
      audition: auditionState,
    });
  };

  handleAuditionSubmit = (e) => {
    e.preventDefault();
    this.props.createAudition(this.state.audition);
    this.setState({
      open: false,
    });
  };

  render() {
    const { role } = this.props;
    console.log(this.props);

    return (
      <Card className='mb-3' style={{ width: '100%' }}>
        <Card.Header as='h5'>
          {role.name} - {role.role_type}
        </Card.Header>
        <Card.Body>
          <Card.Text>{role.description}</Card.Text>
          <Card.Title as='h6'>Seeking:</Card.Title>
          <Card.Text className='mb-0'>{role.gender}</Card.Text>
          <Card.Text className='mt-0'>
            Age: {role.beg_age_range} - {role.end_age_range}
          </Card.Text>
          {this.props.user.gender ? (
            <>
              <Button
                variant='primary'
                onClick={() => this.openAuditionForm()}
                aria-controls='example-collapse-text'
                aria-expanded={this.state.open}
                className='mb-3'>
                Request Audition
              </Button>
              <Collapse in={this.state.open}>
                <div id='example-collapse-text' className='mt-3'>
                  <h5>Audition Request Form</h5>
                  <Form onSubmit={this.handleAuditionSubmit}>
                    <Form.Row>
                      <Form.Group as={Col}>
                        <Form.Label>Audition Location</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder={this.state.audition.location}
                          readOnly
                        />
                      </Form.Group>

                      <Form.Group as={Col}>
                        <Form.Label>Audition Date</Form.Label>
                        <Form.Control
                          type='text'
                          placeholder={moment(this.state.audition.date).format(
                            'MMM Do, YYYY'
                          )}
                          readOnly
                        />
                      </Form.Group>

                      <Form.Group as={Col} controlId='formGridClosing'>
                        <Form.Label className='mr-2'>Audition Time</Form.Label>
                        <DatePicker
                          selected={this.state.audition.time}
                          onChange={(time) =>
                            this.handleAuditionTimeChange(time)
                          }
                          name='audition_time'
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={10}
                          timeCaption='Time'
                          dateFormat='h:mm aa'
                          minTime={setHours(
                            Date.parse(this.state.audition.date),
                            9
                          )}
                          maxTime={setHours(
                            Date.parse(this.state.audition.date),
                            18
                          )}
                        />
                      </Form.Group>

                      <Button variant='outline-success' type='submit'>
                        Submit Audition Request
                      </Button>
                    </Form.Row>
                  </Form>
                </div>
              </Collapse>
            </>
          ) : null}
        </Card.Body>
      </Card>
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
    createAudition: (audition) => dispatch(createAudition(audition)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleCard);
