import ContactElm from 'components/ContactElm';

import { useSelector } from 'react-redux';
const ContactList = () => {
  const filter = useSelector(state => state.contacts.filter);
  const contacts = useSelector(state => state.contacts.items);
  const showContact = () => {
    return contacts.filter(contact =>
      contact.name.toUpperCase().includes(filter.toUpperCase())
    );
  };

  return (
    <ul>
      {showContact().map(({ id, name, number }) => {
        return <ContactElm key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};
export default ContactList;
