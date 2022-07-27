import ContactElm from 'components/ContactElm';

import { useGetAllContactsQuery } from 'services/contactsAPI';
import { useSelector } from 'react-redux';
const ContactList = () => {
  const filters = useSelector(state => state.filter);
  const { data, isLoading } = useGetAllContactsQuery();

  const showContact = () =>
    data.filter(contact =>
      contact.name.toUpperCase().includes(filters.toUpperCase())
    );
  return (
    <ul>
      {isLoading && <h2>Loading</h2>}
      {!isLoading &&
        showContact().map(({ id, name, number }) => {
          return <ContactElm key={id} id={id} name={name} number={number} />;
        })}
    </ul>
  );
};

export default ContactList;
