import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import s from './ContactForm.module.css';

import {
  useAddContactsMutation,
  useGetAllContactsQuery,
} from 'services/contactsAPI';
// import actions from 'redux/contacts-action';
export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { data } = useGetAllContactsQuery();
  const [addContacts] = useAddContactsMutation();

  const onSubmitForm = e => {
    e.preventDefault();
    if (
      data.some(contact => contact.name.toUpperCase() === name.toUpperCase())
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    addContacts({ name, number });
    setName('');
    setNumber('');
  };
  const changeInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };
  return (
    <form
      autoComplete="off"
      className={s.container_contact}
      onSubmit={onSubmitForm}
    >
      <label className={s.label_contact}>
        Name
        <input
          className={s.input_contact}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={changeInput}
        />
      </label>
      <label className={s.label_contact}>
        Number
        <input
          className={s.input_contact}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={changeInput}
        />
      </label>
      <Button className={s.btn_contact} type="submit">
        {' '}
        add contact
      </Button>
    </form>
  );
}
