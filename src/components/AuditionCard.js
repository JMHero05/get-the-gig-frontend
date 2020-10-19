import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteGig } from '../redux/actions/gigActions';
import { Card, Row, Col, Container, Button, Nav } from 'react-bootstrap';

function AuditionCard(props) {
  const { gig, audition } = props;

  console.log('Audition', audition);

  return (
    <Card className='mb-3' style={{ width: '24rem' }}>
      <Card.Header>
        <Card.Title>{gig.title}</Card.Title>
        <hr className='my-4' />
        <Card.Subtitle className='text-muted mb-2'>
          Gig Location: {gig.gig_location}
        </Card.Subtitle>
        <Card.Subtitle className='text-muted mb-2'>
          Gig Dates: {moment(gig.opening_date).format('MMM Do, YYYY')}{' '}
          <strong>-</strong> {moment(gig.closing_date).format('MMM Do, YYYY')}
        </Card.Subtitle>
        <Card.Subtitle className='text-muted mb-2'>
          Casting Director: {gig.casting_director.name}
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Title>
          {audition.role.name} - {audition.role.role_type}
        </Card.Title>
        <Card.Text className='mb-0'>{audition.role.description}</Card.Text>
        <hr className='my-4' />
        <Card.Title as='h6'>Audition Information</Card.Title>
        <Card.Text className='my-0'>
          <strong>Location:</strong> {audition.location}
        </Card.Text>
        <Card.Text className='my-0'>
          <strong>Date:</strong> {moment(audition.date).format('MMM Do, YYYY')}
        </Card.Text>
        <Card.Text className='my-0'>
          <strong>Time:</strong> {moment(audition.time).format('h:mm:ss a')}
        </Card.Text>
        {/* <Row>
            <Button variant='outline-primary' className='mr-3'>
              View Auditions
            </Button>
            <Button
              variant='outline-danger'
              onClick={() => props.deletingGig(project.id)}>
              Delete Project
            </Button>
          </Row> */}
      </Card.Body>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletingGig: (id) => dispatch(deleteGig(id)),
  };
};

export default connect(null, mapDispatchToProps)(AuditionCard);
