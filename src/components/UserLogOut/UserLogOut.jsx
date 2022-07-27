import { NavLink } from 'react-router-dom';

const UserLogOut = () => {
  return (
    <>
      <NavLink style={{ textDecoration: 'none' }} to="/login">
        Log In
      </NavLink>
      <NavLink style={{ textDecoration: 'none' }} to="/register">
        Registration
      </NavLink>
    </>
  );
};
export default UserLogOut;
