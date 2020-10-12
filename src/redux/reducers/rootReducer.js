import authReducer from './authReducer';
import gigReducer from './gigReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  gig: gigReducer,
});

export default rootReducer;
