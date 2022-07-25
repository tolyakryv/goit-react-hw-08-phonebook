import Container from 'react-bootstrap/Container';
import { NavLink, Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import UserMenu from 'components/UserMenu/UserMenu';
const NavigationBar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          {/* <Navbar.Brand href="#home">Phonebook</Navbar.Brand> */}
          <Nav className="me-auto">
            <NavLink to="/">Phonebook</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            {/* <NavLink to="/register" exact>
              Registration
            </NavLink>
            <NavLink to="/login" exact>
              Log In
            </NavLink> */}
            {/* <Nav.Link href="#reg">Registration</Nav.Link>
            <Nav.Link href="#auth">Authentication</Nav.Link>
            <Nav.Link href="#log_out">Log out</Nav.Link> */}
            <UserMenu />
          </Nav>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
};
export default NavigationBar;
