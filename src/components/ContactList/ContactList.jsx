import ContactElm from 'components/ContactElm';
import propTypes from 'prop-types';
const ContactList = ({ showContact, deleteContact }) => {
  return (
    <ul>
      {showContact.map(({ id, name, number }) => {
        return (
          <ContactElm
            key={id}
            id={id}
            name={name}
            number={number}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};
export default ContactList;
ContactList.propTypes = {
  deleteContact: propTypes.func.isRequired,
  showContact: propTypes.array,
};
