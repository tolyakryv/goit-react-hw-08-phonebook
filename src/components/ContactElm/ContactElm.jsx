import Button from 'react-bootstrap/Button';

import propType from 'prop-types';
import s from './ContactElm.module.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeleteContactsMutation } from 'services/contactsAPI';

const ContactElm = ({ id, name, number }) => {
  const [deleteContact] = useDeleteContactsMutation();
  return (
    <li className={s.list}>
      <Button
        className={s.btn}
        type="button"
        onClick={() => deleteContact(id)}
        variant="danger"
      >
        <DeleteIcon />
      </Button>
      {name}: {number}
      {/* <button className={s.btn} type="button" onClick={() => deleteContact(id)}>
        delete
      </button> */}
    </li>
  );
};
export default ContactElm;
ContactElm.propType = {
  id: propType.string.isRequired,
  name: propType.string.isRequired,
  number: propType.string.isRequired,
};
