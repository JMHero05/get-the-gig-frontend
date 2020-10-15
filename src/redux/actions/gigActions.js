import { GIG } from '../../helpers/routes';
import { CREATE_GIG, GET_GIGS, GET_GIG } from '../constants/actionTypes';

export const createGig = (gig) => {
  return (dispatch, getState) => {
    fetch(GIG, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        casting_director_id: gig.casting_director_id,
        title: gig.title,
        gig_type: gig.gig_type,
        union: gig.union,
        producer: gig.producer,
        director: gig.director,
        choreographer: gig.choreographer,
        music_director: gig.music_director,
        opening_date: gig.opening_date,
        closing_date: gig.closing_date,
        gig_location: gig.gig_location,
        pay_rate: gig.pay_rate,
        audition_date: gig.audition_date,
        audition_location: gig.audition_location,
      }),
    })
      .then((resp) => resp.json())
      .then(console.log);
    dispatch({ type: CREATE_GIG, gig });
  };
};

export const getGigs = () => {
  return (dispatch, getState) => {
    fetch(GIG)
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: GET_GIGS, payload: data }));
  };
};

export const getGig = (id) => {
  return (dispatch, getState) => {
    fetch(GIG + id)
      .then((resp) => resp.json())
      .then((data) => dispatch({ type: GET_GIG, payload: data }));
  };
};
