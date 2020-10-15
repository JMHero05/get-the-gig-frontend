import React from 'react';
import { connect } from 'react-redux';
import { getGig } from '../redux/actions/gigActions';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import RoleDetails from './RoleDetails';

function GigDetails(props) {
  const { gig } = props;
  console.log(props);
  if (gig && gig.id === parseInt(props.match.params.id)) {
    return (
      <>
        <Jumbotron className='py-2' fluid>
          <Container>
            <Row className='justify-content-center'>
              <h1>{gig.title}</h1>
            </Row>
            <Row className='justify-content-center'>
              <h3>{gig.gig_location}</h3>
            </Row>
            <Row className='justify-content-center'>
              <h5>
                {gig.opening_date} - {gig.closing_date}
              </h5>
            </Row>
            <br />
            <Row>
              <Col>
                <div>
                  <strong>Producer: </strong> {gig.producer}
                </div>
              </Col>
              <Col>
                <div>
                  <strong>Casting Agency: </strong>
                  {gig.casting_director.agency}
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div>
                  <strong>Director: </strong> {gig.director}
                </div>
              </Col>
              <Col>
                <div>
                  <strong>Starting Pay: </strong>
                  {gig.pay_rate}
                </div>
              </Col>
            </Row>
            <Row>
              {gig.choreographer ? (
                <Col>
                  <div>
                    <strong>Choreographer: </strong>
                    {gig.choreographer}
                  </div>
                </Col>
              ) : null}
              {gig.union ? (
                <Col>
                  <div>
                    <strong>Union</strong>
                  </div>
                </Col>
              ) : (
                <Col>
                  <div>
                    <strong>Non-Union</strong>
                  </div>
                </Col>
              )}
            </Row>
            <Row>
              {gig.music_director ? (
                <Col>
                  <div>
                    <strong>Music Director: </strong>
                    {gig.music_director}
                  </div>
                </Col>
              ) : null}
              <Col>
                <div>
                  <strong>Production Type: </strong>
                  {gig.gig_type}
                </div>
              </Col>
            </Row>
          </Container>
        </Jumbotron>
        <Container>
          <Row className='justify-content-center'>
            <div>Casting Director: {gig.casting_director.name}</div>
          </Row>
          <Row className='justify-content-center mb-3'>
            <Col>
              <div>Audition Date: {gig.audition_date}</div>
            </Col>
            <Col>
              <div>Audition Location: {gig.audition_location}</div>
            </Col>
          </Row>
        </Container>
        <Container>
          <div className='mb-5'>
            {gig.roles &&
              gig.roles.map((role) => (
                <RoleDetails role={role} key={role.id} />
              ))}
          </div>
        </Container>
      </>
    );
  } else {
    return (
      <div>
        <h5>Loading gig...</h5>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gig: state.gig.gig,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getGig: (gig) => dispatch(getGig(gig)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(GigDetails);
