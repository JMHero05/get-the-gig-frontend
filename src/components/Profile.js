import React, { useEffect } from 'react';
import { Jumbotron, Container, Button, Row, Col, Image } from 'react-bootstrap';
import { Redirect, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import ProjectCard from './ProjectCard';
import AuditionCard from './AuditionCard';
import { getActorAuditions } from '../redux/actions/auditionAction';
import '../styles/profile.css';

const Profile = (props) => {
  const { user, auditions, gigs, fetchAuditions } = props;
  let history = useHistory();

  if (!user) return <Redirect to='/signin' />;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    if (user && user.gender) {
      fetchAuditions(user.id);
    }
  }, [fetchAuditions, user]);

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
      return auditions && auditions.length < 1
        ? null
        : auditions &&
            auditions.map((audition) => (
              <AuditionCard
                gig={gigs.find((gig) => gig.id === audition.role.gig_id)}
                key={audition.id}
                audition={audition}
              />
            ));
    }
  }

  return (
    <>
      <Jumbotron>
        <Row>
          {user && user.gender ? (
            <Image src={user.image} fluid rounded className='headshot' />
          ) : null}
        </Row>
        <Row>
          <h1 className='display-4'>
            Hi {user && user.agency ? user.name : user.first_name}!
          </h1>
        </Row>
        <hr />
        <div>{userProfileRender(user, gigs, auditions)}</div>
      </Jumbotron>
      <Container>
        <div className='band'>
          {userGigsOrAuditionsRender(user, gigs, auditions)}
        </div>
      </Container>
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

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAuditions: (id) => dispatch(getActorAuditions(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
