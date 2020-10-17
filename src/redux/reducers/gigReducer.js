import {
  GET_GIGS,
  GET_GIG,
  CREATE_GIG,
  CREATE_GIG_ERROR,
  DELETE_GIG,
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
    case DELETE_GIG:
      return {
        ...state,
        gigs: state.gigs.filter((gig) => gig.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default gigReducer;
