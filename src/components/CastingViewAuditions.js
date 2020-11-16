import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getGigAuditions } from '../redux/actions/auditionAction';
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
} from 'react-bootstrap';
import moment from 'moment';
import AuditionRoleRequestCard from './AuditionRoleRequestCard';

export const CastingViewAuditions = (props) => {
  const { user, getGigAuditions, auditions } = props;
  const gigId = props.match.params.id;

  const style = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  };
  console.log(props);
  useEffect(() => {
    getGigAuditions(gigId);
  }, [getGigAuditions, gigId]);

  if (!user) {
    return <Redirect to='/signin' />;
  } else if (user && user.gender) {
    return <Redirect to='/gigs' />;
  } else if (auditions.length === 0) {
    // debugger;
    return (
      <div style={style}>
        <Spinner animation='border' variant='primary' />
      </div>
    );
  } else {
    // debugger;
    return auditions.length !== 0 && auditions[0].gig.id !== parseInt(gigId) ? (
      <div style={style}>
        <Spinner animation='border' variant='primary' />
      </div>
    ) : (
      <>
        <Jumbotron className='py-2' fluid>
          <Container>
            <Row className='justify-content-center'>
              <h1>{auditions[0].gig.title}</h1>
            </Row>
            <Row className='justify-content-center'>
              <h3>{auditions[0].gig.gig_location}</h3>
            </Row>
            <Row className='justify-content-center'>
              <h5>
                {moment(auditions[0].gig.opening_date).format('MMM Do, YYYY')} -{' '}
                {moment(auditions[0].gig.closing_date).format('MMM Do, YYYY')}
              </h5>
            </Row>
          </Container>
        </Jumbotron>
        <Container>
          <Row className='justify-content-center mb-3'>
            <h1>Roles</h1>
          </Row>
          <AuditionRoleRequestCard />
        </Container>
      </>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    auditions: state.audition.auditions,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getGigAuditions: (id) => dispatch(getGigAuditions(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CastingViewAuditions);
