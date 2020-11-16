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
        <Card className='w-100 mb-3 card'>
          <Row className='align-items-center mx-1 my-1'>
            <div className='col'>
              <Row>
                <Card.Text className='text-muted'>Gig Dates:</Card.Text>
              </Row>
              <Row>
                <Card.Text className='mx-0 my-0'>
                  {moment(gig.opening_date).format('MMM Do, YYYY')} -{' '}
                  {moment(gig.closing_date).format('MMM Do, YYYY')}
                </Card.Text>
              </Row>
            </div>
            <div className='col'>
              <Button
                variant='link'
                // size='sm'
                onClick={() => clickHandler(gig.id)}>
                <span className='btn-text'>{gig.title}</span>
              </Button>
            </div>
            <div className='col'>
              <Row>
                <Card.Text className='text-muted'>Gig Location:</Card.Text>
              </Row>
              <Row>
                <Card.Text>{gig.gig_location}</Card.Text>
              </Row>
            </div>
            <div className='col'>
              <Row>
                <Card.Text className='text-muted'>Audition Date:</Card.Text>
              </Row>
              <Row>
                <Card.Text>
                  {moment(gig.audition_date).format('MMM Do, YYYY')}
                </Card.Text>
              </Row>
            </div>
            <div className='col'>
              <Row>
                <Card.Text className='text-muted'>Casting Director:</Card.Text>
              </Row>
              <Row>
                <Card.Text>{gig.casting_director.name}</Card.Text>
              </Row>
            </div>
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
