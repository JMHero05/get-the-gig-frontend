import {
  GET_ACTOR_AUDITIONS,
  CREATE_AUDITION,
  GET_GIG_AUDITIONS,
  PATCH_AUDITION,
} from '../constants/actionTypes';

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
    case CREATE_AUDITION:
      console.log('CREATED AUDITION', action.audition);
      return state;
    case GET_GIG_AUDITIONS:
      console.log('GET GIG AUDITIONS');
      return {
        ...state,
        auditions: action.payload,
      };
    case PATCH_AUDITION:
      console.log('PATCHING AUDITION');
      let stateAuditionCopy = [...state.auditions];
      let roleIndexArray = stateAuditionCopy.map((role) =>
        role.auditions.findIndex(
          (audition) => audition.id === action.payload.id
        )
      );
      let roleIndex = roleIndexArray.findIndex((index) => index > -1);
      let foundAuditionIndex = stateAuditionCopy[roleIndex].auditions.findIndex(
        (audition) => audition.id === action.payload.id
      );
      stateAuditionCopy[roleIndex].auditions.splice(
        foundAuditionIndex,
        1,
        action.payload
      );
      return {
        ...state,
        auditions: stateAuditionCopy,
      };
    default:
      return state;
  }
};

export default auditionReducer;
