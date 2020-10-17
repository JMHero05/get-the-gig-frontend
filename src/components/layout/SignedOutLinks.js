import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';

export default function ActorLinks() {
  return (
    <Nav>
      <NavLink to='/signin'>
        <Button variant='link'>Sign In</Button>
      </NavLink>
    </Nav>
  );
}
