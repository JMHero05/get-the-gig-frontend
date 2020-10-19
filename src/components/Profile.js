import React from 'react';
import { Jumbotron, Container, Button } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard';
import AuditionCard from './AuditionCard';

const Profile = (props) => {
  const { user, auditions, gigs } = props;
  let history = useHistory();
  console.log('Auditions', auditions);
  console.log('Gigs', gigs);
  if (!user) return <Redirect to='/signin' />;

  function userProfileRender(user, gigs, auditions) {
    if (user && user.agency) {
      return gigs.find((gig) => gig.casting_director.id === user.id) ? (
        <p className='lead'>
          Your current/upcoming projects are listed below...
        </p>
      ) : (
        <>
          <p className='lead'>You have no upcoming auditions</p>
          <Button
            variant='outline-primary'
            onClick={() => history.push('/gigs/create')}>
            Create New Gig
          </Button>
        </>
      );
    } else {
      return auditions && auditions.length > 0 ? (
        <p className='lead'>
          Your current/upcoming projects are listed below...
        </p>
      ) : (
        <>
          <p className='lead'>You have no upcoming auditions</p>
          <Button
            variant='outline-primary'
            onClick={() => history.push('/gigs')}>
            Head Back to Gigs
          </Button>
        </>
      );
    }
  }

  function userGigsOrAuditionsRender(user, gigs, auditions) {
    if (user && user.agency) {
      return (
        gigs &&
        gigs.map((gig) =>
          gig.casting_director.id === user.id ? (
            <ProjectCard project={gig} key={gig.id} />
          ) : null
        )
      );
    } else {
      return (
        auditions &&
        auditions.map((audition) => (
          <AuditionCard
            gig={gigs.find((gig) => gig.id === audition.role.gig_id)}
            key={audition.id}
            audition={audition}
          />
        ))
      );
    }
  }

  return (
    <>
      <Jumbotron>
        <h1 className='display-4'>
          Hi {user && user.agency ? user.name : user.first_name}!
        </h1>
        <hr className='my-4' />
        {userProfileRender(user, gigs, auditions)}
      </Jumbotron>
      <Container>{userGigsOrAuditionsRender(user, gigs, auditions)}</Container>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    auditions: state.audition.auditions,
    gigs: state.gig.gigs,
  };
};

export default connect(mapStateToProps)(Profile);
