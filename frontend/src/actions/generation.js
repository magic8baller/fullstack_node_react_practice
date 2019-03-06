import { baseAPI } from '../config';
import { GENERATION } from './types';
export const fetchGeneration = () => dispatch => {
  dispatch({ type: GENERATION.FETCH });
  return fetch(`${baseAPI}/generation`)
    .then(r => r.json())
    .then(jsonRes => {
      if (jsonRes.type === 'error') {
        dispatch({
          type: GENERATION.FETCH_ERROR,
          message: jsonRes.message
        });
      } else {
        dispatch({
          type: GENERATION.FETCH_SUCCESS,
          generation: jsonRes.generation
        });
      }
    })
    .catch(error =>
      dispatch({ type: GENERATION.FETCH_ERROR, message: error.message })
    );
};
