import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  onSubmit = contact => {
    const addContacts = {
      id: nanoid(),
      name: contact.name,
      number: contact.number,
    };

    this.state.contacts.some(
      contact => contact.name.toUpperCase() === addContacts.name.toUpperCase()
    )
      ? alert(`${contact.name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [...contacts, addContacts],
        }));
  };
  inputFilter = e => {
    this.setState({ filter: e.target.value });
  };
  filteredContact = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toUpperCase().includes(this.state.filter.toUpperCase())
    );
  };
  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(e => e.id !== id),
    }));
  };
  render() {
    const showContact = this.filteredContact();
    return (
      <div
        style={{
          display: 'block',
          width: '450px',
          margin: '0 auto',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit}></ContactForm>
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.inputFilter}></Filter>
        <ContactList
          showContact={showContact}
          deleteContact={this.deleteContact}
        ></ContactList>
      </div>
    );
  }
}
