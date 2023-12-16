import { combineReducers } from '@reduxjs/toolkit';
import leads from './leads';

const rootReducer = combineReducers({
  leads,
});

export default rootReducer;