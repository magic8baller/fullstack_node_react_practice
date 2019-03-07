import { baseAPI } from '../config';
import { ACCOUNT } from './types';

export const signup = ({ username, password }) => dispatch => {
  dispatch({ type: ACCOUNT.FETCH });

  return fetch(`${baseAPI}/account/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
      //allow storing session!
      credentials: 'include'
    },
    body: JSON.stringify({ username, password })
  })
    .then(r => r.json())
    .then(json => {
      if (json.type === 'error') {
        dispatch({ type: ACCOUNT.FETCH_ERROR, message: json.message });
      } else {
        dispatch({ type: ACCOUNT.FETCH_SUCCESS, ...json });
      }
    })
    .catch(error =>
      dispatch({
        type: ACCOUNT.FETCH_ERROR,
        message: error.message
      })
    );
};
