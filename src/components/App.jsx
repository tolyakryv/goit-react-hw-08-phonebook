import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { useGetAllContactsQuery } from 'services/contactsAPI';
// import ContactForm from './ContactForm';
// import Filter from './Filter';
import { Routes, Route, Navigate } from 'react-router-dom';
// import ContactList from './ContactList';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NavigationBar from './NavigationBar';
import AuthSelector from 'redux/auth-selector';
import operation from 'redux/auth-operation';
import Container from './Container';
import ContactPage from 'pages/ContactPage';
import Registration from './Registration';
import AuthForm from './AuthForm';
// const ContactPage = lazy(() => import('pages/ContactPage'));
// const Registration = lazy(() => import('./Registration'));
// const AuthForm = lazy(() => import('./AuthForm'));
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
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route path="/login" element={<AuthForm />} />
          <Route path="/register" element={<Registration />} />
        </Route>
        {/* -------------------------- */}
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<Navigate replace to="/contacts" />} />
          <Route path="/contacts" element={<ContactPage />} />
        </Route>

        <Route path="*" element={<Navigate replace to="/" />} />
        {/* <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<AuthForm />} /> */}
      </Routes>
      ;
    </Container>
  );
};
export default App;

// <AuthForm></AuthForm>
// <Registration></Registration>
// <ContactPage></ContactPage>
// /----------------------
// <Registration></Registration>
// <AuthForm></AuthForm>
// <h1>Phonebook</h1>
// <ContactForm></ContactForm>
// <h2>Contacts</h2>
// {contactLength > 1 && <Filter></Filter>}
// <ContactList></ContactList>
