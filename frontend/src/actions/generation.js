import {GENERATION_ACTION_TYPE} from './types'
const generationActionCreator = payload => {
  return {
    type: GENERATION_ACTION_TYPE,
    generation: payload
  }
}