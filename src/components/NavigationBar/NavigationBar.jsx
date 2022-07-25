import Container from 'react-bootstrap/Container';
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
            <Nav.Link href="#home">Phonebook</Nav.Link>
            <Nav.Link href="#contact">Contacts</Nav.Link>
            <Nav.Link href="#reg">Registration</Nav.Link>
            <Nav.Link href="#auth">Authentication</Nav.Link>
            <Nav.Link href="#log_out">Log out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <UserMenu />
    </>
  );
};
export default NavigationBar;
