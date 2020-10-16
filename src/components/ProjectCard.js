import React from 'react';
import moment from 'moment';
import { Card, Row, Col, Container, Button, Nav } from 'react-bootstrap';

export default function ProjectCard(props) {
  const { project } = props;
  return (
    <Card className='mb-3' style={{ width: '18rem' }}>
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
        <Button variant='primary'>View Auditions</Button>
      </Card.Body>
    </Card>
  );
}