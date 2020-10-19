import React from 'react';
import moment from 'moment';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { getGig } from '../redux/actions/gigActions';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import RoleCard from './RoleCard';

function GigDetails(props) {
  const { gig, user } = props;

  if (!user) return <Redirect to='/signin' />;

  if (gig && gig.id === parseInt(props.match.params.id)) {
    return (
      <>
        <Jumbotron className='py-2' fluid>
          <Container>
            <Row className='justify-content-center'>
              <h1>{gig.title}</h1>
            </Row>
            <Row className='justify-content-center'>
              <h3>{gig.gig_location}</h3>
            </Row>
            <Row className='justify-content-center'>
              <h5>
                {moment(gig.opening_date).format('MMM Do, YYYY')} -{' '}
                {moment(gig.closing_date).format('MMM Do, YYYY')}
              </h5>
            </Row>
            <hr className='my-4' />
            <Row>
              <Col>
                <div>
                  <strong>Producer: </strong> {gig.producer}
                </div>
              </Col>
              <Col>
                <div>
                  <strong>Casting Agency: </strong>
                  {gig.casting_director.agency}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <strong>Director: </strong> {gig.director}
                </div>
              </Col>
              <Col>
                <div>
                  <strong>Starting Pay: </strong>
                  {gig.pay_rate}
                </div>
              </Col>
            </Row>
            <Row>
              {gig.choreographer ? (
                <Col>
                  <div>
                    <strong>Choreographer: </strong>
                    {gig.choreographer}
                  </div>
                </Col>
              ) : null}
              {gig.union ? (
                <Col>
                  <div>
                    <strong>Union</strong>
                  </div>
                </Col>
              ) : (
                <Col>
                  <div>
                    <strong>Non-Union</strong>
                  </div>
                </Col>
              )}
            </Row>
            <Row>
              {gig.music_director ? (
                <Col>
                  <div>
                    <strong>Music Director: </strong>
                    {gig.music_director}
                  </div>
                </Col>
              ) : null}
              <Col>
                <div>
                  <strong>Production Type: </strong>
                  {gig.gig_type}
                </div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container>
          <Row className='justify-content-center'>
            <div>Casting Director: {gig.casting_director.name}</div>
          </Row>
          <Row className='justify-content-center mb-3'>
            <Col>
              <div>
                Audition Date:{' '}
                {moment(gig.audition_date).format('MMM Do, YYYY')}
              </div>
            </Col>
            <Col>
              <div>Audition Location: {gig.audition_location}</div>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className='mb-5'>
            {gig.roles &&
              gig.roles.map((role) => <RoleCard role={role} key={role.id} />)}
          </div>
        </Container>
      </>
    );
  } else {
    return (
      <div>
        <h5>Loading gig...</h5>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gig: state.gig.gig,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getGig: (gig) => dispatch(getGig(gig)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(GigDetails);
