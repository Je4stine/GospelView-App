import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth';
import packages from './packages';
import errors from './errors';
import media from './media';

export default combineReducers({
  auth,
  packages,
  media,
  errors
});