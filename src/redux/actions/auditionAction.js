import { ACTOR_AUDITIONS, AUDITION, GIG_AUDITIONS } from '../../helpers/routes';
import {
  GET_ACTOR_AUDITIONS,
  GET_GIG_AUDITIONS,
  PATCH_AUDITION,
} from '../constants/actionTypes';
import moment from 'moment';

export const getActorAuditions = (id) => {
  return (dispatch, getState) => {
    fetch(ACTOR_AUDITIONS + id)
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: GET_ACTOR_AUDITIONS, payload: data }));
  };
};

export const createAudition = (audition) => {
  return (dispatch, getState) => {
    fetch(AUDITION, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        actor_id: audition.actor_id,
        role_id: audition.role_id,
        time: moment(audition.time).format('h:mm a'),
        location: audition.location,
        date: audition.date,
      }),
    })
      .then((resp) => resp.json())
      .then(console.log);
  };
};

export const getGigAuditions = (id) => {
  return (dispatch, getState) => {
    fetch(GIG_AUDITIONS + id)
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: GET_GIG_AUDITIONS, payload: data }));
  };
};

export const patchAudition = (id, patch) => {
  return (dispatch, getState) => {
    fetch(AUDITION + id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        audition: patch,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: PATCH_AUDITION, payload: data }));
  };
};
