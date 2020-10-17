import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/authAction';
import { NavLink } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';

function CastingLinks(props) {
  console.log(props);
  return (
    <>
      <Nav>
        <Nav.Link className='mr-2'>
          <NavLink to='/gigs/create'>New Project</NavLink>
        </Nav.Link>
        <Nav.Link className='mr-2'>
          <NavLink to='/casting_director/profile'>Projects</NavLink>
        </Nav.Link>
        <Nav.Link>
          <Button variant='outline-secondary' className='ml-2'>
            JM
          </Button>
        </Nav.Link>
      </Nav>
      <Button onClick={props.signOut}>Sign Out</Button>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(CastingLinks);
