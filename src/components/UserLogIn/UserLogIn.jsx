import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import AuthSelector from 'redux/auth-selector';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import operation from 'redux/auth-operation';
import s from './UserLogIn.module.css';
const UserLogIn = () => {
  const dispatch = useDispatch();
  const name = useSelector(AuthSelector.getUserName);
  return (
    <>
      <Container>
        <div className={s.container}>
          <span className={s.name}>Hello {name}</span>
          <Button
            onClick={() => dispatch(operation.logOut())}
            variant="primary"
            type="button"
          >
            Log out
          </Button>
        </div>
      </Container>
    </>
  );
};
export default UserLogIn;
