import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import AuthSelector from 'redux/auth-selector';

export default function PrivateRoute() {
  const isLoggedIn = useSelector(AuthSelector.getIsLoggedIn);
  return isLoggedIn ? <Outlet /> : <Navigate to="/" />;
}
