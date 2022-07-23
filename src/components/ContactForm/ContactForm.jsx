import React, { useState } from 'react';

import s from './ContactForm.module.css';
// import { useDispatch, useSelector } from 'react-redux';
import {
  useAddContactsMutation,
  useGetAllContactsQuery,
} from 'services/contactsAPI';
// import actions from 'redux/contacts-action';
export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { data } = useGetAllContactsQuery();
  const [addContacts] = useAddContactsMutation();
  // const dispatch = useDispatPhone
  const onSubmitForm = e => {
    e.preventDefault();
    if (
      data.some(contact => contact.name.toUpperCase() === name.toUpperCase())
    ) {
      alert(`${name} is already in contacts`);
      return;
    }
    addContacts({ name, phone });
    setName('');
    setPhone('');
  };
  const changeInput = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setPhone(e.target.value);
        break;
      default:
        return;
    }
  };
  return (
    <form autoComplete="off" className={s.container} onSubmit={onSubmitForm}>
      <label>
        Name
        <input
          className={s.input}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={changeInput}
        />
      </label>
      <label>
        Number
        <input
          className={s.input}
          value={phone}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={changeInput}
        />
      </label>
      <button className={s.btn} type="submit">
        add contact
      </button>
    </form>
  );
}
