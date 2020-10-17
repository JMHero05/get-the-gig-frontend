import { GIG, ROLE } from '../../helpers/routes';
import {
  CREATE_GIG,
  GET_GIGS,
  GET_GIG,
  DELETE_GIG,
} from '../constants/actionTypes';

export const createGig = (gig, roles) => {
  return (dispatch, getState) => {
    fetch(GIG, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        gig,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        if (roles.length > 0) {
          roles.map((role) =>
            fetch(ROLE, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
              body: JSON.stringify({
                gig_id: data.id,
                role_type: role.role_type,
                name: role.name,
                description: role.description,
                gender: role.gender,
                beg_age_range: role.beg_age_range,
                end_age_range: role.end_age_range,
              }),
            })
          );
        }
        console.log('No Roles!');
      });
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

export const deleteGig = (id) => {
  return (dispatch, getState) => {
    fetch(GIG + id, {
      method: 'DELETE',
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: DELETE_GIG, payload: data });
      });
  };
};
