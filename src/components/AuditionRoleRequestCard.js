import React, { useState } from 'react';
import { connect } from 'react-redux';
import { patchAudition } from '../redux/actions/auditionAction';
import {
  Jumbotron,
  Container,
  Row,
  Card,
  Button,
  Col,
  Spinner,
  Tabs,
  Tab,
  Nav,
  Carousel,
} from 'react-bootstrap';
import '../styles/slides.css';
import moment from 'moment';

function AuditionRoleRequestCard(props) {
  const { auditions, patchAudition } = props;

  console.log(auditions);

  return (
    auditions &&
    auditions.map((role) => (
      <Card className='mb-3' key={role.id}>
        <Tab.Container id='controlled-tab-example' defaultActiveKey='role'>
          <Card.Header>
            <Container>
              <Nav variant='tabs'>
                <Nav.Item>
                  <Nav.Link eventKey='role'>Role</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='requested'>Audition Requests</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='confirmed'>Confirmed Auditions</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='rejected'>Rejected Auditions</Nav.Link>
                </Nav.Item>
              </Nav>
            </Container>
          </Card.Header>
          <Card.Body>
            <Tab.Content>
              <Tab.Pane eventKey='role'>
                <Card.Title>{role.name}</Card.Title>
                <Card.Text>{role.description}</Card.Text>
                <Card.Title as='h6'>Seeking:</Card.Title>
                <Card.Text className='mb-0'>{role.gender}</Card.Text>
                <Card.Text className='mt-0'>
                  Age: {role.beg_age_range} - {role.end_age_range}
                </Card.Text>
              </Tab.Pane>
              {renderAuditionRequests(role, 'requested')}
              {renderAuditionRequests(role, 'confirmed')}
              {renderAuditionRequests(role, 'rejected')}
            </Tab.Content>
          </Card.Body>
        </Tab.Container>
        <Card.Footer></Card.Footer>
      </Card>
    ))
  );

  function auditionClickHandler(e, id) {
    console.log(`clicked ID #${id}`);
    if (e.target.innerText.indexOf('Confirm') !== -1) {
      let patch = {
        requested: false,
        confirmed: true,
        rejected: false,
      };
      patchAudition(id, patch);
    } else {
      let patch = {
        requested: false,
        confirmed: false,
        rejected: true,
      };
      patchAudition(id, patch);
    }
  }

  function renderAuditionRequests(role, type) {
    // debugger;
    return (
      <Tab.Pane eventKey={type}>
        {role.auditions.length === 0 ? (
          <h1>No auditions have been {type}</h1>
        ) : (
          <Carousel interval={null}>
            {role.auditions.map((audition) =>
              audition[type] ? (
                <Carousel.Item key={audition.id} className='slides'>
                  <Row>
                    <Col>
                      <img
                        className='d-block w-100'
                        src={audition.actor.image}
                        alt={audition.actor.first_name}
                      />
                    </Col>
                    <Col className='mt-3'>
                      <h3>
                        {audition.actor.first_name} {audition.actor.last_name}
                      </h3>
                      <div>{moment(audition.time).format('h:mm a')}</div>
                      <div>{moment(audition.date).format('MMM Do, YYYY')}</div>
                      <Row className='mt-5'>
                        {type === 'requested' || type === 'rejected' ? (
                          <Button
                            variant='success'
                            className='mb-3'
                            onClick={(e) =>
                              auditionClickHandler(e, audition.id)
                            }>
                            Confirm Audition
                          </Button>
                        ) : null}
                      </Row>
                      <Row className='mt-2'>
                        {type === 'requested' || type === 'confirmed' ? (
                          <Button
                            variant='danger'
                            onClick={(e) =>
                              auditionClickHandler(e, audition.id)
                            }>
                            Reject Audition
                          </Button>
                        ) : null}
                      </Row>
                    </Col>
                  </Row>
                </Carousel.Item>
              ) : null
            )}
          </Carousel>
        )}
      </Tab.Pane>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auditions: state.audition.auditions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    patchAudition: (id, patch) => dispatch(patchAudition(id, patch)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuditionRoleRequestCard);
