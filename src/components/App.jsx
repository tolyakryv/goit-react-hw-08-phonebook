import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import NavigationBar from './NavigationBar';
import AuthSelector from 'redux/auth-selector';
import operation from 'redux/auth-operation';
import Container from './Container';
import ContactPage from 'pages/ContactPage';

import { Circles } from 'react-loader-spinner';
import RegistrationPage from 'pages/RegistrationPage';
import AutorisationPage from 'pages/AutorisationPage';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operation.fetchCurrentUser());
  }, [dispatch]);

  const refreshUser = useSelector(AuthSelector.getIsRefreshCurrentUser);

  return (
    <Container>
      <NavigationBar></NavigationBar>
      {refreshUser ? (
        <div style={{ marginLeft: '40%', marginRight: 'auto' }}>
          <Circles color="#00BFFF" height={80} width={80} />
        </div>
      ) : (
        <>
          <Routes>
            <Route path="/" element={<PublicRoute />}>
              <Route path="/" element={<Navigate replace to="/login" />} />
              <Route path="/login" element={<AutorisationPage />} />
              <Route path="/register" element={<RegistrationPage />} />
            </Route>
            {/* -------------------------- */}
            <Route path="/" element={<PrivateRoute />}>
              <Route path="/" element={<Navigate replace to="/contacts" />} />
              <Route path="/contacts" element={<ContactPage />} />
            </Route>

            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </>
      )}
    </Container>
  );
};
export default App;
