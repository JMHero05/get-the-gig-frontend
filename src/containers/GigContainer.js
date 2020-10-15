import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import GigCard from '../components/GigCard';
import { Redirect } from 'react-router-dom';
import { getGigs } from '../redux/actions/gigActions';

export class GigContainer extends Component {
  componentDidMount() {
    this.props.fetchGigs();
  }

  render() {
    const { gigs, user } = this.props;

    if (!user) return <Redirect to='/signin' />;

    return (
      <div className='gigContainer mt-4'>
        {gigs && gigs.map((gig) => <GigCard gig={gig} key={gig.id} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gigs: state.gig.gigs,
    user: state.auth.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return { fetchGigs: () => dispatch(getGigs()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(GigContainer);
