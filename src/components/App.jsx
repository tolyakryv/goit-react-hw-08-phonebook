import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useGetAllContactsQuery } from 'services/contactsAPI';
// import ContactForm from './ContactForm';
// import Filter from './Filter';
import { Routes, Route } from 'react-router-dom';
// import ContactList from './ContactList';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Registration from './Registration';
import AuthForm from './AuthForm';
import NavigationBar from './NavigationBar';
import AuthSelector from 'redux/auth-selector';
import operation from 'redux/auth-operation';
import Container from './Container';
import ContactPage from 'pages/ContactPage';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operation.fetchCurrentUser());
  }, [dispatch]);

  const logged = AuthSelector.getIsLoggedIn;
  console.log(logged);
  return (
    <Container>
      <NavigationBar></NavigationBar>
      <Routes>
        <Route path="/" element={<ContactPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<AuthForm />} />
        <Route path="/contacts" element={<ContactPage />} />
      </Routes>
    </Container>
  );
};
export default App;

// <Registration></Registration>
//       <AuthForm></AuthForm>

// <h1>Phonebook</h1>
// <ContactForm></ContactForm>
// <h2>Contacts</h2>
// {contactLength > 1 && <Filter></Filter>}
// <ContactList></ContactList>
