import { combineReducers } from '@reduxjs/toolkit';
import leads from './leads';
import errors from './errors';
import messages from './messages';

const rootReducer = combineReducers({
  leads,
  errors,
  messages,
});

export default rootReducer;