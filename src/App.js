import React, { Component } from 'react';
import { connect } from 'react-redux';
import { validToken } from './redux/actions/authAction';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CastingRegistration from './components/CastingRegistration';
import ActorRegistration from './components/ActorRegistration';
import SignIn from './components/SignIn';
import GigNavbar from './components/layout/GigNavbar';
import GigContainer from './containers/GigContainer';
import CreateGig from './components/CreateGig';
import GigDetails from './components/GigDetails';
import CastingProfile from './components/CastingProfile';

class App extends Component {
  componentDidMount() {
    this.props.validToken();
  }

  render() {
    return (
      <BrowserRouter>
        <GigNavbar />
        <Switch>
          <Route path='/home' render={() => <Home />} />
          <Route path='/signin' render={() => <SignIn />} />
          <Route
            path='/casting_director/registration'
            render={() => <CastingRegistration />}
          />
          <Route
            path='/casting_director/profile'
            render={() => <CastingProfile />}
          />
          <Route
            path='/actor/registration'
            render={() => <ActorRegistration />}
          />
          <Route path='/gigs/create' component={CreateGig} />
          <Route path='/gigs/:id' component={GigDetails} />
          <Route path='/gigs' render={() => <GigContainer />} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    validToken: () => dispatch(validToken()),
  };
};

export default connect(null, mapDispatchToProps)(App);
