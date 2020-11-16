import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteGig, getGig } from '../redux/actions/gigActions';
import { Card, Row, Col, Container, Button, Nav } from 'react-bootstrap';

function ProjectCard(props) {
  const { project } = props;
  let history = useHistory();

  const clickHandler = (id) => {
    props.getGig(id);
    history.push(`/gigs/${id}/auditions`);
  };

  return (
    <Card className='mb-3' style={{ width: '100%', fontSize: '12px' }}>
      <Card.Header>
        <Card.Title>{project.title}</Card.Title>
        <hr className='my-4' />
        <Card.Subtitle className='text-muted mb-2'>
          Audition Location: {project.audition_location}
        </Card.Subtitle>
        <Card.Subtitle className='text-muted'>
          Audition Date: {moment(project.audition_date).format('MMM Do, YYYY')}
        </Card.Subtitle>
      </Card.Header>
      <Card.Body>
        <Card.Text className='mb-0'>
          <strong>Producer: </strong>
          {project.producer}
        </Card.Text>
        <Card.Text className='mb-0'>
          <strong>Director: </strong>
          {project.director}
        </Card.Text>
        {project.choreographer ? (
          <Card.Text className='mb-0'>
            <strong>Choreographer: </strong>
            {project.choreographer}
          </Card.Text>
        ) : null}
        {project.music_director ? (
          <Card.Text className='mb-0'>
            <strong>Music Director: </strong>
            {project.music_director}
          </Card.Text>
        ) : null}
        <hr className='my-4' />
        <Card.Title as='h6'>Production Dates:</Card.Title>
        <Card.Text className='mt-0'>
          {moment(project.opening_date).format('MMM Do, YYYY')}{' '}
          <strong>-</strong>{' '}
          {moment(project.closing_date).format('MMM Do, YYYY')}
        </Card.Text>
        <hr className='my-4' />
        <Row>
          <Button
            variant='outline-primary'
            className='mr-3'
            onClick={() => clickHandler(project.id)}>
            View Auditions
          </Button>
          <Button
            variant='outline-danger'
            onClick={() => props.deletingGig(project.id)}>
            Delete Project
          </Button>
        </Row>
      </Card.Body>
    </Card>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletingGig: (id) => dispatch(deleteGig(id)),
    getGig: (id) => dispatch(getGig(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProjectCard);
