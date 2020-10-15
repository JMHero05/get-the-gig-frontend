import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  VALID_TOKEN,
  SIGNOUT_SUCCESS,
  REGISTRATION_ERROR,
  REGISTRATION_SUCCESS,
} from '../constants/actionTypes';

const initState = {
  authError: null,
  user: '',
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case VALID_TOKEN:
      return {
        ...state,
        user: action.user,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        authError: 'Login failed',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        authError: null,
        user: action.user,
      };
    case SIGNOUT_SUCCESS:
      console.log('signout success');
      localStorage.removeItem('token');
      return { ...state, user: '' };
    case REGISTRATION_ERROR:
      return {
        ...state,
        authError: 'Registration failed',
      };
    case REGISTRATION_SUCCESS:
      console.log(action);
      return {
        ...state,
        authError: null,
        user: action.user,
      };
    default:
      return state;
  }
};

export default authReducer;
