import React from 'react';
import { useGetAllContactsQuery } from 'services/contactsAPI';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const App = () => {
  const { data } = useGetAllContactsQuery();

  if (data) {
    const contactLength = data.length;
    console.log(contactLength);

    return (
      <div
        style={{
          display: 'block',
          width: '450px',
          margin: '0 auto',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm></ContactForm>
        <h2>Contacts</h2>
        {contactLength > 1 && <Filter></Filter>}
        <ContactList></ContactList>
      </div>
    );
  }
};
export default App;
