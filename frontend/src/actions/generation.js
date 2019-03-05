import { GENERATION } from './types';
export const generationActionCreator = payload => {
  return {
    type: GENERATION_ACTION_TYPE,
    generation: payload
  };
};

const fetchGeneration = () => dispatch => {
  dispatch({ type: GENERATION.FETCH });
  return fetch('http://localhost:4001/generation')
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
      // dispatch(generationActionCreator(generationJson.generation));
    })
    .catch(error => dispatch({type: GENERATION.FETCH_ERROR, message: error.message}) 
};