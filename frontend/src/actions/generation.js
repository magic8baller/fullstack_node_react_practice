import {GENERATION_ACTION_TYPE} from './type'
const generationActionCreator = payload => {
  return {
    type: GENERATION_ACTION_TYPE,
    generation: payload
  }
}