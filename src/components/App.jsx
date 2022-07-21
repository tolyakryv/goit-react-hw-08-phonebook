import React, { useState, useEffect } from 'react';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
  const [filter, setFilter] = useState('');
  const contactsLocal = JSON.parse(localStorage.getItem('contacts'));
  useEffect(() => {
    if (contactsLocal) {
      setContacts(contactsLocal);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  // const OnSubmitProp = ({ name, number }) => {
  //   const addContacts = {
  //     id: nanoid(),
  //     name: name,
  //     number: number,
  //   };

  //   if (
  //     contacts.some(
  //       contact => contact.name.toUpperCase() === addContacts.name.toUpperCase()
  //     )
  //   ) {
  //     alert(`${addContacts.name} is already in contacts`);
  //     return;
  //   }
  //   setContacts([...contacts, addContacts]);
  // };
  const inputFilter = e => {
    setFilter(e.target.value);
  };
  const showContact = () => {
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  };
  const deleteContact = id => {
    const notContact = contacts.filter(e => e.id !== id);
    setContacts(notContact);
  };
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
      <Filter value={filter} onChange={inputFilter}></Filter>
      <ContactList
        showContact={showContact()}
        deleteContact={deleteContact}
      ></ContactList>
    </div>
  );
};

export default App;
// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//       { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//       { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//       { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
//     ],
//     filter: '',
//   };
//   componentDidMount() {
//     if (localStorage.contacts !== undefined) {
//       const contactsLocal = JSON.parse(localStorage.getItem('contacts'));
//       this.setState({
//         contacts: contactsLocal,
//       });
//     }
//   }
//   componentDidUpdate(prevProps, prevState) {
//     if (prevState.contacts !== this.state.contacts) {
//       this.updateLocalStorage();
//     }
//   }
//   updateLocalStorage = () => {
//     localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
//   };
//   onSubmit = contact => {
//     const addContacts = {
//       id: nanoid(),
//       name: contact.name,
//       number: contact.number,
//     };

//     this.state.contacts.some(
//       contact => contact.name.toUpperCase() === addContacts.name.toUpperCase()
//     )
//       ? alert(`${contact.name} is already in contacts`)
//       : this.setState(({ contacts }) => ({
//           contacts: [...contacts, addContacts],
//         }));
//   };
//   inputFilter = e => {
//     this.setState({ filter: e.target.value });
//   };
//   filteredContact = () => {
//     return this.state.contacts.filter(contact =>
//       contact.name.toUpperCase().includes(this.state.filter.toUpperCase())
//     );
//   };
//   deleteContact = id => {
//     this.setState(prevState => ({
//       contacts: prevState.contacts.filter(e => e.id !== id),
//     }));
//   };
//   render() {
//     const showContact = this.filteredContact();
//     return (
//       <div
//         style={{
//           display: 'block',
//           width: '450px',
//           margin: '0 auto',
//         }}
//       >
//         <h1>Phonebook</h1>
//         <ContactForm onSubmit={this.onSubmit}></ContactForm>
//         <h2>Contacts</h2>
//         <Filter value={this.state.filter} onChange={this.inputFilter}></Filter>
//         <ContactList
//           showContact={showContact}
//           deleteContact={this.deleteContact}
//         ></ContactList>
//       </div>
//     );
//   }
// }
