import React from 'react';
import { connect } from 'react-redux';
import { getGig } from '../redux/actions/gigActions';
import { useHistory } from 'react-router-dom';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';

function GigCard(props) {
  const { gig } = props;
  let history = useHistory();

  const clickHandler = (id) => {
    props.getGig(id);
    history.push(`/gigs/${id}`);
  };

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
              <Button variant='link' onClick={() => clickHandler(gig.id)}>
                <Card.Title>{gig.title}</Card.Title>
              </Button>
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
                {gig.casting_director.name}
              </Card.Subtitle>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return { getGig: (gig) => dispatch(getGig(gig)) };
};

export default connect(null, mapDispatchToProps)(GigCard);
