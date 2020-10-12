import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container } from 'react-bootstrap';
import ActorLinks from './ActorLinks';
import CastingLinks from './CastingLinks';
import SignedOutLinks from './SignedOutLinks';

export default function GigNavbar() {
  return (
    <Navbar bg='dark' variant='dark' sticky='top' className='mb-5'>
      <Container>
        <Link to='/home'>
          <Navbar.Brand>Gig</Navbar.Brand>
        </Link>
        <ActorLinks />
        {/* <CastingLinks /> */}
        {/* <SignedOutLinks /> */}
      </Container>
    </Navbar>
  );
}
