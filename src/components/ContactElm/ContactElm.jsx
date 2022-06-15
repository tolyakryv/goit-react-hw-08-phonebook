import propType from 'prop-types';
import s from './ContactElm.module.css';
const ContactElm = ({ id, name, number, deleteContact }) => {
  return (
    <li className={s.list} key={id}>
      {name}: {number}
      <button className={s.btn} type="button" onClick={() => deleteContact(id)}>
        delete
      </button>
    </li>
  );
};
export default ContactElm;
ContactElm.propType = {
  id: propType.string.isRequired,
  name: propType.string.isRequired,
  number: propType.string.isRequired,
  deleteContact: propType.func.isRequired,
};
