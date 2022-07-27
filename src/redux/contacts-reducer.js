// import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import actions from './contacts-action';

export const filter = createReducer('', {
  [actions.filterContact]: (_, { payload }) => payload,
});
