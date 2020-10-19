import { GET_ACTOR_AUDITIONS } from '../constants/actionTypes';

const initState = {
  auditions: [],
};

const auditionReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_ACTOR_AUDITIONS:
      console.log('GET ACTOR AUDITIONS');
      return {
        ...state,
        auditions: action.payload,
      };
    default:
      return state;
  }
};

export default auditionReducer;
