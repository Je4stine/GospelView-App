import { combineReducers } from 'redux';
import auth from './auth';
import packages from './packages';

export default combineReducers({
  auth,
  packages
});