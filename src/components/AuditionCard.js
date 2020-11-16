import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteGig } from '../redux/actions/gigActions';
import { Card, Row, Col, Container, Button, Nav } from 'react-bootstrap';
import '../styles/profile.css';

function AuditionCard(props) {
  const { gig, audition } = props;

  console.log('Audition', audition);

  return (
    <>
      {audition.requested ? renderAuditionCards('primary', 'Request') : null}
      {audition.confirmed ? renderAuditionCards('success', 'Confirmed') : null}
      {audition.rejected ? renderAuditionCards('danger', 'Rejected') : null}
    </>
  );

  function renderAuditionCards(type, status) {
    // debugger;
    return (
      <Card
        bg={type}
        text='white'
        className='mb-3 card'
        style={{ width: '100%', fontSize: '12px' }}>
        <Card.Header>
          {status === 'Request' ? (
            <Card.Title>
              Audition Request <u>Received</u>
            </Card.Title>
          ) : (
            <Card.Title>
              Audition Request <u>{status}</u>
            </Card.Title>
          )}
        </Card.Header>
        <Card.Body className='py-0'>
          <Card.Title className='mt-2'>{gig.title}</Card.Title>
          <hr className='my-2' />
          <Card.Text className='mb-1'>
            <strong>Gig Location:</strong> {gig.gig_location}
          </Card.Text>
          <Card.Text className='mb-1'>
            <strong>Gig Dates:</strong>{' '}
            {moment(gig.opening_date).format('MMM Do, YYYY')} <strong>-</strong>{' '}
            {moment(gig.closing_date).format('MMM Do, YYYY')}
          </Card.Text>
          <Card.Text>
            <strong>Casting Director:</strong> {gig.casting_director.name}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <Card.Title className='mb-3'>Character Info</Card.Title>
          <Card.Text>
            {audition.role.name} - {audition.role.role_type}
          </Card.Text>
          <Card.Text className='mb-0'>
            <em>{audition.role.description}</em>
          </Card.Text>
          <hr />
          <Card.Title>Audition Information</Card.Title>
          <Card.Text className='my-0'>
            <strong>Location:</strong> {audition.location}
          </Card.Text>
          <Card.Text className='my-0'>
            <strong>Date:</strong>{' '}
            {moment(audition.date).format('MMM Do, YYYY')}
          </Card.Text>
          <Card.Text className='my-0'>
            <strong>Time:</strong> {moment(audition.time).format('h:mm a')}
          </Card.Text>
        </Card.Footer>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletingGig: (id) => dispatch(deleteGig(id)),
  };
};

export default connect(null, mapDispatchToProps)(AuditionCard);
