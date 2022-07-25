import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import AuthSelector from 'redux/auth-selector';
import operation from 'redux/auth-operation';
import s from './UserMenu.module.css';
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(AuthSelector.getUserName);

  return (
    <div className={s.container}>
      <span className={s.name}>Добро пожаловать, {name}</span>
      <Button
        onClick={() => dispatch(operation.logOut())}
        variant="primary"
        type="button"
      >
        Log out
      </Button>
    </div>
  );
}
