import { useSelector } from 'react-redux';
import AuthSelector from 'redux/auth-selector';
import UserLogOut from 'components/UserLogOut';
import UserLogIn from 'components/UserLogIn';
export default function UserMenu() {
  const isLoggedIn = useSelector(AuthSelector.getIsLoggedIn);
  return <>{isLoggedIn ? <UserLogIn /> : <UserLogOut />}</>;
}
