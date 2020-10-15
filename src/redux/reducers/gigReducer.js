import {
  GET_GIGS,
  GET_GIG,
  CREATE_GIG,
  CREATE_GIG_ERROR,
} from '../constants/actionTypes';

const initState = {
  gigs: [],
  gig: null,
};

const gigReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_GIGS:
      return { ...state, gigs: action.payload };
    case GET_GIG:
      return {
        ...state,
        gig: action.payload,
      };
    case CREATE_GIG:
      console.log('created gig', action.gig);
      return state;
    case CREATE_GIG_ERROR:
      console.log('create project error', action.error);
      return state;
    default:
      return state;
  }
};

export default gigReducer;
