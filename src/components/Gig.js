import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';

export default function Gig({ gig }) {
  return (
    <>
      <Container>
        <Card className='w-100 mb-3' bg='light'>
          <Row className='align-items-center m-1'>
            <Col>
              <Card.Subtitle className='text-muted'>
                {gig.opening_date} - {gig.closing_date}
              </Card.Subtitle>
            </Col>
            <Col>
              <Card.Title>{gig.title}</Card.Title>
            </Col>
            <Col>
              <Card.Subtitle className='text-muted'>
                {gig.gig_location}
              </Card.Subtitle>
            </Col>
            <Col>
              <Card.Text>{gig.audition_date}</Card.Text>
            </Col>
            <Col>
              <Card.Subtitle className='text-muted'>
                {gig.casting_director_id}
              </Card.Subtitle>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}
