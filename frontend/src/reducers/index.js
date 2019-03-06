import { combineReducers } from 'redux';
import dragon from './dragon';
import generation from './generation';

export default combineReducers({ generation, dragon });
