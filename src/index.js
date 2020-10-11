import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// const store = createStore();

ReactDOM.render(
  // <Provider>
  <App />,
  /* </Provider>, */ document.getElementById('root')
);
