import { createAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { nanoid } from 'nanoid';

const addContacts = createAction('contact/add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
export default addContacts;
