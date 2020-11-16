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
        <NavLink to='/profile'>
          <Button variant='link'>Projects</Button>
        </NavLink>
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
