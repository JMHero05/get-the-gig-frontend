import React from 'react';
import moment from 'moment';
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
                {moment(gig.opening_date).format('MMM Do, YYYY')} -{' '}
                {moment(gig.closing_date).format('MMM Do, YYYY')}
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
              <Card.Text>
                {moment(gig.audition_date).format('MMM Do, YYYY')}
              </Card.Text>
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
