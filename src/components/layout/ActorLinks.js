import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';

export default function ActorLinks() {
  return (
    <Nav>
      <NavLink to='/'>
        <Nav.Link className='mr-2'>Auditions</Nav.Link>
      </NavLink>
      <NavLink to='/'>
        <Nav.Link className='mr-2'>Sign Out</Nav.Link>
      </NavLink>
      <NavLink to='/'>
        <Button variant='outline-secondary' className='ml-2'>
          JM
        </Button>
      </NavLink>
    </Nav>
  );
}
