import { baseAPI } from '../config';
import { GENERATION } from './types';
export const fetchGeneration = () => async dispatch => {
  dispatch({ type: GENERATION.FETCH });
  try {
    const r = await fetch(`${baseAPI}/generation`);
    const jsonRes = await r.json();
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
  } catch (error) {
    return dispatch({ type: GENERATION.FETCH_ERROR, message: error.message });
  }
};
