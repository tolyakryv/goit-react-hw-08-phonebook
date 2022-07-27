import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import { NavLink, Outlet } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import UserMenu from 'components/UserMenu/UserMenu';
import s from './NavigationBar.css';
import AuthSelector from 'redux/auth-selector';
const NavigationBar = () => {
  const isLoggedIn = useSelector(AuthSelector.getIsLoggedIn);
  return (
    <>
      <Navbar className={s.container} bg="dark" variant="dark">
        <Container>
          {isLoggedIn && (
            <NavLink style={{ textDecoration: 'none' }} to="/contacts">
              Contacts
            </NavLink>
          )}
          <UserMenu />
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};
export default NavigationBar;
