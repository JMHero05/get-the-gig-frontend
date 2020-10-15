import React from 'react';
import { Card, Row, Col, Container, Button, Nav } from 'react-bootstrap';

export default function RoleDetails(props) {
  const { role } = props;

  return (
    <Card className='mb-3'>
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
        <Button variant='primary'>Request Audition</Button>
      </Card.Body>
    </Card>
  );
}
