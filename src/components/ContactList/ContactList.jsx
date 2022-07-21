import ContactElm from 'components/ContactElm';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
const ContactList = ({ deleteContact }) => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);
  const showContact = () => {
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  };
  console.log(showContact());
  // => {
  // return contacts.filter(contact =>
  //   contact.name.toUpperCase().includes(filter.toUpperCase())
  // );
  // };
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
  showContact: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
};
