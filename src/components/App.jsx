import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useGetAllContactsQuery } from 'services/contactsAPI';
import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';
import Registration from './Registration';
import AuthForm from './AuthForm';
import NavigationBar from './NavigationBar';
import AuthSelector from 'redux/auth-selector';
import operation from 'redux/auth-operation';
const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operation.fetchCurrentUser());
  }, [dispatch]);
  const { data } = useGetAllContactsQuery();

  if (data) {
    const contactLength = data.length;
    console.log(contactLength);
    const logged = AuthSelector.getIsLoggedIn;
    console.log(logged);
    return (
      <div
        style={{
          display: 'block',
          width: '500px',
          margin: '0 auto',
        }}
      >
        <NavigationBar></NavigationBar>

        <Registration></Registration>

        <AuthForm></AuthForm>

        {/* <Registration></Registration>
          <AuthForm></AuthForm> */}

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
