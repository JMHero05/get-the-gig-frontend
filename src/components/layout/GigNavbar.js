import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import ActorLinks from './ActorLinks';
import CastingLinks from './CastingLinks';
import SignedOutLinks from './SignedOutLinks';

function GigNavbar(props) {
  const { user } = props;

  const castingLinks = user.agency ? <CastingLinks /> : <SignedOutLinks />;

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
        {/* <ActorLinks /> */}
        {castingLinks}
        {/* <SignedOutLinks /> */}
      </Container>
    </Navbar>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    user: state.auth.user,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps)(GigNavbar);
