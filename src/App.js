import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CastingRegistration from './components/CastingRegistration';
import ActorRegistration from './components/ActorRegistration';
import SignIn from './components/SignIn';
import GigNavbar from './components/layout/GigNavbar';
import GigContainer from './containers/GigContainer';

function App() {
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
          path='/actor/registration'
          render={() => <ActorRegistration />}
        />
        <Route path='/gigs' render={() => <GigContainer />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
