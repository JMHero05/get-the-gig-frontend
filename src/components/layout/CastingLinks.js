import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';

export default function CastingLinks() {
  return (
    <Nav>
      <NavLink to='/'>
        <Nav.Link className='mr-2'>New Project</Nav.Link>
      </NavLink>
      <NavLink to='/'>
        <Nav.Link className='mr-2'>Projects</Nav.Link>
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
