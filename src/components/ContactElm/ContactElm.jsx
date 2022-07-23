// import { useDispatch } from 'react-redux';
import propType from 'prop-types';
import s from './ContactElm.module.css';
import { useDeleteContactsMutation } from 'services/contactsAPI';
// import actions from 'redux/contacts-action';

const ContactElm = ({ id, name, number }) => {
  // const dispatch = useDispatch();
  const [deleteContact, { isLoading }] = useDeleteContactsMutation();
  return (
    <li className={s.list}>
      {name}: {number}
      <button className={s.btn} type="button" onClick={() => deleteContact(id)}>
        {isLoading ? ' ' : 'delete'}
      </button>
    </li>
  );
};
export default ContactElm;
ContactElm.propType = {
  id: propType.string.isRequired,
  name: propType.string.isRequired,
  number: propType.string.isRequired,
};
