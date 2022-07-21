import React from 'react';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const App = () => {
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
      <Filter></Filter>
      <ContactList></ContactList>
    </div>
  );
};

export default App;
