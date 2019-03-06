import { baseAPI } from '../config';
import { DRAGON } from './types';
export const fetchDragon = () => async dispatch => {
  dispatch({ type: DRAGON.FETCH });
  try {
    const r = await fetch(`${baseAPI}/dragon/new`);
    const json = await r.json();
    if (json.type === 'error') {
      dispatch({ type: DRAGON.FETCH_ERROR, message: json.message });
    } else {
      dispatch({ type: DRAGON.FETCH_SUCCESS, dragon: json.dragon });
    }
  } catch (error) {
    return dispatch({ type: DRAGON.FETCH_ERROR, message: error.message });
  }
};
