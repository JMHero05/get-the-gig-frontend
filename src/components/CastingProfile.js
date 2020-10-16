import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard';

const CastingProfile = (props) => {
  const { user, gigs } = props;

  if (!user) return <Redirect to='/signin' />;

  return (
    <>
      <Jumbotron>
        <h1 className='display-4'>Hi {user.name}!</h1>
        <hr className='my-4' />
        {user.gigs ? (
          <p className='lead'>
            Your current/upcoming projects are listed below...
          </p>
        ) : (
          <p className='lead'>You have no upcoming projects</p>
        )}
      </Jumbotron>
      <Container>
        {gigs &&
          gigs.map((gig) =>
            gig.casting_director.id === user.id ? (
              <ProjectCard project={gig} key={gig.id} />
            ) : null
          )}
      </Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    gigs: state.gig.gigs,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(CastingProfile);
