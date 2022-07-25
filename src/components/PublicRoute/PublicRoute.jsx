import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import AuthSelector from 'redux/auth-selector';

export default function PublicRoute() {
  const isLoggedIn = useSelector(AuthSelector.getIsLoggedIn);
  return isLoggedIn ? <Navigate to="/contacts" /> : <Outlet />;
}
