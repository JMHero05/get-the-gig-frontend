import { ACTOR_AUDITIONS } from '../../helpers/routes';
import { GET_ACTOR_AUDITIONS } from '../constants/actionTypes';

export const getActorAuditions = (id) => {
  return (dispatch, getState) => {
    fetch(ACTOR_AUDITIONS + id)
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: GET_ACTOR_AUDITIONS, payload: data }));
  };
};
