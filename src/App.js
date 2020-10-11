import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import CastingRegistration from './components/CastingRegistration';
import ActorRegistration from './components/ActorRegistration';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/home' render={() => <Home />} />
        <Route
          path='/casting_director/registration'
          render={() => <CastingRegistration />}
        />
        <Route
          path='/actor/registration'
          render={() => <ActorRegistration />}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
