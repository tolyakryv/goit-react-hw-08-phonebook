import Button from 'react-bootstrap/Button';
// import { useDispatch } from 'react-redux';
import propType from 'prop-types';
import s from './ContactElm.module.css';
import { useDeleteContactsMutation } from 'services/contactsAPI';
// import actions from 'redux/contacts-action';

const ContactElm = ({ id, name, number }) => {
  // const dispatch = useDispatch();
  const [deleteContact] = useDeleteContactsMutation();
  return (
    <li className={s.list}>
      {name}: {number}
      {/* <button className={s.btn} type="button" onClick={() => deleteContact(id)}>
        delete
      </button> */}
      <Button
        className={s.btn}
        type="button"
        onClick={() => deleteContact(id)}
        variant="danger"
      >
        delete
      </Button>
    </li>
  );
};
export default ContactElm;
ContactElm.propType = {
  id: propType.string.isRequired,
  name: propType.string.isRequired,
  number: propType.string.isRequired,
};
