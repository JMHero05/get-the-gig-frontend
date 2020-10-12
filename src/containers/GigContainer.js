import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import Gig from '../components/Gig';

export class GigContainer extends Component {
  render() {
    const { gigs } = this.props;
    return (
      <div className='gigContainer'>
        {gigs && gigs.map((gig) => <Gig gig={gig} key={gig.id} />)}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gigs: state.gig.gigs,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(GigContainer);
