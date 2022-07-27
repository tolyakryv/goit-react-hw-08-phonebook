import Button from 'react-bootstrap/Button';

import AuthSelector from 'redux/auth-selector';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import operation from 'redux/auth-operation';
import s from './UserLogIn.module.css';
const UserLogIn = () => {
  const dispatch = useDispatch();
  const name = useSelector(AuthSelector.getUserName);
  function stringAvatar(name) {
    return {
      children: `${name.split(' ')[0][0]}`,
    };
  }
  return (
    <>
      <>
        <div className={s.container}>
          <span className={s.name}>User {name}</span>
          <Avatar {...stringAvatar(name)} />
          <Button
            onClick={() => dispatch(operation.logOut())}
            variant="primary"
            className={s.btn}
            type="button"
          >
            Log out
          </Button>
        </div>
      </>
    </>
  );
};
export default UserLogIn;
