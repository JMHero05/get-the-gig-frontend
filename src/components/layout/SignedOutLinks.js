import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav } from 'react-bootstrap';

export default function ActorLinks() {
  return (
    <Nav>
      <Nav.Link className='mr-2'>
        <NavLink to='/signin'>Sign In</NavLink>
      </Nav.Link>
    </Nav>
  );
}
