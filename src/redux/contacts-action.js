import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const addContacts = createAction('contact/add', ({ name, number }) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
const deleteContact = createAction('contact/delete');
const filterContact = createAction('contact/filter');
const actions = { addContacts, filterContact, deleteContact };
export default actions;
