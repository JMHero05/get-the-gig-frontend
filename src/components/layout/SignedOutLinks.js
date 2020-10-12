import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function ActorLinks() {
  return (
    <Nav>
      <NavLink to='/'>
        <Nav.Link className='mr-2'>Sign In</Nav.Link>
      </NavLink>
    </Nav>
  );
}
