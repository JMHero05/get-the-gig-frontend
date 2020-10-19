import authReducer from './authReducer';
import gigReducer from './gigReducer';
import auditionReducer from './auditionReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  auth: authReducer,
  gig: gigReducer,
  audition: auditionReducer,
});

export default rootReducer;
