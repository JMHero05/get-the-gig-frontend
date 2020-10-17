import React from 'react';
import { connect } from 'react-redux';
import { signOut } from '../../redux/actions/authAction';
import { NavLink } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';

function CastingLinks(props) {
  return (
    <>
      <Nav>
        <NavLink to='/gigs/create'>
          <Button variant='link'>New Project</Button>
        </NavLink>
        <NavLink to='/casting_director/profile'>
          <Button variant='link'>Projects</Button>
        </NavLink>
        <Nav.Link>
          <Button variant='outline-secondary' className='ml-2'>
            JM
          </Button>
        </Nav.Link>
        <Button variant='link' onClick={props.signOut}>
          Sign Out
        </Button>
      </Nav>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

export default connect(null, mapDispatchToProps)(CastingLinks);
