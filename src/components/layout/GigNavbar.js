import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import ActorLinks from './ActorLinks';
import CastingLinks from './CastingLinks';
import SignedOutLinks from './SignedOutLinks';

function GigNavbar(props) {
  const { user } = props;

  return (
    <Navbar bg='dark' variant='dark' sticky='top'>
      <Container>
        {user ? (
          <Link to='/gigs'>
            <Navbar.Brand>Gig</Navbar.Brand>
          </Link>
        ) : (
          <Link to='/home'>
            <Navbar.Brand>Gig</Navbar.Brand>
          </Link>
        )}
        {routeHelper(user)}
      </Container>
    </Navbar>
  );
}

const routeHelper = (user) => {
  if (user && user.agency) {
    return <CastingLinks />;
  } else if (user && user.gender) {
    console.log('actor links');
    return <ActorLinks />;
  } else {
    console.log('signed out links');
    return <SignedOutLinks />;
  }
};

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps)(GigNavbar);
