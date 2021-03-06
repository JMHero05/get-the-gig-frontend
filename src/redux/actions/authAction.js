import {
  LOGIN_ERROR,
  LOGIN_SUCCESS,
  VALID_TOKEN,
  SIGNOUT_SUCCESS,
  REGISTRATION_ERROR,
  REGISTRATION_SUCCESS,
} from '../constants/actionTypes';
import {
  CASTING_SIGN_IN,
  PROFILE,
  CASTING,
  ACTOR,
  ACTOR_SIGN_IN,
} from '../../helpers/routes';

export const validToken = () => {
  return (dispatch, getState) => {
    const token = localStorage.getItem('token');
    // debugger;
    if (token) {
      fetch(PROFILE, {
        method: 'GET',
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((resp) => resp.json())
        .then((data) => {
          if (data.casting_director) {
            dispatch({
              type: VALID_TOKEN,
              user: data.casting_director,
            });
          } else {
            dispatch({
              type: VALID_TOKEN,
              user: data.actor,
            });
          }
        });
    }
  };
};

export const castingSignIn = (credentials) => {
  return (dispatch, getState) => {
    fetch(CASTING_SIGN_IN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        casting_director: {
          email: credentials.email,
          password: credentials.password,
        },
      }),
    })
      .then((resp) => resp.json().then((user) => ({ user, resp })))
      .then(({ user, resp }) => {
        if (!resp.ok) {
          dispatch({ type: LOGIN_ERROR, authError: resp });
        } else {
          localStorage.setItem('token', user.jwt);
          dispatch({ type: LOGIN_SUCCESS, user: user.user });
        }
      });
  };
};

export const castingRegistration = (casting) => {
  return (dispatch, getState) => {
    fetch(CASTING, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        casting_director: {
          name: casting.name,
          email: casting.email,
          password: casting.password,
          agency: casting.agency,
          address: casting.address,
          city: casting.city,
          state: casting.state,
          zip: casting.zip,
        },
      }),
    })
      .then((resp) => resp.json().then((user) => ({ user, resp })))
      .then(({ user, resp }) => {
        if (!resp.ok) {
          dispatch({ type: REGISTRATION_ERROR });
        } else {
          localStorage.setItem('token', user.jwt);
          dispatch({ type: REGISTRATION_SUCCESS, user: user.casting_director });
        }
      });
  };
};

export const actorRegistration = (actor) => {
  return (dispatch, getState) => {
    fetch(ACTOR, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        actor,
      }),
    })
      .then((resp) => resp.json().then((user) => ({ user, resp })))
      .then(({ user, resp }) => {
        if (!resp.ok) {
          dispatch({ type: REGISTRATION_ERROR });
        } else {
          localStorage.setItem('token', user.jwt);
          dispatch({ type: REGISTRATION_SUCCESS, user: user.actor });
        }
      });
  };
};

export const actorSignIn = (credentials) => {
  return (dispatch, getState) => {
    fetch(ACTOR_SIGN_IN, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        actor: {
          email: credentials.email,
          password: credentials.password,
        },
      }),
    })
      .then((resp) => resp.json().then((user) => ({ user, resp })))
      .then(({ user, resp }) => {
        if (!resp.ok) {
          dispatch({ type: LOGIN_ERROR, authError: resp });
        } else {
          localStorage.setItem('token', user.jwt);
          dispatch({ type: LOGIN_SUCCESS, user: user.user });
        }
      });
  };
};

export const signOut = () => {
  return (dispatch, getState) => {
    return dispatch({ type: SIGNOUT_SUCCESS });
  };
};
