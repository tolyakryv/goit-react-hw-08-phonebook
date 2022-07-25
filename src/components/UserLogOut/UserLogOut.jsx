import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
const UserLogOut = () => {
  return (
    <>
      <Container>
        <Nav className="me-auto">
          {/* <Nav.Link href="#reg">Registration</Nav.Link>
          <Nav.Link href="#auth">Authentication</Nav.Link> */}
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/register">Registration</NavLink>
        </Nav>
      </Container>
    </>
  );
};
export default UserLogOut;
